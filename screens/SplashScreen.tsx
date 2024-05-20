import React from 'react'
import {View, ImageBackground, Text, ScrollView} from 'react-native'
import auth from '@react-native-firebase/auth'
import {db} from '../firebase/db'
import type {NativeStackScreenProps} from '@react-navigation/native-stack'
import type {MainStackParams} from '../navigation/MainStackNavigator'

import Logo from '../components/Logo/Logo'
import {images} from '../assets/images'
import CustomButton from '../components/CustomButton/CustomButton'

interface SplashScreenProps
  extends NativeStackScreenProps<MainStackParams, 'Splash'> {}

function SplashScreen({navigation}: SplashScreenProps) {
  // React.useEffect(() => {
  //   db.ref('/users/1')
  //     .once('value')
  //     .then(snapshot => console.log(snapshot.val()))
  // }, [])

  // firebase
  //   .app()
  //   .database(
  //     'https://day-task-ce1ee-default-rtdb.europe-west1.firebasedatabase.app/',
  //   )
  //   .ref('/users')
  //   .once('value')
  //   .then(snapshot => {
  //     console.log(snapshot.val())
  //   })

  // const [initializing, setInitializing] = React.useState(true)
  // const [user, setUser] = React.useState(null)
  //
  // const onAuthStateChanged = user => {
  //   setUser(user)
  //   if (initializing) {
  //     setInitializing(false)
  //   }
  // }
  //
  // React.useEffect(() => {
  //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
  //   return subscriber
  // }, [])
  //
  // if (initializing) {
  //   return null
  // }
  //
  // if (!user) {
  //   navigation.navigate('SignIn')
  // }

  return (
    <ScrollView
      className="bg-primary flex"
      contentContainerStyle={{
        flexGrow: 1,
        padding: 26,
      }}>
      <View className="flex h-full">
        <View className="flex items-start mb-[38px]">
          <Logo />
        </View>
        <View className="w-full h-[330px] bg-white flex items-center mb-[52px]">
          <ImageBackground
            source={images.personBg}
            resizeMode="contain"
            className="w-full h-full"
          />
        </View>
        <Text className="font-psemi text-textSecondary text-[48px] leading-[51px] mb-5">
          Manage your Task with <Text className="text-accent">DayTask</Text>
        </Text>
        <CustomButton
          text="Let’s Start"
          containerStyles="mt-5"
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </ScrollView>
  )
}

export default SplashScreen
