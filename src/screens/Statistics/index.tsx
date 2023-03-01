import { Card } from '@components/Card'
import { Highlight } from '@components/Highlight'

import { useTheme } from 'styled-components/native'
import { BackButton, CardWrapper, Container, Content, DetailsElement, DetailsWrapper, HeaderStatistics, Icon, Title } from './styles'

export function Statistics() {
  const theme = useTheme()

  const type='POSITIVE'

  return (
    <Container>
      <HeaderStatistics type={type}>
        <Highlight title='90,86%' description='das refeições dentro da dieta'/>
        <BackButton>
          <Icon 
            color={type === 'POSITIVE' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700}
          />
        </BackButton>
      </HeaderStatistics>

      <Content>
        <Title>Estatísticas gerais</Title>

        <CardWrapper>
          <Card
            title='22'
            description='melhor sequência de pratos dentro da dieta'
          />
          <Card
            title='109'
            description='refeições registradas'
          />
          <DetailsWrapper>
            <DetailsElement>
              <Card
                type='SECONDARY'
                title='99'
                description='refeições dentro da dieta'
              />
            </DetailsElement>
            <DetailsElement>
              <Card
                type='TERTIARY'
                title='10'
                description='refeições fora da dieta'
              />
            </DetailsElement>
          </DetailsWrapper>
        </CardWrapper>
      </Content>
    </Container>
  )
}