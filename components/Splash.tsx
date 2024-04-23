import React from 'react'
import {View, ImageBackground, Text, ScrollView} from 'react-native'

import Logo from './Logo'
import {images} from '../assets/images'
import CustomButton from './CustomButton'

function Splash() {
  return (
    <ScrollView
      className="bg-primary flex"
      contentContainerStyle={{
        flexGrow: 1,
        padding: 26,
      }}>
      <View className="flex h-full">
        <Logo cls="mb-[38px]" />
        <View className="w-full h-[330px] bg-white flex items-center mb-[52px]">
          <ImageBackground
            source={images.personBg}
            resizeMode="contain"
            className="w-full h-full"
          />
        </View>
        <Text className="font-psemi text-textSecondary text-[48px] leading-[51px] mb-5">
          Manage your Task with <Text className="text-accent">DayTask</Text>
        </Text>
        <CustomButton title="Let’s Start" isOutline cls="mt-5" />
      </View>
    </ScrollView>
  )
}

export default Splash
