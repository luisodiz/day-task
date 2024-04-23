import React from 'react'
import {PropsWithChildren} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

interface CustomButtonProps extends PropsWithChildren {
  title: string
  isOutline?: boolean
  cls?: string
  handlePress?: () => void
}

function CustomButton({
  title,
  isOutline = false,
  cls,
  children,
}: CustomButtonProps) {
  const outlinedButtonRendered = () => (
    <TouchableOpacity className="mt-auto" activeOpacity={0.7}>
      <View
        className={`w-full flex flex-row items-center justify-center border border-white text-textSecondary p-[15px] bg-none ${cls}`}>
        {children ? (
          children
        ) : (
          <Text className="text-textSecondary font-isemi text-[18px] leading-[38px]">
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  )

  const buttonRendered = () => (
    <TouchableOpacity className="mt-auto" activeOpacity={0.7}>
      <View
        className={`w-full flex flex-row items-center justify-center bg-accent p-[14px] ${cls}`}>
        {children ? (
          children
        ) : (
          <Text className="text-dark font-isemi text-[18px] leading-[38px]">
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  )

  if (isOutline) {
    return outlinedButtonRendered()
  } else {
    return buttonRendered()
  }
}

export default CustomButton
