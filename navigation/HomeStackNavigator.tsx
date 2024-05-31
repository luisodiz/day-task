import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'

import type {HomeStack} from '../types'

const Stack = createNativeStackNavigator<HomeStack.Params>()

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator
