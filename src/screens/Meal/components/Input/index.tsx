import { useEffect, useState } from 'react'
import { TextInput } from 'react-native'
import { TextInputProps } from 'react-native'
import { Container, Label, InputField, InputStyleProps } from './styles'

type Props = TextInputProps & {
  label: string,
  inputRef?: React.RefObject<TextInput>
  isError?: boolean
}

export function Input({label, inputRef, isError=false, ...rest}: Props) {
  const [inputBorderColor, setInputBorderColor] = useState<InputStyleProps>('disabled')

  useEffect(() => {
    if(isError) {
      setInputBorderColor('error')
    }
  }, [isError])

  const customOnFocus = () => {
    rest?.onFocus
    setInputBorderColor('active')
  }

  const customOnBlur = () => {
    rest?.onBlur
    isError ? setInputBorderColor('error') : setInputBorderColor('disabled')
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