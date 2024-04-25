import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native'

import {icons} from '../assets/icons'
import CustomButton from './CustomButton'

interface ContinueWithButtonActionProps {
  message: string
  buttonText: string
  handlePress?: () => void
}

function ContinueWithButtonAction({
  message,
  buttonText,
  handlePress,
}: ContinueWithButtonActionProps) {
  return (
    <>
      <View className="flex flex-row justify-center mt-[25px]">
        <Text className="font-imedium text-base text-textColor">{message}</Text>
        <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
          <Text className="font-isemi text-base text-accent ml-1">
            {buttonText}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

interface ContinueWithButtonProps extends ContinueWithButtonActionProps {}

function ContinueWithButton({
  message,
  buttonText,
  handlePress,
}: ContinueWithButtonProps) {
  return (
    <View>
      <View className="flex w-full flex-row items-center my-[32px]">
        <View className="h-[1px] flex-1 bg-textColor" />
        <Text className="font-imedium text-textColor px-[13px] bg-primary">
          Or continue with
        </Text>
        <View className="h-[1px] flex-1 bg-textColor" />
      </View>
      <CustomButton isOutline>
        <icons.Google className="text-white" />
        <Text className="ml-[12px] text-white font-imedium text-[18px] leading-[24px]">
          Google
        </Text>
      </CustomButton>
      <ContinueWithButtonAction
        message={message}
        buttonText={buttonText}
        handlePress={handlePress}
      />
    </View>
  )
}

export default ContinueWithButton
