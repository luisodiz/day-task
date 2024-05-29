import React from 'react'
import {ScrollView, View, Text, TouchableOpacity} from 'react-native'
import {useFocusEffect} from '@react-navigation/native'
import type {FormikProps} from 'formik/dist/types'

import Logo from '../components/Logo/Logo'
import ContinueLine from '../components/ContinueLine/ContinueLine'
import CustomButton from '../components/CustomButton/CustomButton'
import {icons} from '../assets/icons'
import SignUpForm from '../components/SignUpForm/SignUpForm'

import type {MainStack} from '../types'
import type {Values as SignUpFormValues} from '../components/SignUpForm/SignUpForm'

const SignUpScreen = ({navigation}: MainStack.SignUpScreenProps) => {
  const formikRef = React.useRef<FormikProps<SignUpFormValues>>(null)
  const formInitialValues = {
    fullName: '',
    email: '',
    password: '',
    isAgreeWithTerms: false,
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
          Создайте ваш аккаунт
        </Text>
        <SignUpForm formikRef={formikRef} initialValues={formInitialValues} />
      </View>
      <ContinueLine containerStyles="my-[27px]" />

      <CustomButton isOutlined icon={icons.Google} text="Google" />
      <View className="flex flex-row justify-center mt-[25px]">
        <Text className="font-imedium text-base text-textColor">
          Уже имеете аккаунт?
        </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('SignIn')}>
          <Text className="font-isemi text-base text-accent ml-1">
            Войти в систему
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default SignUpScreen
