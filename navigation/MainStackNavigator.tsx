import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {SafeAreaView} from 'react-native-safe-area-context'

import SplashScreen from '../screens/SplashScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import TabNavigator from './TabNavigator'

import type {MainStack as MainStackType} from '../types'

const MainStack = createNativeStackNavigator<MainStackType.Params>()

const MainStackNavigator = () => {
  return (
    <SafeAreaView className="h-full">
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Splash" component={SplashScreen} />
        <MainStack.Screen name="SignIn" component={SignInScreen} />
        <MainStack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
        />
        <MainStack.Screen name="SignUp" component={SignUpScreen} />
        <MainStack.Screen name="Index" component={TabNavigator} />
      </MainStack.Navigator>
    </SafeAreaView>
  )
}

export default MainStackNavigator
