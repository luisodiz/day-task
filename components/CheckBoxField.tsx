import React from 'react'
import {Text, TouchableOpacity} from 'react-native'

import {icons} from '../assets/icons'

interface CheckBoxFieldProps {
  textOrElement?: TextOrElement
  textStyles?: string
  containerStyles?: string
}

type TextOrElement = Extract<
  React.ReactNode,
  Element | string | null | undefined
>

function CheckBoxField({
  textOrElement,
  textStyles,
  containerStyles,
}: CheckBoxFieldProps) {
  let content

  if (textOrElement == null) {
    content = ''
  }

  if (typeof textOrElement === 'string') {
    content = (
      <TouchableOpacity className="shrink">
        <Text
          className={`ml-[10px] text-sm font-inter ${textStyles ? textStyles : 'text-textColor'}`}>
          {textOrElement}
        </Text>
      </TouchableOpacity>
    )
  }

  if (typeof textOrElement === 'object') {
    content = textOrElement
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className={`flex flex-row w-full ${typeof textOrElement === 'string' ? 'items-center' : 'items-start'} ${containerStyles ? containerStyles : ''}`}>
      <icons.CheckBoxInactive width={24} height={24} className="text-accent" />
      {content}
    </TouchableOpacity>
  )
}

export default CheckBoxField
