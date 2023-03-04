import { Highlight } from '@components/Highlight'
import { CardColorsStyleProps, Container } from './styles'

type Props = {
  type?: CardColorsStyleProps
  title: string | number
  description: string
}

export function Card({type='PRIMARY', title, description}: Props) {
  return(
    <Container color={type}>
      <Highlight 
        title={ title }
        description={ description }
      />
    </Container>
  )
}