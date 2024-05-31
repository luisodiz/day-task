import React from 'react'
import {TouchableOpacity, View} from 'react-native'
import {Header} from '@react-navigation/elements'
import {icons} from '../../assets/icons'

interface Props {
  title: string
}

const ScreenHeader = ({title, ...options}: Props) => {
  return (
    <View className="h-[90px] flex justify-center">
      <Header
        title={title}
        headerTitleAlign="center"
        headerTitleStyle={{
          fontFamily: 'Inter-Medium',
          color: '#ffffff',
          fontSize: 20,
        }}
        headerStyle={{
          backgroundColor: '#212832',
        }}
        headerShadowVisible={false}
        {...options}
      />
    </View>
  )
}

export default ScreenHeader
