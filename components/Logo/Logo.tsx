import React from 'react'
import {View, Text} from 'react-native'

import IconLogo from '../../assets/images/logo.svg'

interface LogoProps {
  iconWidth?: number
  iconHeight?: number
  textStyles?: string
  containerStyles?: string
}

const Logo: React.FC<LogoProps> = ({
  iconWidth,
  iconHeight,
  containerStyles = '',
  textStyles = '',
}) => {
  return (
    <View className={`flex items-center ${containerStyles}`}>
      <IconLogo width={iconWidth || 62} height={iconHeight || 48} />
      <Text
        className={`font-psemi text-textSecondary text-base mt-[-10] ${textStyles}`}>
        Day<Text className="text-accent">Task</Text>
      </Text>
    </View>
  )
}

export default Logo
