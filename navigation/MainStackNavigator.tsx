import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {SafeAreaView} from 'react-native-safe-area-context'

import SplashScreen from '../screens/SplashScreen'
import SignInScreen from '../screens/SignInScreen'

export type MainStackParams = {
  Splash: undefined
  SignIn: undefined
}

const MainStack = createNativeStackNavigator<MainStackParams>()

function MainStackNavigator() {
  return (
    <SafeAreaView className="h-full">
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Splash" component={SplashScreen} />
        <MainStack.Screen name="SignIn" component={SignInScreen} />
      </MainStack.Navigator>
    </SafeAreaView>
  )
}

export default MainStackNavigator
