import React from 'react'
import {View, ScrollView, Text} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import type {HomeStack} from '../types'

const ProfileScreen = ({}: HomeStack.ProfileScreenProps) => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="flex flex-1 items-center justify-center">
          <Text className="text-white font-inter">ProfileScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen
