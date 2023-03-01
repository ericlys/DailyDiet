import { View } from 'react-native'
import { BackButton, Container, HeaderColorProps, Icon, Title } from './styles'

type Props = {
  title: string
  color?: HeaderColorProps
}

export function Header({title, color='gray'}: Props){
  return (
    <Container color={color}>
      <BackButton>
        <Icon />
      </BackButton>
      <Title>{title}</Title>
      <View/>
    </Container>
  )
}