import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { MealListItem } from '@components/MealListItem'
import { StatisticsButton } from '@components/StatisticsButton'
import { MealsContext } from '@contexts/MealContext'
import { useNavigation } from '@react-navigation/native'
import {  useContext } from 'react'
import { SectionList } from 'react-native'

import { Container, Content, ListHeader, Title } from './styles'

export default function Home() {
  const navigation = useNavigation()

  const { dietPercentage, mealGroupList} = useContext(MealsContext)

  function handleStatistics() {
    navigation.navigate('statistics')
  }
 
  function handleNewMeal() {
    navigation.navigate('register')
  }

  function handleMealDetails() {
    navigation.navigate('details')
  }

  const buttonType = parseFloat(dietPercentage.replace('.', '.')) < 0.5 ? 'SECONDARY' : 'PRIMARY'
  
  return (
    <Container>
      <Header/>
      <StatisticsButton 
        title={`${dietPercentage.toString() + '%'}`}
        subtitle='das refeições dentro da dieta'
        onPress={handleStatistics}
        type={buttonType}
      />

      <Content>
        <Title>
          Refeições
        </Title>

        <Button 
          title='Nova refeição' 
          icon='Plus'
          style={{marginTop: 8}}
          onPress={handleNewMeal}
        />

      </Content>

      <SectionList
        sections={mealGroupList}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({item}) => (
          <MealListItem 
            time={item.time} 
            title={item.name} 
            status={item.inDiet ? 'POSITIVE' : 'NEGATIVE'}
            onPress={handleMealDetails}
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
