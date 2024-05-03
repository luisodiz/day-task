import React, {Ref} from 'react'
import {Text, TouchableOpacity, View} from 'react-native'
import {Formik, FormikProps} from 'formik'
import * as Yup from 'yup'

import InputField from './InputField'
import CustomButton from './CustomButton'
import {icons} from '../assets/icons'

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('No email provided'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .required('No password provided'),
})

export interface SignInFormValues {
  email: string
  password: string
}

interface SignInFormProps {
  formRef: Ref<FormikProps<SignInFormValues>>
}

function SignInForm({formRef}: SignInFormProps) {
  const initialValues: SignInFormValues = {
    email: '',
    password: '',
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
      validationSchema={SignInSchema}
      innerRef={formRef}>
      {({handleChange, handleSubmit, handleBlur, values, errors, touched}) => (
        <View>
          <InputField
            wrapperStyles="mb-[10px]"
            placeholder="Type your email"
            label="Email Address"
            icon={icons.UserTag}
            inputIconStyle="text-white"
            handleChange={handleChange('email')}
            handleBlur={handleBlur('email')}
            value={values.email}
            error={errors.email}
            touched={touched}
            name="email"
          />
          <InputField
            placeholder="Type your password"
            label="Password"
            isPassword
            icon={icons.Lock}
            inputIconStyle="text-white"
            secureTextEntry
            handleChange={handleChange('password')}
            handleBlur={handleBlur('password')}
            value={values.password}
            error={errors.password}
            touched={touched}
            name="password"
          />
          <View className="flex">
            <TouchableOpacity activeOpacity={0.7} className="self-end">
              <Text className="text-white mt-2">Forgot Password</Text>
            </TouchableOpacity>
          </View>
          <CustomButton
            handlePress={handleSubmit}
            title="Log in"
            containerStyles="mt-[38px]"
          />
        </View>
      )}
    </Formik>
  )
}

export default SignInForm
