import React from 'react'
import {View, Text, ScrollView, Button} from 'react-native'
import auth from '@react-native-firebase/auth'

import {useUser} from '../hooks/useUser'

import type {TabStack} from '../types'

const HomeTabScreen = ({}: TabStack.HomeScreenProps) => {
  const [user] = useUser()

  return (
    <ScrollView
      className="bg-primary flex"
      contentContainerStyle={{
        flexGrow: 1,
        padding: 26,
      }}>
      <View className="flex flex-1">
        <Text className="text-white font-inter">
          Добро пожаловать {user?.email}
        </Text>
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
  )
}

export default HomeTabScreen
