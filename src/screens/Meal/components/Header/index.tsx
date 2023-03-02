import { View } from 'react-native'
import { BackButton, Container, HeaderColorProps, Icon, Title } from './styles'

type Props = {
  title: string
  color?: HeaderColorProps
  onBack?: () => void
}

export function Header({title, color='gray', onBack}: Props){
  return (
    <Container color={color}>
      {onBack && 
        <BackButton onPress={onBack}>
          <Icon />
        </BackButton>
      }
      <Title>{title}</Title>
      <View/>
    </Container>
  )
}