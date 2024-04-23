import React from 'react'
import {View, ImageBackground, Text, ScrollView} from 'react-native'

import Logo from './Logo'
import {images} from '../assets/images'
import CustomButton from './CustomButton'

function Splash() {
  return (
    <ScrollView className="min-h-[100vh] bg-primary p-[26px]">
      <View className="flex">
        <Logo cls="mb-[38px]" />
        <View className="w-full h-[330px] bg-white flex items-center mb-[52px]">
          <ImageBackground
            source={images.personBg}
            resizeMode="contain"
            className="w-full h-full"
          />
        </View>
        <Text className="font-psemi text-textSecondary text-[48px] leading-[51px]">
          Manage your Task with <Text className="text-accent">DayTask</Text>
        </Text>
        <CustomButton title="Let’s Start" isOutline />
      </View>
    </ScrollView>
  )
}

export default Splash
