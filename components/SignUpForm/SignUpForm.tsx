import React from 'react'
import {Text, View} from 'react-native'
import {Formik} from 'formik'
import Toast from 'react-native-toast-message'
import * as Yup from 'yup'
import {genSalt, hash} from 'bcrypt-ts'
import type {FormikHelpers, FormikProps} from 'formik/dist/types'

import InputField from '../Form/InputField/InputField'
import PasswordField from '../Form/PasswordField/PasswordField'
import CustomButton from '../CustomButton/CustomButton'
import CheckBoxField from '../Form/CheckboxField/CheckboxField'
import {icons} from '../../assets/icons'

const SignUpSchema = Yup.object().shape({
  fullName: Yup.string().required('Обязательное поле'),
  email: Yup.string().email('Некорректный email').required('Обязательное поле'),
  password: Yup.string()
    .min(6, 'Пароль должен быть не менее 6 символов')
    .matches(/[a-zA-Z]/, 'Пароль может содержать только латинские буквы.')
    .required('Обязательное поле'),
  isAgreeWithTerms: Yup.bool()
    .oneOf([true], 'Вы должны дать согласие на обработку персональных данных')
    .required(),
})

export interface SignUpFormValues {
  fullName: string
  email: string
  password: string
  isAgreeWithTerms: boolean
}

interface SignUpFormProps {
  initialValues: SignUpFormValues
  formikRef: React.Ref<FormikProps<SignUpFormValues>>
  handleSubmit: (
    values: SignUpFormValues,
    formikHelpers: FormikHelpers<SignUpFormValues>,
  ) => void | Promise<any>
}

const SignUpForm: React.FC<SignUpFormProps> = ({
  initialValues,
  formikRef,
  handleSubmit,
}) => {
  // const showToast = () => {
  //   Toast.show({
  //     type: 'success',
  //     text1: 'NICE AUTHORIZATION',
  //     position: 'bottom',
  //   })
  // }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      innerRef={formikRef}
      validationSchema={SignUpSchema}>
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
