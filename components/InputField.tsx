import React, {useState} from 'react'
import {TextInput, View, TouchableOpacity, Text} from 'react-native'

import {icons} from '../assets/icons'

interface InputFieldProps {
  placeholder?: string
  containerStyles?: string
  labelText?: string
  isPassword?: boolean
  icon?: any
  type?: string
}

function InputField({
  placeholder,
  containerStyles,
  labelText = '',
  icon,
  isPassword = false,
}: InputFieldProps) {
  const [text, setText] = useState('')
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <View className={containerStyles}>
      {labelText !== '' ? (
        <Text className="font-inter text-textColor mb-[16px] text-lg leading-[18px]">
          {labelText}
        </Text>
      ) : null}
      <View className="relative">
        {icon && (
          <View className="absolute top-0 left-0 h-full flex items-center justify-center pl-[18px] pr-[10px] z-10">
            {icon}
          </View>
        )}
        <TextInput
          placeholder={placeholder || ''}
          placeholderTextColor="#617D8A"
          value={text}
          onChangeText={setText}
          secureTextEntry={isPassword && !showPassword}
          className={`w-full h-[58px] bg-accentPrimary py-[14px] text-lg leading-[19px] text-white font-inter ${icon ? 'px-[68px]' : 'px-[25px]'}`}
        />
        {isPassword && (
          <TouchableOpacity
            activeOpacity={0.7}
            className="absolute h-full right-0 flex items-center justify-center pl-[10px] pr-[18px] z-10"
            onPress={() => setShowPassword(!showPassword)}>
            {!showPassword ? (
              <icons.EyeClosed
                width={24}
                height={24}
                className="text-white shrink-0"
              />
            ) : (
              <icons.Eye
                width={24}
                height={24}
                className="text-white shrink-0"
              />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default InputField
