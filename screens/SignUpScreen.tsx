import React from 'react'
import {ScrollView, View, Text} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {MainStackParams} from '../navigation/MainStackNavigator'

import Logo from '../components/Logo'
import ContinueWithButton from '../components/ContinueWithButton'
import SignUpForm from '../components/SignUpForm'

interface SignUpScreenProps
  extends NativeStackScreenProps<MainStackParams, 'SignUp'> {}

function SignUpScreen({navigation}: SignUpScreenProps) {
  return (
    <ScrollView
      className="bg-primary flex"
      contentContainerStyle={{
        flexGrow: 1,
        padding: 26,
      }}>
      <View>
        <Logo
          iconWidth={92}
          iconHeight={71}
          containerStyles="mb-[50px]"
          textStyles="text-2xl"
        />
        <Text className="text-2xl mb-[23px] text-textSecondary font-isemi">
          Create your account
        </Text>
        <SignUpForm />
      </View>
      <ContinueWithButton
        message="Already have an account?"
        buttonText="Log in"
        handlePress={() => {
          navigation.navigate('SignIn')
        }}
      />
    </ScrollView>
  )
}

export default SignUpScreen
