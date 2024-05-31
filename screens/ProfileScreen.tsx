import React from 'react'
import {View, ScrollView, Text} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import {Formik, Form} from 'formik'

import InputField from '../components/Form/InputField/InputField'

import type {HomeStack} from '../types'

import {icons} from '../assets/icons'

const ProfileScreen = ({}: HomeStack.ProfileScreenProps) => {
  return (
    <SafeAreaView className="h-full">
      <ScrollView
        className="bg-primary flex"
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 26,
          paddingTop: 10,
          paddingBottom: 26,
        }}>
        <Formik
          initialValues={{name: '', email: '', password: ''}}
          onSubmit={values => {
            console.log(values)
          }}>
          {() => (
            <View>
              <View className="mb-[26px]">
                <InputField
                  placeholder="Ваше имя"
                  iconLeft={icons.UserAdd}
                  iconRight={icons.Edit}
                />
              </View>
              <View className="mb-[26px]">
                <InputField
                  placeholder="Ваш email"
                  iconLeft={icons.UserTag}
                  iconRight={icons.Edit}
                />
              </View>
              <View className="mb-[26px]">
                <InputField
                  placeholder="Ваш пароль"
                  iconLeft={icons.Lock}
                  iconRight={icons.Edit}
                />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileScreen
