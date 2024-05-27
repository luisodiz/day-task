import React, {useRef, useCallback} from 'react'
import {ScrollView, Text, TouchableOpacity, View} from 'react-native'
import {useFocusEffect} from '@react-navigation/native'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import type {MainStackParams} from '../navigation/MainStackNavigator'
import type {FormikProps} from 'formik/dist/types'

import Logo from '../components/Logo/Logo'
import SignInForm, {
  type SignInFormValues,
} from '../components/SignInForm/SignInForm'
import ContinueLine from '../components/ContinueLine/ContinueLine'
import CustomButton from '../components/CustomButton/CustomButton'
import {icons} from '../assets/icons'

interface SignInScreenProps
  extends NativeStackScreenProps<MainStackParams, 'SignIn'> {}

function SignInScreen({navigation}: SignInScreenProps) {
  const formRef = useRef<FormikProps<SignInFormValues>>(null)
  const formInitialValues: SignInFormValues = {
    email: '',
    password: '',
  }

  const handleForgotPassword = React.useCallback(
    () => navigation.navigate('ForgotPassword'),
    [],
  )

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
        <SignInForm
          formRef={formRef}
          initialValues={formInitialValues}
          onForgotPasswordPress={handleForgotPassword}
        />

        <ContinueLine containerStyles="my-[27px]" />

        <CustomButton isOutlined icon={icons.Google} text="Google" />
        <View className="flex flex-row justify-center mt-[25px]">
          <Text className="font-imedium text-base text-textColor">
            Don’t have an account?
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('SignUp')}>
            <Text className="font-isemi text-base text-accent ml-1">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default SignInScreen
