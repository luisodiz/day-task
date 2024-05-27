import React from 'react'
import {Text, View} from 'react-native'

interface ContinueLineProps {
  containerStyles?: string
}

const ContinueLine: React.FC<ContinueLineProps> = ({containerStyles}) => {
  return (
    <View
      className={`flex w-full flex-row items-center ${containerStyles ? containerStyles : ''}`}>
      <View className="h-[1px] flex-1 bg-textColor" />
      <Text className="font-imedium text-textColor px-[13px] bg-primary">
        Или продолжить с
      </Text>
      <View className="h-[1px] flex-1 bg-textColor" />
    </View>
  )
}

export default ContinueLine
