import React from 'react'
import {ScrollView, View, Text, TouchableOpacity} from 'react-native'
import {useFocusEffect} from '@react-navigation/native'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import type {FormikHelpers, FormikProps} from 'formik/dist/types'
import type {MainStackParams} from '../navigation/MainStackNavigator'
import auth, {type FirebaseAuthTypes} from '@react-native-firebase/auth'

import Logo from '../components/Logo/Logo'
import SignUpForm, {
  type SignUpFormValues,
} from '../components/SignUpForm/SignUpForm'
import ContinueLine from '../components/ContinueLine/ContinueLine'
import CustomButton from '../components/CustomButton/CustomButton'
import {icons} from '../assets/icons'
import {db} from '../firebase/db'

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

function isErrorAuthError(
  error: unknown,
): error is FirebaseAuthTypes.NativeFirebaseAuthError {
  return (
    (error as FirebaseAuthTypes.NativeFirebaseAuthError).code !== undefined &&
    (error as FirebaseAuthTypes.NativeFirebaseAuthError).userInfo !== undefined
  )
}

interface SignUpScreenProps
  extends NativeStackScreenProps<MainStackParams, 'SignUp'> {}

function SignUpScreen({navigation}: SignUpScreenProps) {
  const formikRef = React.useRef<FormikProps<SignUpFormValues>>(null)
  const formInitialValues = {
    fullName: '',
    email: '',
    password: '',
    isAgreeWithTerms: false,
  }

  const handleSubmitForm: (
    values: SignUpFormValues,
    formikHelpers: FormikHelpers<SignUpFormValues>,
  ) => void | Promise<any> = async (values, formikHelpers) => {
    try {
      await sleep(1000)
      const {fullName, email, password} = values
      if (!fullName || !email || !password) {
        throw new Error('Не все поля заполнены')
      }
      const credentials = await auth().createUserWithEmailAndPassword(
        email,
        password,
      )
      console.log(JSON.stringify(credentials))
      const userId = credentials.user.uid
      await db.ref(`/users/${userId}`).set({
        ...credentials.user.toJSON(),
        fullName,
      })
      formikHelpers.resetForm()
      navigation.navigate('Index')
    } catch (error) {
      if (isErrorAuthError(error)) {
        console.log('Авторизация: Что то пошло не так...')
        if (error.code === 'auth/email-already-in-use') {
          console.log('Email адресс уже используется другим аккаунтом')
          formikHelpers.setFieldError(
            'email',
            'Email адресс уже используется другим аккаунтом',
          )
          return
        }

        if (error.code === 'auth/invalid-email') {
          formikHelpers.setFieldError('email', 'Некорректный email')
          return
        }

        if (error.code === 'auth/weak-password') {
          formikHelpers.setFieldError(
            'password',
            'Пароль должен быть не менее 6 символов',
          )
          return
        }

        if (error.code === 'auth/network-request-failed') {
          console.log('Ошибка интернет соединения')
          return
        }
      }

      if (error instanceof Error) {
        console.log(error.message)
        return
      }

      throw error
    }
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
        <SignUpForm
          formikRef={formikRef}
          initialValues={formInitialValues}
          handleSubmit={handleSubmitForm}
        />
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
