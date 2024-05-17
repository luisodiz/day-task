import React from 'react'
import {View, ImageBackground, Text, ScrollView} from 'react-native'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import type {MainStackParams} from '../navigation/MainStackNavigator'

import Logo from '../components/Logo/Logo'
import {images} from '../assets/images'
import CustomButton from '../components/CustomButton/CustomButton'

interface SplashScreenProps
  extends NativeStackScreenProps<MainStackParams, 'Splash'> {}

function SplashScreen({navigation}: SplashScreenProps) {
  return (
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
        <Text className="font-psemi text-textSecondary text-[48px] leading-[51px] mb-5">
          Manage your Task with <Text className="text-accent">DayTask</Text>
        </Text>
        <CustomButton
          text="Let’s Start"
          containerStyles="mt-5"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </ScrollView>
  )
}

export default SplashScreen
