import React, {useState} from 'react'
import {ScrollView, Text, View, TouchableOpacity} from 'react-native'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import type {MainStackParams} from '../navigation/MainStackNavigator'

import Logo from '../components/Logo'
import InputField from '../components/InputField'
import CustomButton from '../components/CustomButton'
import {icons} from '../assets/icons'

interface SignInScreenProps
  extends NativeStackScreenProps<MainStackParams, 'SignIn'> {}

function SignInScreen() {
  const [translatedWidth, setTranslatedWidth] = useState<number>(0)
  const [translatedHeight, setTranslatedHeight] = useState<number>(0)

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
          textStyles="text-[25px] leading-[33px]"
        />
        <View>
          <Text className="text-[26px] mb-[23px] text-textSecondary font-isemi">
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
              <icons.UserTag
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
          <View className="relative h-[1px] bg-textColor w-full my-[37px]">
            <Text
              className={
                'font-imedium absolute top-2/4 left-2/4 text-textColor px-[13px] bg-primary'
              }
              onLayout={e => {
                setTranslatedWidth(Math.round(+e.nativeEvent.layout.width / 2))
                setTranslatedHeight(
                  Math.round(+e.nativeEvent.layout.height / 2),
                )
              }}
              style={{
                transform: [
                  {
                    translateX: -translatedWidth,
                  },
                  {
                    translateY: -translatedHeight,
                  },
                ],
              }}>
              Or continue with
            </Text>
          </View>
          <CustomButton isOutline>
            <icons.Google className="text-white" />
            <Text className="ml-[12px] text-white font-imedium text-[18px] leading-[24px]">
              Google
            </Text>
          </CustomButton>
          <View className="flex flex-row justify-center mt-[25px]">
            <Text className="font-imedium text-[16px] leading-[18px] text-textColor">
              Don’t have an account?
            </Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text className="font-isemi text-[16px] leading-[18px] text-accent ml-1">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default SignInScreen
