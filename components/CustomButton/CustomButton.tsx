import React from 'react'
import {Text, TouchableOpacity, type TouchableOpacityProps} from 'react-native'
import type {SvgProps} from 'react-native-svg'

interface CustomButtonProps extends TouchableOpacityProps {
  text?: string
  isOutlined?: boolean
  containerStyles?: string
  icon?: React.FC<SvgProps>
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  isOutlined = false,
  containerStyles,
  icon: Icon,
  ...props
}) => {
  const variants = React.useMemo(
    () => ({
      default: 'bg-accent',
      outlined: 'border border-white bg-none',
    }),
    [],
  )

  return (
    <TouchableOpacity
      className={`w-full flex flex-row p-[14px] h-[67px] items-center justify-center ${containerStyles ? containerStyles : ''} ${isOutlined ? variants.outlined : variants.default}`}
      activeOpacity={0.7}
      {...props}>
      {Icon && (
        <Icon
          width={24}
          height={24}
          className={`${isOutlined ? 'text-white' : 'text-dark'}`}
        />
      )}
      {text && (
        <Text
          className={`font-isemi text-lg ${isOutlined ? 'text-textSecondary' : 'text-dark'} ${Icon ? 'ml-[10px]' : ''}`}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export default CustomButton
