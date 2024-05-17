import React from 'react'

import InputField from '../InputField/InputField'
import type {InputProps} from '../InputField/InputField'

import {icons} from '../../../assets/icons'

interface PasswordFieldProps extends Omit<InputProps, 'iconRight'> {}

const PasswordField: React.FC<PasswordFieldProps> = ({...props}) => {
  const [isPasswordShown, setIsPasswordShown] = React.useState(false)

  return (
    <InputField
      secureTextEntry={!isPasswordShown}
      iconRight={!isPasswordShown ? icons.EyeClosed : icons.Eye}
      onRightIconPress={() => setIsPasswordShown(!isPasswordShown)}
      {...props}
    />
  )
}

export default PasswordField
