import React from 'react'
import {Text, View} from 'react-native'
import {Formik} from 'formik'
import * as yup from 'yup'
import type {FormikHelpers, FormikProps} from 'formik/dist/types'
import type {FirebaseAuthTypes} from '@react-native-firebase/auth'
import auth from '@react-native-firebase/auth'

import InputField from '../Form/InputField/InputField'
import PasswordField from '../Form/PasswordField/PasswordField'
import CustomButton from '../CustomButton/CustomButton'
import CheckBoxField from '../Form/CheckboxField/CheckboxField'
import {icons} from '../../assets/icons'

const schema = yup.object().shape({
  fullName: yup.string().required('Обязательное поле'),
  email: yup.string().email('Некорректный email').required('Обязательное поле'),
  password: yup
    .string()
    .min(6, 'Пароль должен быть не менее 6 символов')
    .matches(/[a-zA-Z]/, 'Пароль может содержать только латинские буквы.')
    .required('Обязательное поле'),
  isAgreeWithTerms: yup
    .bool()
    .oneOf([true], 'Вы должны дать согласие на обработку персональных данных')
    .required(),
})

export interface Values {
  fullName: string
  email: string
  password: string
  isAgreeWithTerms: boolean
}

interface Props {
  initialValues: Values
  formikRef: React.Ref<FormikProps<Values>>
}

const SignUpForm = ({initialValues, formikRef}: Props) => {
  const handleFormSubmit: (
    values: Values,
    formikHelpers: FormikHelpers<Values>,
  ) => void | Promise<any> = async ({email, password}, actions) => {
    try {
      const userCredentials = await auth().createUserWithEmailAndPassword(
        email,
        password,
      )
      console.log(userCredentials)
    } catch (error) {
      if (
        (error as FirebaseAuthTypes.NativeFirebaseAuthError)?.code ===
        'auth/email-already-in-use'
      ) {
        actions.setFieldError(
          'email',
          'Email адресс уже используется другим аккаунтом',
        )
        return
      }

      if (
        (error as FirebaseAuthTypes.NativeFirebaseAuthError)?.code ===
        'auth/invalid-email'
      ) {
        actions.setFieldError('email', 'Некорректный email')
        return
      }

      if (
        (error as FirebaseAuthTypes.NativeFirebaseAuthError)?.code ===
        'auth/weak-password'
      ) {
        actions.setFieldError(
          'password',
          'Пароль должен быть не менее 6 символов',
        )
        return
      }

      if (
        (error as FirebaseAuthTypes.NativeFirebaseAuthError)?.code ===
        'auth/network-request-failed'
      ) {
        console.log('Ошибка интернет соединения', error)
        return
      }

      console.log('Ошибка регистрации пользователя.', error)
    } finally {
      actions.resetForm()
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleFormSubmit}
      innerRef={formikRef}
      validationSchema={schema}>
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        errors,
        touched,
        setFieldValue,
        setFieldTouched,
        isSubmitting,
      }) => (
        <View>
          <View className="mb-[12px]">
            <InputField
              label="ФИО"
              placeholder="Ваше ФИО"
              iconLeft={icons.User}
              value={values.fullName}
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              error={errors.fullName}
              touched={touched.fullName}
              editable={!isSubmitting}
            />
          </View>
          <View className="mb-[12px]">
            <InputField
              label="Email"
              placeholder="Ваш email"
              iconLeft={icons.UserTag}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email}
              touched={touched.email}
              editable={!isSubmitting}
            />
          </View>
          <View>
            <PasswordField
              label="Пароль"
              placeholder="Ваш пароль"
              iconLeft={icons.Lock}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors.password}
              touched={touched.password}
              editable={!isSubmitting}
            />
          </View>
          <CheckBoxField
            containerStyles="w-full items-start mt-[17px]"
            value={values.isAgreeWithTerms}
            onChange={nextValue => {
              return setFieldValue('isAgreeWithTerms', nextValue).then(() => {
                setFieldTouched('isAgreeWithTerms')
              })
            }}
            error={errors.isAgreeWithTerms}
            touched={touched.isAgreeWithTerms}>
            <Text className="ml-[10px] mt-[2px] shrink">
              <Text className="text-sm font-inter text-textColor">
                Я прочитал{' '}
              </Text>
              <Text className="text-sm font-inter text-accent">
                Пользовательское соглашение
              </Text>
            </Text>
          </CheckBoxField>
          <CustomButton
            onPress={handleSubmit as () => void}
            text="Зарегистрироваться"
            containerStyles="mt-[38px]"
          />
        </View>
      )}
    </Formik>
  )
}

export default SignUpForm
