import React from 'react'
import {ScrollView, View, Text} from 'react-native'
import {useFocusEffect} from '@react-navigation/native'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import type {FormikProps} from 'formik/dist/types'
import type {MainStackParams} from '../navigation/MainStackNavigator'

import Logo from '../components/Logo'
import ContinueWithButton from '../components/ContinueWithButton'
import SignUpForm, {type SignUpFormValues} from '../components/SignUpForm'

interface SignUpScreenProps
  extends NativeStackScreenProps<MainStackParams, 'SignUp'> {}

function SignUpScreen({navigation}: SignUpScreenProps) {
  const formikRef = React.useRef<FormikProps<SignUpFormValues>>(null)
  const formInitialValues = {
    fullName: '',
    email: '',
    password: '',
  }

  useFocusEffect(
    React.useCallback(() => {
      if (formikRef.current) {
        formikRef.current.resetForm()
      }
    }, []),
  )

  return (
    <ScrollView
      className="bg-primary flex"
      contentContainerStyle={{
        flexGrow: 1,
        padding: 26,
      }}>
      <View>
        <Logo
          iconWidth={92}
          iconHeight={71}
          containerStyles="mb-[50px]"
          textStyles="text-2xl"
        />
        <Text className="text-2xl mb-[23px] text-textSecondary font-isemi">
          Create your account
        </Text>
        <SignUpForm formikRef={formikRef} initialValues={formInitialValues} />
      </View>
      <ContinueWithButton
        message="Already have an account?"
        buttonText="Log in"
        handlePress={() => {
          navigation.navigate('SignIn')
        }}
      />
    </ScrollView>
  )
}

export default SignUpScreen
