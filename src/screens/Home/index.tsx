import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { MealListItem } from '@components/MealListItem'
import { StatisticsButton } from '@components/StatisticsButton'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { mealgetAll } from '@storage/meal/mealGetAll'
import { MealStorage } from '@storage/meal/MealStorage'
import { groupMealListByDate } from '@utils/groupMealListByDate'
import { useCallback, useEffect, useState } from 'react'
import { SectionList } from 'react-native'

type mealGroupProps = {
  date: string;
  data: MealStorage[];
}

import { Container, Content, ListHeader, Title } from './styles'

export default function Home() {
  const navigation = useNavigation()

  const [mealGroupList, setMealGroupList] = useState<mealGroupProps[]>([])
  const [meals, setMeals] = useState<MealStorage[]>([])
  const [dietPercentage, setDietPercentage] = useState('0,00')

  function handleStatistics() {
    navigation.navigate('statistics')
  }
 
  function handleNewMeal() {
    navigation.navigate('register')
  }

  function handleMealDetails() {
    navigation.navigate('details')
  }

  async function getAllMeals() {
    const mealsStore = await mealgetAll()
    setMeals(mealsStore)
  }

  function calculeteDietPercentage() {
    const totalMealInDiet = meals.filter(meal => meal.inDiet).length
    const percentageInDiet = ((totalMealInDiet / meals.length) * 100).toFixed(2).replace('.',',')

    setDietPercentage(percentageInDiet)
  }

  useFocusEffect(useCallback(() => {
    getAllMeals()
  }, []))

  useEffect(() => {
    const mealsGroup = groupMealListByDate(meals)
    setMealGroupList(mealsGroup)
    calculeteDietPercentage()
  }, [meals])

  return (
    <Container>
      <Header/>
      <StatisticsButton 
        title={`${dietPercentage.toString() + '%'}`}
        subtitle='das refeições dentro da dieta'
        onPress={handleStatistics}
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
