import React from 'react'
import {
  type GestureResponderEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import {Formik} from 'formik'
import * as Yup from 'yup'
import type {FormikProps} from 'formik'
import auth from '@react-native-firebase/auth'
import type {FirebaseAuthTypes} from '@react-native-firebase/auth'

import InputField from '../Form/InputField/InputField'
import PasswordField from '../Form/PasswordField/PasswordField'
import CustomButton from '../CustomButton/CustomButton'
import {icons} from '../../assets/icons'

const SignInSchema = Yup.object().shape({
  email: Yup.string().required('Обязательное поле').email('Некорректный email'),
  password: Yup.string()
    .required('Обязательное поле')
    .min(8, 'Некорректный пароль')
    .matches(/[a-zA-Z]/, 'Некорректный пароль'),
})

export interface SignInFormValues {
  email: string
  password: string
}

interface SignInFormProps {
  initialValues: SignInFormValues
  formRef: React.Ref<FormikProps<SignInFormValues>>
  onForgotPasswordPress?: (event: GestureResponderEvent) => void
}

const SignInForm: React.FC<SignInFormProps> = ({
  formRef,
  initialValues,
  onForgotPasswordPress,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async ({email, password}, actions) => {
        try {
          const credentials = await auth().signInWithEmailAndPassword(
            email,
            password,
          )
          console.log(credentials)
        } catch (error) {
          if (
            (error as FirebaseAuthTypes.NativeFirebaseAuthError)?.code ===
            'auth/invalid-email'
          ) {
            actions.setFieldError('email', 'Некорректный email')
            return
          }

          if (
            (error as FirebaseAuthTypes.NativeFirebaseAuthError)?.code ===
            'auth/user-disabled'
          ) {
            actions.setFieldError(
              'email',
              'Пользователь с таким email отключен',
            )
            return
          }

          if (
            (error as FirebaseAuthTypes.NativeFirebaseAuthError)?.code ===
            'auth/user-not-found'
          ) {
            actions.setFieldError(
              'email',
              'Пользователь с таким email отсутствует',
            )
            return
          }

          if (
            (error as FirebaseAuthTypes.NativeFirebaseAuthError)?.code ===
            'auth/wrong-password'
          ) {
            actions.setFieldError('password', 'Неправильный пароль')
            return
          }

          console.log('Не удалось пройти аутентификацию.', error)
        }
      }}
      validationSchema={SignInSchema}
      innerRef={formRef}>
      {({handleChange, handleSubmit, handleBlur, values, errors, touched}) => (
        <View>
          <View className="mb-[12px]">
            <InputField
              placeholder="Email"
              label="Ваш email"
              iconLeft={icons.UserTag}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email}
              touched={touched.email}
            />
          </View>
          <View className="mb-[12px]">
            <PasswordField
              placeholder="Пароль"
              label="Ваш пароль"
              iconLeft={icons.Lock}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors.password}
              touched={touched.password}
            />
          </View>
          <View className="flex">
            <TouchableOpacity
              activeOpacity={0.7}
              className="self-end"
              onPress={onForgotPasswordPress}>
              <Text className="text-white mt-2">Забыли пароль?</Text>
            </TouchableOpacity>
          </View>
          <CustomButton
            onPress={handleSubmit as () => void}
            text="Войти"
            containerStyles="mt-[38px]"
          />
        </View>
      )}
    </Formik>
  )
}

export default SignInForm
