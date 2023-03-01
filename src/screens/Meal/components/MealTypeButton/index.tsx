import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, MealTypeByttonSizeProps, MealTypeByttonStyleProps, Title } from './styled'

type Props = TouchableOpacityProps & {
  title: string
  type?: MealTypeByttonStyleProps
  isActive?: boolean
  size?: MealTypeByttonSizeProps
}

export function MealTypeButton({isActive=false, type='yes', size='XS', title, ...rest}: Props){
  return(
    <Container
      size={size}
      type={type}
      isActive={isActive}
      {...rest}
    >
      <Icon type={type}/>
      <Title size={size}>{title}</Title>
    </Container>
  )
}