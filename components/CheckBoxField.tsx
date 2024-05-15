import React from 'react'
import {TouchableOpacity} from 'react-native'

import {icons} from '../assets/icons'

interface CheckBoxFieldProps extends React.PropsWithChildren {
  containerStyles?: string
  value?: boolean
  onChange?: (newValue: boolean) => void
}

const CheckBoxField: React.FC<CheckBoxFieldProps> = ({
  containerStyles,
  children,
  value = false,
  onChange,
}: CheckBoxFieldProps) => {
  const handleChange = () => {
    if (onChange) {
      onChange(!value)
    }
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`flex flex-row ${containerStyles ? containerStyles : ''}`}
      onPress={handleChange}>
      {value ? (
        <icons.CheckBoxActive width={24} height={24} className="text-accent" />
      ) : (
        <icons.CheckBoxInactive
          width={24}
          height={24}
          className="text-textColor"
        />
      )}
      {children}
    </TouchableOpacity>
  )
}

export default CheckBoxField
