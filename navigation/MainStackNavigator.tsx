import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {SafeAreaView} from 'react-native-safe-area-context'

import Splash from '../components/Splash'

const MainStack = createNativeStackNavigator()

function MainStackNavigator() {
  return (
    <SafeAreaView className="h-full">
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        <MainStack.Screen name="Splash" component={Splash} />
      </MainStack.Navigator>
    </SafeAreaView>
  )
}

export default MainStackNavigator
