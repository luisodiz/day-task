import React from 'react'
import {View, Text, ScrollView, Button, ImageBackground} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import auth from '@react-native-firebase/auth'

import {useUser} from '../hooks/useUser'

import type {TabStack} from '../types'

import {images} from '../assets/images'

const HomeTabScreen = ({}: TabStack.HomeScreenProps) => {
  const [user] = useUser()

  return (
    <SafeAreaView className="h-full">
      <ScrollView
        className="bg-primary flex"
        contentContainerStyle={{
          flexGrow: 1,
          padding: 26,
        }}>
        <View className="flex flex-1">
          <View className="flex flex-row justify-between">
            <View>
              <Text className="text-accent font-inter">Добро пожаловать!</Text>
              <Text className="text-xl font-psemi text-white -mt-1">
                Александр
              </Text>
            </View>
            <View>
              <ImageBackground
                source={images.profileBg}
                resizeMode="contain"
                className="w-[48px] h-[48px] border-r-[50%]"
              />
            </View>
          </View>
          <Button
            title="Выйти"
            onPress={async () => {
              if (auth().currentUser) {
                await auth().signOut()
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeTabScreen
