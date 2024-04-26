import React from 'react'
import {View, Text, ScrollView} from 'react-native'

function CalendarTabScreen() {
  return (
    <ScrollView
      className="bg-primary flex"
      contentContainerStyle={{
        flexGrow: 1,
        padding: 26,
      }}>
      <View className="flex flex-1 items-center justify-center">
        <Text className="text-white font-inter">CalendarTabScreen</Text>
      </View>
    </ScrollView>
  )
}

export default CalendarTabScreen
