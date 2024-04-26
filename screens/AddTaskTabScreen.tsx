import React from 'react'
import {View, Text, ScrollView} from 'react-native'

function AddTaskTabScreen() {
  return (
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
  )
}

export default AddTaskTabScreen
