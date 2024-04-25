import React from 'react'
import {ScrollView, Text, View, TouchableOpacity} from 'react-native'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import type {MainStackParams} from '../navigation/MainStackNavigator'

import Logo from '../components/Logo'
import InputField from '../components/InputField'
import CustomButton from '../components/CustomButton'
import ContinueWithButton from '../components/ContinueWithButton'
import {icons} from '../assets/icons'

interface SignInScreenProps
  extends NativeStackScreenProps<MainStackParams, 'SignIn'> {}

function SignInScreen({navigation}: SignInScreenProps) {
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
        <View>
          <Text className="text-2xl mb-[23px] text-textSecondary font-isemi">
            Welcome Back!
          </Text>
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
            containerStyles="mb-[11px]"
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
          <View className="flex">
            <TouchableOpacity activeOpacity={0.7} className="self-end">
              <Text className="text-white">Forgot Password</Text>
            </TouchableOpacity>
          </View>
          <CustomButton title="Log in" containerStyles="mt-[38px]" />
        </View>
        <ContinueWithButton
          message="Don't have an account?"
          buttonText="Sign Up"
          handlePress={() => {
            navigation.navigate('SignUp')
          }}
        />
      </View>
    </ScrollView>
  )
}

export default SignInScreen
