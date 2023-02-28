import { Container, Logo, Profile } from './styles'
import logo from '@assets/logo.png'

export function Header() {
  return (
    <Container>
      <Logo source={logo} />
      <Profile source={{uri: 'https://github.com/ericlys.png'}} />
    </Container>
  )
}