import { useState } from 'react'
import { TextInput } from 'react-native'
import { TextInputProps } from 'react-native'
import { Container, Label, InputField, InputStyleProps } from './styles'

type Props = TextInputProps & {
  label: string,
  inputRef?: React.RefObject<TextInput>
}

export function Input({label, inputRef, ...rest}: Props) {
  const [inputBorderColor, setInputBorderColor] = useState<InputStyleProps>('disabled')

  const customOnFocus = () => {
    rest?.onFocus
    setInputBorderColor('active')
  }

  const customOnBlur = () => {
    rest?.onBlur
    setInputBorderColor('disabled')
  }

  return (
    <Container>
      <Label>{label}</Label>
      <InputField 
        type={inputBorderColor}
        ref={inputRef}
        onFocus={customOnFocus}
        onBlur={customOnBlur}
        {...rest}
      />
    </Container>
  )
}