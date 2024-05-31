import React, {useState, useEffect} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import auth from '@react-native-firebase/auth'

import type {FirebaseAuthTypes} from '@react-native-firebase/auth'

import SplashScreen from '../screens/SplashScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import TabNavigator from './TabNavigator'

import type {MainStack as MainStackType} from '../types'

const MainStack = createNativeStackNavigator<MainStackType.Params>()

const MainStackNavigator = () => {
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null)

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    setUser(user)
    if (initializing) {
      setInitializing(false)
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber
  }, [])

  if (initializing) {
    return null
  }

  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      {!user ? (
        <>
          <MainStack.Screen name="Splash" component={SplashScreen} />
          <MainStack.Screen name="SignIn" component={SignInScreen} />
          <MainStack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
          <MainStack.Screen name="SignUp" component={SignUpScreen} />
        </>
      ) : (
        <MainStack.Screen name="Index" component={TabNavigator} />
      )}
    </MainStack.Navigator>
  )
}

export default MainStackNavigator
