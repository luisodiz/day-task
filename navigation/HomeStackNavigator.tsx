import React from 'react'
import {getHeaderTitle} from '@react-navigation/elements'
import {TouchableOpacity} from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import ScreenHeader from '../components/ScreenHeader/ScreenHeader'

import type {MainTab, HomeStack} from '../types'

import {icons} from '../assets/icons'

const Stack = createNativeStackNavigator<HomeStack.Params>()

const HomeStackNavigator = ({navigation}: MainTab.HomeStackProps) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({options, route}) => (
          <ScreenHeader
            {...options}
            title={getHeaderTitle(options, route.name)}
          />
        ),
        headerLeft: () => (
          <TouchableOpacity
            activeOpacity={0.4}
            className="flex w-[50px] h-[50px] ml-[10px] justify-center items-center"
            onPress={() => navigation.goBack()}>
            <icons.ArrowLeft className="text-white" />
          </TouchableOpacity>
        ),
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Профиль',
        }}
      />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator
