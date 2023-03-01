
import { Button } from '@components/Button'
import { dateFormatter, hourFormatter } from '@utils/formmaters'
import { useState } from 'react'
import { View } from 'react-native'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { MealTypeButton } from '../components/MealTypeButton'
import { Container, Content, GridElement, GridWrapper, Title } from './styles'

export function Register() {

  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')

  const onFormmaterDate = (date: string) => {
    const dateFormated = dateFormatter(date)
    setDate(dateFormated)
  }

  const onChangeHour = (hour: string) => {
    const dateFormated = hourFormatter(hour)
    setHour(dateFormated)
  }

  return(
    <Container>
      <Header title='Nova refeição'/>
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
        <View></View>

        <Button 
          style={{marginTop: 'auto'}} 
          title='Cadastrar refeição'
        />
      </Content>
    </Container>
  )
}