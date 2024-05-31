import React from 'react'
import {View, ScrollView, Text} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import type {HomeStack} from '../types'

const ProfileScreen = ({}: HomeStack.ProfileScreenProps) => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView
        className="bg-primary flex"
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 26,
          paddingTop: 10,
          paddingBottom: 26,
        }}>
        <View>
          <Text className="text-white font-inter">ProfileScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen
