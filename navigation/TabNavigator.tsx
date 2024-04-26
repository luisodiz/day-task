import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeTabScreen from '../screens/HomeTabScreen'
import ChatTabScreen from '../screens/ChatTabScreen'
import CalendarTabScreen from '../screens/CalendarTabScreen'
import NotificationTabScreen from '../screens/NotificationTabScreen'
import AddTaskTabScreen from '../screens/AddTaskTabScreen'
import {icons} from '../assets/icons'

const fonts = require('../assets/fonts')

const Tab = createBottomTabNavigator()

enum Routes {
  Home = 'Home',
  Chat = 'Chat',
  Calendar = 'Calendar',
  Notifications = 'Notifications',
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: '#fed36a',
        tabBarStyle: {
          backgroundColor: '#263238',
          flexBasis: 87,
        },
        tabBarLabelStyle: {
          fontFamily: fonts.inter,
          fontSize: 10,
          position: 'absolute',
          bottom: 18,
        },
        tabBarIcon: ({color}) => {
          switch (route.name as Routes) {
            case Routes.Home:
              return (
                <icons.Home color={color} className="relative -top-[8px]" />
              )
            case Routes.Chat:
              return (
                <icons.Chat color={color} className="relative -top-[8px]" />
              )
            case Routes.Calendar:
              return (
                <icons.Calendar color={color} className="relative -top-[8px]" />
              )
            case Routes.Notifications:
              return (
                <icons.Notifications
                  color={color}
                  className="relative -top-[8px]"
                />
              )
            default:
              throw new Error('Incorrect route data. Add a route')
          }
        },
      })}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeTabScreen} />
      <Tab.Screen name="Chat" component={ChatTabScreen} />
      <Tab.Screen
        name="AddTask"
        component={AddTaskTabScreen}
        options={({navigation}) => ({
          tabBarButton: () => {
            return (
              <TouchableOpacity
                className="flex-1 flex items-center justify-center"
                onPress={() => navigation.navigate('AddTask')}>
                <View className="flex items-center justify-center bg-accent w-full h-full max-w-[54px] max-h-[54px]">
                  <icons.AddSquare width={24} height={24} color={'#263238'} />
                </View>
              </TouchableOpacity>
            )
          },
        })}
      />
      <Tab.Screen name="Calendar" component={CalendarTabScreen} />
      <Tab.Screen name="Notifications" component={NotificationTabScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator
