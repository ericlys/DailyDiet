import { Highlight } from '@components/Highlight'
import { TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native'
import { Container, Icon, StatisticsButtonTypeStyleProps } from './styles'

type Props = TouchableOpacityProps &{
  type?: StatisticsButtonTypeStyleProps;
  title: string
  subtitle: string
}

export function StatisticsButton({ type = 'PRIMARY', title, subtitle, ...rest }: Props) {
  
  const theme = useTheme()

  return(
    <Container type={type} {...rest}>
      <Highlight title={title} description={subtitle}/>
  
      <Icon color={type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700} />
    </Container>
  )
}