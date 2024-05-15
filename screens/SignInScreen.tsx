import React, {useRef, useCallback} from 'react'
import {ScrollView, Text, View} from 'react-native'
import {useFocusEffect} from '@react-navigation/native'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import type {MainStackParams} from '../navigation/MainStackNavigator'
import type {FormikProps} from 'formik/dist/types'

import Logo from '../components/Logo'
import ContinueWithButton from '../components/ContinueWithButton'
import SignInForm from '../components/SignInForm'
import type {SignInFormValues} from '../components/SignInForm'

interface SignInScreenProps
  extends NativeStackScreenProps<MainStackParams, 'SignIn'> {}

function SignInScreen({navigation}: SignInScreenProps) {
  const formRef = useRef<FormikProps<SignInFormValues>>(null)
  const formInitialValues: SignInFormValues = {
    email: '',
    password: '',
  }
  const clearForm = useCallback(() => {
    if (formRef.current) {
      formRef.current.resetForm()
    }
  }, [])

  useFocusEffect(clearForm)

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
          Welcome Back!
        </Text>
        <SignInForm formRef={formRef} initialValues={formInitialValues} />
        <ContinueWithButton
          message="Don't have an account?"
          buttonText="Sign Up"
          handlePress={() => {
            navigation.navigate('SignUp')
          }}
        />
      </View>
    </ScrollView>
  )
}

export default SignInScreen
