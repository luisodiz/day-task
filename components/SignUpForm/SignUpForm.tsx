import React from 'react'
import {Text, View} from 'react-native'
import {Formik} from 'formik'
import * as Yup from 'yup'
import type {FormikProps} from 'formik/dist/types'

import InputField from '../Form/InputField/InputField'
import PasswordField from '../Form/PasswordField/PasswordField'
import CustomButton from '../CustomButton/CustomButton'
import CheckBoxField from '../Form/CheckboxField/CheckboxField'
import {icons} from '../../assets/icons'

const SignUpSchema = Yup.object().shape({
  fullName: Yup.string().required('No name provided'),
  email: Yup.string()
    .email('Invalid email address')
    .required('No email provided'),
  password: Yup.string()
    .min(8, 'PasswordField must be at least 8 characters')
    .matches(/[a-zA-Z]/, 'PasswordField can only contain Latin letters.')
    .required('No password provided'),
  isAgreeWithTerms: Yup.bool()
    .oneOf([true], 'You must agree to the user agreement')
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
}

const SignUpForm: React.FC<SignUpFormProps> = ({initialValues, formikRef}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
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
      }) => (
        <View>
          <View className="mb-[12px]">
            <InputField
              label="Full Name"
              placeholder="Type your full name"
              iconLeft={icons.User}
              value={values.fullName}
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              error={errors.fullName}
              touched={touched.fullName}
            />
          </View>
          <View className="mb-[12px]">
            <InputField
              label="Email Address"
              placeholder="Type your email"
              iconLeft={icons.UserTag}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={errors.email}
              touched={touched.email}
            />
          </View>
          <View>
            <PasswordField
              label="Password"
              placeholder="Type your password"
              iconLeft={icons.Lock}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={errors.password}
              touched={touched.password}
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
            <Text className="ml-[10px] shrink">
              <Text className="text-sm font-inter text-textColor">
                I have read & agreed to DayTask{' '}
              </Text>
              <Text className="text-sm font-inter text-accent">
                Privacy Policy, Terms & Condition
              </Text>
            </Text>
          </CheckBoxField>
          <CustomButton
            onPress={handleSubmit as () => void}
            text="Sign Up"
            containerStyles="mt-[38px]"
          />
        </View>
      )}
    </Formik>
  )
}

export default SignUpForm
