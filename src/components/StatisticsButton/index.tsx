import { Highlight } from '@components/Highlight'
import { TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Container, Icon, StatisticsButtonTypeStyleProps } from './styles'

type Props = TouchableOpacityProps &{
  type?: StatisticsButtonTypeStyleProps;
}

export function StatisticsButton({ type = 'PRIMARY', ...rest }: Props) {
  
  const theme = useTheme()

  return(
    <Container type={type} {...rest}>
      <Highlight/>
  
      <Icon color={type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700} />
    </Container>
  )
}