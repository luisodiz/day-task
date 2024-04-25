import React from 'react'
import {ScrollView, View, Text} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {MainStackParams} from '../navigation/MainStackNavigator'

import Logo from '../components/Logo'
import CustomButton from '../components/CustomButton'
import ContinueWithButton from '../components/ContinueWithButton'
import {icons} from '../assets/icons'
import InputField from '../components/InputField'
import CheckBoxField from '../components/CheckBoxField'

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

interface SignUpScreenProps
  extends NativeStackScreenProps<MainStackParams, 'SignUp'> {}

function SignUpScreen({navigation}: SignUpScreenProps) {
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
          textStyles="text-2xl leading-[33px]"
        />
        <View>
          <Text className="text-2xl mb-[23px] text-textSecondary font-isemi">
            Create your account
          </Text>
          <InputField
            containerStyles="mb-[27px]"
            placeholder="Type your full name"
            labelText="Full Name"
            icon={
              <icons.User
                width={24}
                height={24}
                className="text-white shrink-0"
              />
            }
          />
          <InputField
            containerStyles="mb-[27px]"
            placeholder="Type your email"
            labelText="Email Address"
            icon={
              <icons.UserTag
                width={24}
                height={24}
                className="text-white shrink-0"
              />
            }
          />
          <InputField
            containerStyles="mb-[17px]"
            placeholder="Type your password"
            labelText="Password"
            isPassword
            icon={
              <icons.Lock
                width={24}
                height={24}
                className="text-white shrink-0"
              />
            }
          />
          <CheckBoxField textOrElement={<CheckboxRules />} />
          <CustomButton title="Sign Up" containerStyles="mt-[38px]" />
        </View>
      </View>
      <ContinueWithButton
        message="Already have an account?"
        buttonText="Log in"
        handlePress={() => {
          navigation.navigate('SignIn')
        }}
      />
    </ScrollView>
  )
}

export default SignUpScreen
