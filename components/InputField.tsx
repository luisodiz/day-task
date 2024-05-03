import React, {useState} from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  type TextInputProps,
  type NativeSyntheticEvent,
  type TextInputFocusEventData,
} from 'react-native'
import {SvgProps} from 'react-native-svg'
import {icons} from '../assets/icons'
import type {FormikTouched} from 'formik'

export interface InputFieldProps extends TextInputProps {
  name: string
  containerStyles?: string
  wrapperStyles?: string
  icon?: React.FC<SvgProps>
  isPassword?: boolean
  errorStyles?: string
  inputIconStyle?: string
  label?: string
  labelStyles?: string
  handleChange?: (text: string) => void
  handleBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void
  value?: string
  error?: string
  touched?: FormikTouched<any>
}

// Wrapper оборачивает весь инпут вместе с лейблом, а контейнер это инпут
function InputField({
  name,
  wrapperStyles,
  containerStyles = '',
  placeholder,
  secureTextEntry,
  label,
  labelStyles,
  errorStyles,
  icon: Icon,
  inputIconStyle,
  handleChange,
  handleBlur,
  value = '',
  error,
  touched,
  ...props
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false)

  const variants = {
    default:
      'w-full h-full bg-accentPrimary py-[14px] px-[12px] text-lg leading-[19px] text-white font-inter',
    withIcon:
      'w-full h-full bg-accentPrimary py-[14px] text-lg leading-[19px] text-white font-inter px-[68px]',
  }

  return (
    <View className={`${wrapperStyles || ''}`}>
      {label && label !== '' ? (
        <Text
          className={`font-inter text-textColor mb-[16px] text-lg ${labelStyles || ''}`}>
          {label}
        </Text>
      ) : null}

      <View className={`relative h-[58px] ${containerStyles}`}>
        {Icon && (
          <View className="absolute top-0 left-0 h-full flex flex-row align-center items-center pl-[18px] pr-[10px] z-10">
            <Icon
              width={24}
              height={24}
              className={`${inputIconStyle || 'text-textColor'}`}
            />
          </View>
        )}

        <TextInput
          placeholder={placeholder || ''}
          placeholderTextColor="#617D8A"
          className={`${touched && touched[name] && error ? 'border-2 border-error' : ''} ${Icon ? variants.withIcon : variants.default}`}
          secureTextEntry={secureTextEntry && !showPassword}
          onChangeText={handleChange}
          onBlur={handleBlur}
          value={value}
          {...props}
        />

        {secureTextEntry && (
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

      {touched && touched[name] && error ? (
        <Text
          className={`text-error text-sm font-imedium mt-[3px] ${errorStyles || ''}`}>
          {error}
        </Text>
      ) : null}
    </View>
  )
}

export default InputField
