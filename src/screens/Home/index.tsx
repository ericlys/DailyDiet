import { Header } from '@components/Header'
import { StatisticsButton } from '@components/StatisticsButton'

import { Container } from './styles'

export default function Home() {
  return (
    <Container>
      <Header/>
      <StatisticsButton/>
    </Container>
  )
}
