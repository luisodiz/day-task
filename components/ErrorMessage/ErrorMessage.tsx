import React from 'react'
import {Text} from 'react-native'

interface ErrorMessageProps {
  message: string
  containerStyles?: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  containerStyles,
  ...props
}) => {
  return (
    <Text
      className={`text-error text-sm font-imedium ${containerStyles ? containerStyles : ''}`}
      {...props}>
      {message}
    </Text>
  )
}

export default ErrorMessage
