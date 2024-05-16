import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

import {icons} from '../assets/icons'

interface CheckBoxFieldProps extends React.PropsWithChildren {
  containerStyles?: string
  value?: boolean
  onChange?: (newValue: boolean) => void
  error?: string
}

const CheckBoxField: React.FC<CheckBoxFieldProps> = ({
  containerStyles,
  children,
  value = false,
  onChange,
  error,
}: CheckBoxFieldProps) => {
  const handleChange = () => {
    if (onChange) {
      onChange(!value)
    }
  }

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        className={`flex flex-row ${containerStyles ? containerStyles : ''}`}
        onPress={handleChange}>
        {value ? (
          <icons.CheckBoxActive
            width={24}
            height={24}
            className="text-accent"
          />
        ) : (
          <icons.CheckBoxInactive
            width={24}
            height={24}
            className={`${error ? 'text-error' : 'text-textColor'}`}
          />
        )}
        {children}
      </TouchableOpacity>
      {error && (
        <Text className="text-error text-sm font-imedium mt-[3px]">
          {error}
        </Text>
      )}
    </View>
  )
}

export default CheckBoxField
