import { Container, Logo, Profile, ProfileImage } from './styles'
import logo from '@assets/logo.png'

export function Header() {
  return (
    <Container>
      <Logo source={logo} />
      <Profile>
        <ProfileImage source={{uri: 'https://github.com/ericlys.png'}} />
      </Profile>
    </Container>
  )
}