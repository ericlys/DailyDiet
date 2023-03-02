
import { Button } from '@components/Button'
import { useNavigation, useRoute } from '@react-navigation/native'
import { dateFormatter, hourFormatter } from '@utils/formmaters'
import { useState } from 'react'
import { View } from 'react-native'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { MealTypeButton } from '../components/MealTypeButton'
import { Container, Content, GridElement, GridWrapper, Title } from './styles'

type RouteParams = {
  params: {
    meal?: string;
  }
}

export function Register() {
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')

  const navigation = useNavigation()
  const { params } = useRoute() as RouteParams

  const meal = params?.meal ?? 'new'
  

  const onFormmaterDate = (date: string) => {
    const dateFormated = dateFormatter(date)
    setDate(dateFormated)
  }

  const onChangeHour = (hour: string) => {
    const dateFormated = hourFormatter(hour)
    setHour(dateFormated)
  }

  function handleGoBack() {
    navigation.navigate('home')
  }

  return(
    <Container>
      <Header 
        title={ meal === 'new' ? 'Nova refeição' : 'Editar refeição'}
        onBack={handleGoBack}
      />
      <Content>
        <Input label='Nome'/>
        <Input 
          numberOfLines={5}
          multiline
          label='Descrição'
          style={{height: 120, textAlignVertical:'top'}}
        />

        <GridWrapper>
          <GridElement>
            <Input 
              label='Data'
              keyboardType='numeric'
              maxLength={10}
              onChangeText={onFormmaterDate}
              value={date}
            />
          </GridElement>
          <GridElement>
            <Input 
              label='Hora' 
              keyboardType='numeric'
              maxLength={5}
              onChangeText={onChangeHour}
              value={hour}
            />
          </GridElement>
        </GridWrapper>

        <View>
          <Title>Está dentro da dieta?</Title>
          <GridWrapper>
            <GridElement>
              <MealTypeButton 
                title='Sim' 
                isActive
                type='yes'
              />
            </GridElement>
            <GridElement>
              <MealTypeButton 
                title='Não' 
                type='no'
              />
            </GridElement>
          </GridWrapper>
        </View>

        <Button 
          style={{marginTop: 'auto'}} 
          title={ meal === 'new' ? 'Cadastrar refeição' : 'Salvar alterações'}
        />
      </Content>
    </Container>
  )
}