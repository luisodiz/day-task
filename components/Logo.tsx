import React from 'react'
import {View, Text} from 'react-native'

import IconLogo from '../assets/images/logo.svg'

interface LogoProps {
  iconWidth?: number
  iconHeight?: number
  cls?: string
}

function Logo({iconWidth, iconHeight, cls = ''}: LogoProps) {
  return (
    <View className="flex items-start">
      <View className={`flex items-center ${cls}`}>
        <IconLogo width={iconWidth || 62} height={iconHeight || 48} />
        <Text className="font-psemi text-textSecondary text-base mt-[-10]">
          Day<Text className="text-accent">Task</Text>
        </Text>
      </View>
    </View>
  )
}

export default Logo
