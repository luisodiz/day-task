import React from 'react'
import {View, ImageBackground, Text, ScrollView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import Logo from '../components/Logo/Logo'
import CustomButton from '../components/CustomButton/CustomButton'

import type {MainStack} from '../types'

import {images} from '../assets/images'

const SplashScreen = ({navigation}: MainStack.SplashScreenProps) => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView
        className="bg-primary flex"
        contentContainerStyle={{
          flexGrow: 1,
          padding: 26,
        }}>
        <View className="flex h-full">
          <View className="flex items-start mb-[38px]">
            <Logo />
          </View>
          <View className="w-full h-[330px] bg-white flex items-center mb-[52px]">
            <ImageBackground
              source={images.personBg}
              resizeMode="contain"
              className="w-full h-full"
            />
          </View>
          <Text className="font-psemi text-textSecondary text-[38px] leading-[42px] mb-5">
            Управляйте своими задачами с{' '}
            <Text className="text-accent">DayTask</Text>
          </Text>
          <CustomButton
            text="Начать"
            containerStyles="mt-5"
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SplashScreen
