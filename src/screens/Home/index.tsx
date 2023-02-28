import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { MealListItem } from '@components/MealListItem'
import { StatisticsButton } from '@components/StatisticsButton'
import { SectionList } from 'react-native'

import { Container, Content, ListHeader, Title } from './styles'

export default function Home() {
  const DATA = [
    {
      date: '12.02.23',
      data: ['X-tudo', 'Sanduíche', 'X-tudo','X-tudo', 'Sanduíche', 'Sanduíche', 'Lasanha de frango com queijo', 'Torta de chocolate'],
    },
    {
      date: '11.02.23',
      data: ['X-tudo', 'Whey protein com leite', 'Salada cesar com frango grelhado', 'Vitamina de banana com abacate'],
    },
  ]


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

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <MealListItem 
            time='20:23' 
            title={item} 
            status={'POSITIVE'}
          />
        )}
        renderSectionHeader={({section: {date}}) => (
          <ListHeader>{date}</ListHeader>
        )}
        style={{marginTop: 32}}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
