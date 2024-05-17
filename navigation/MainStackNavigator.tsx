import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {SafeAreaView} from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'

import SplashScreen from '../screens/SplashScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import TabNavigator from './TabNavigator'

export type MainStackParams = {
  Splash: undefined
  SignIn: undefined
  SignUp: undefined
  Index: undefined
}

const MainStack = createNativeStackNavigator<MainStackParams>()

function MainStackNavigator() {
  return (
    <SafeAreaView className="h-full">
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Splash" component={SplashScreen} />
        <MainStack.Screen name="SignIn" component={SignInScreen} />
        <MainStack.Screen name="SignUp" component={SignUpScreen} />
        <MainStack.Screen name="Index" component={TabNavigator} />
      </MainStack.Navigator>
      <Toast />
    </SafeAreaView>
  )
}

export default MainStackNavigator
