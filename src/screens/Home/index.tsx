import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { StatisticsButton } from '@components/StatisticsButton'

import { Container, Content, Title } from './styles'

export default function Home() {
  return (
    <Container>
      <Header/>
      <StatisticsButton/>

      <Content>
        <Title>
          Refeições
        </Title>

        <Button 
          title='Nova refeição' 
          icon='Plus'
          style={{marginTop: 8}}
        />
      </Content>
    </Container>
  )
}
