import React from 'react'
import {type GestureResponderEvent, ScrollView, Text, View} from 'react-native'
import {Formik} from 'formik'
import * as Yup from 'yup'
import type {MainStackParams} from '../navigation/MainStackNavigator'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'

import Logo from '../components/Logo/Logo'
import InputField from '../components/Form/InputField/InputField'
import CustomButton from '../components/CustomButton/CustomButton'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('No email provided'),
})

interface InitialValues {
  email: string
}

interface ForgotPasswordScreenProps
  extends NativeStackScreenProps<MainStackParams, 'ForgotPassword'> {}

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = () => {
  return (
    <ScrollView
      className="bg-primary"
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
          Enter your email
        </Text>
      </View>
      <Formik
        validateOnChange={true}
        initialValues={{email: ''} as InitialValues}
        onSubmit={(values, formikHelpers) => {
          console.log(values)
        }}
        validationSchema={validationSchema}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
          handleSubmit,
        }) => (
          <>
            <View className="mb-[12px]">
              <InputField
                value={values.email}
                onChangeText={handleChange('email')}
                error={errors.email}
                touched={touched.email}
                onBlur={handleBlur('email')}
                editable={!isSubmitting}
              />
            </View>
            <View className="d-flex items-end">
              <CustomButton
                containerStyles="p-[10px] min-h-[40px] w-2/5"
                text="Next"
                onPress={handleSubmit as (e?: any) => void}
              />
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
  )
}

export default ForgotPasswordScreen
