import { Card } from '@components/Card'
import { Highlight } from '@components/Highlight'
import { MealsContext } from '@contexts/MealContext'
import { useNavigation } from '@react-navigation/native'
import { useContext } from 'react'

import { useTheme } from 'styled-components/native'
import { BackButton, CardWrapper, Container, Content, DetailsElement, DetailsWrapper, HeaderStatistics, Icon, Title } from './styles'

export function Statistics() {
  const navigation = useNavigation()
  const theme = useTheme()

  const { dietPercentage, meals } = useContext(MealsContext)

  function handleGoBack(){
    navigation.goBack()
  }

  let currentSequence = 0
  const diet = meals.reduce((accumulator, meal) => {
    if(meal.inDiet){
      accumulator.numDietMeals ++
      currentSequence ++
    } else {
      accumulator.numOffDietMeals ++

      if(accumulator.bestSequence < currentSequence) {
        accumulator.bestSequence = currentSequence
      }
      currentSequence = 0
    } 
 
    return accumulator
  }, {
    bestSequence: 0,
    numDietMeals: 0,
    numOffDietMeals: 0
  })


  const type= parseFloat(dietPercentage.replace('.', '.')) < 0.5 ? 'NEGATIVE' : 'POSITIVE'

  return (
    <Container type={type}>
      <HeaderStatistics>
        <Highlight 
          title={dietPercentage + '%'}
          description='das refeições dentro da dieta'
        />
        <BackButton onPress={handleGoBack}>
          <Icon 
            color={type === 'POSITIVE' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700}
          />
        </BackButton>
      </HeaderStatistics>

      <Content>
        <Title>Estatísticas gerais</Title>

        <CardWrapper>
          <Card
            title={diet.bestSequence}
            description='melhor sequência de pratos dentro da dieta'
          />
          <Card
            title={meals.length}
            description='refeições registradas'
          />
          <DetailsWrapper>
            <DetailsElement>
              <Card
                type='SECONDARY'
                title={diet.numDietMeals}
                description='refeições dentro da dieta'
              />
            </DetailsElement>
            <DetailsElement>
              <Card
                type='TERTIARY'
                title={diet.numOffDietMeals}
                description='refeições fora da dieta'
              />
            </DetailsElement>
          </DetailsWrapper>
        </CardWrapper>
      </Content>
    </Container>
  )
}