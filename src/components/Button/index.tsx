import { TouchableOpacityProps } from 'react-native'
import { ButtonTypeStyleProps, Container, Title } from './styles'
import * as PhosphorIcon from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

type Props = TouchableOpacityProps & {
  title: string,
  type?: ButtonTypeStyleProps,
  icon?: keyof typeof PhosphorIcon,
}

export function Button({title, type = 'PRIMARY', icon, ...rest} : Props) {
  const theme = useTheme()
  
  const Icon = icon !== undefined ? PhosphorIcon[icon] : null

  return (
    <Container type={type} {...rest}>
      {icon && Icon && (
        <Icon
          weight="bold"
          color={type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_900}
          size={18}
          style={{marginRight: 12}}
        />
      )}
      <Title type={type}>{title}</Title>
    </Container>
  )
}