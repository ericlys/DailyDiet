import { Container, Description, HighlightStyleProps, Percentage } from './styles'

type Props = {
  title: string
  description: string
  type?: HighlightStyleProps
}

export function Highlight({title, description, type = '2XL'}: Props) {
  return(
    <Container>
      <Percentage type={type}>{title}</Percentage>
      <Description>{description}</Description>
    </Container>
  )
}