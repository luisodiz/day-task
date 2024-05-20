import React from 'react'
import {
  View,
  TouchableOpacity,
  TextInput,
  type TextInputProps,
  Text,
} from 'react-native'
import type {SvgProps} from 'react-native-svg'

import ErrorMessage from '../../ErrorMessage/ErrorMessage'

export interface InputProps extends TextInputProps {
  label?: string
  containerStyles?: string
  iconLeft?: React.FC<SvgProps>
  iconRight?: React.FC<SvgProps>
  onLeftIconPress?: () => void
  onRightIconPress?: () => void
  error?: string
  touched?: boolean
}

const InputField: React.FC<InputProps> = ({
  label,
  containerStyles,
  iconLeft: IconLeft,
  iconRight: IconRight,
  onLeftIconPress,
  onRightIconPress,
  error,
  touched,
  ...props
}) => {
  const handleLeftIconPress = React.useCallback(() => {
    if (onLeftIconPress) {
      onLeftIconPress()
    }
  }, [onLeftIconPress])

  const handleRightIconPress = React.useCallback(() => {
    if (onRightIconPress) {
      onRightIconPress()
    }
  }, [onRightIconPress])

  return (
    <View>
      {label && label !== '' ? (
        <Text className="font-inter text-textColor mb-[7px] text-lg">
          {label}
        </Text>
      ) : null}

      <View className="w-full h-[54px] relative">
        {IconLeft && (
          <TouchableOpacity
            activeOpacity={onLeftIconPress ? 0.7 : 1}
            className="absolute top-0 left-0 w-[52px] h-full flex justify-center items-center z-10"
            onPress={handleLeftIconPress}>
            <IconLeft
              width={24}
              height={24}
              className={`text-white shrink-0 ${!props.editable ? 'text-disabled' : ''}`}
            />
          </TouchableOpacity>
        )}
        <TextInput
          placeholderTextColor="#617D8A"
          className={`w-full h-full bg-accentPrimary border-none py-[14px] px-[24px] text-lg leading-[19px] text-white font-inter ${IconLeft ? 'pl-[52px]' : ''} ${IconRight ? 'pr-[52px]' : ''} ${containerStyles ? containerStyles : ''} ${error && touched ? 'border-2 border-error' : ''} ${!props.editable ? 'bg-disabledBg text-disabled' : ''}`}
          {...props}
        />
        {IconRight && (
          <TouchableOpacity
            activeOpacity={onRightIconPress ? 0.7 : 1}
            className="absolute top-0 right-0 w-[52px] h-full flex justify-center items-center z-10"
            onPress={handleRightIconPress}>
            <IconRight
              width={24}
              height={24}
              className={`text-white shrink-0 ${!props.editable ? 'text-disabled' : ''}`}
            />
          </TouchableOpacity>
        )}
      </View>

      {error && touched && (
        <ErrorMessage message={error} containerStyles="mt-[2px]" />
      )}
    </View>
  )
}

export default InputField
