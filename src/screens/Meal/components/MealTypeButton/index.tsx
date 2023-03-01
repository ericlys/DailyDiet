import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, MealTypeByttonStyleProps, Title } from './styled'

type Props = TouchableOpacityProps & {
  title: string
  type?: MealTypeByttonStyleProps
  isActive?: boolean
}

export function MealTypeButton({isActive=false, type='yes', title, ...rest}: Props){
  return(
    <Container
      type={type}
      isActive={isActive}
      {...rest}
    >
      <Icon type={type}/>
      <Title>{title}</Title>
    </Container>
  )
}