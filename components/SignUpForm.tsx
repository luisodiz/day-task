import React from 'react'
import {Text, View} from 'react-native'
import {Formik} from 'formik'
import * as Yup from 'yup'

import InputField from './InputField'
import CustomButton from './CustomButton'
import CheckBoxField from '../components/CheckBoxField'
import {icons} from '../assets/icons'

const SignUpSchema = Yup.object().shape({
  fullName: Yup.string().required('No name provided'),
  email: Yup.string()
    .email('Invalid email address')
    .required('No email provided'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .required('No password provided'),
})

interface SignUpSchema {
  fullName: string
  email: string
  password: string
}

function SignUpForm() {
  const initialValues: SignUpSchema = {
    fullName: '',
    email: '',
    password: '',
  }

  function CheckboxRules() {
    return (
      <Text className="shrink ml-[10px]">
        <Text className="text-sm font-inter text-textColor">
          I have read & agreed to DayTask{' '}
        </Text>
        <Text className="text-sm font-inter text-accent">
          Privacy Policy, Terms & Condition
        </Text>
      </Text>
    )
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
      validationSchema={SignUpSchema}>
      {({handleChange, handleSubmit, handleBlur, values, errors, touched}) => (
        <View>
          <InputField
            wrapperStyles="mb-[10px]"
            placeholder="Type your full name"
            label="Full Name"
            icon={icons.User}
            inputIconStyle="text-white"
            handleChange={handleChange('fullName')}
            handleBlur={handleBlur('fullName')}
            value={values.fullName}
            error={errors.fullName}
            touched={touched}
            name="fullName"
          />
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
          <CheckBoxField
            containerStyles="mt-3"
            textOrElement={<CheckboxRules />}
          />
          <CustomButton
            handlePress={handleSubmit}
            title="Sign Up"
            containerStyles="mt-[38px]"
          />
        </View>
      )}
    </Formik>
  )
}

export default SignUpForm