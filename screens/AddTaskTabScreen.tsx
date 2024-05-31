import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

import type {TabStack} from '../types'

const AddTaskTabScreen = ({}: TabStack.AddTaskScreen) => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView
        className="bg-primary flex"
        contentContainerStyle={{
          flexGrow: 1,
          padding: 26,
        }}>
        <View className="flex flex-1 items-center justify-center">
          <Text className="text-white font-inter">AddTaskTabScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddTaskTabScreen
