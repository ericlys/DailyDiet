
import { useNavigation, useRoute } from '@react-navigation/native'
import { dateFormatter, timeFormatter } from '@utils/formmaters'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import DateTimePicker from '@react-native-community/datetimepicker'

import { Button } from '@components/Button'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { MealTypeButton } from '../components/MealTypeButton'


import { ButtonWrapper, Container, Content, ContentWrapper, Form, GridElement, GridWrapper, Title } from './styles'
import { Alert, Platform, TouchableOpacity } from 'react-native'
import { useContext, useEffect, useState } from 'react'
import { MealsContext } from '@contexts/MealContext'

type RouteParams = {
  params: {
    meal?: string;
  }
}

const schema = z.object({
  name: z.string().min(3),
  description: z.string(),
  date: z.date(),
  time: z.date(),
  inDiet: z.boolean(),
})

type FormData = z.infer<typeof schema>

export function Register() {
  const { registerMeal, getMealDetails, updateMeal } = useContext(MealsContext)
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [showTimePicker, setShowTimePicker] = useState(false)

  const navigation = useNavigation()
  const { params } = useRoute() as RouteParams
  const meal = params?.meal ?? 'new'

  const { control, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  function handleGoBack() {
    navigation.navigate('home')
  }

  const handleShowDataPicker = () => {
    setShowDatePicker(true)
  }

  const handleShowTimePicker = () => {
    setShowTimePicker(true)
  }

  const handleHideDatePicker = () => {
    setShowDatePicker(false)
  }

  const handleHideTimePicker = () => {
    setShowTimePicker(false)
  }

  async function handleForm (data: FormData) {
    try {
      if( meal  === 'new') {
        registerMeal(data)
        navigation.navigate('feedback', {type: data.inDiet ? 'positive' : 'negative'})
      } else {
        updateMeal({id: meal, ...data})
        navigation.navigate('home')
      }
    }catch( error) {
      Alert.alert('Nova refeição', 'Não foi possivel criar uma nova refeição.')
      console.log(error)
    }
  }

  useEffect(() => {
    if(meal !== 'new') {
      const mealDetails = getMealDetails(meal)

      if(mealDetails){
        setValue('name', mealDetails?.name)
        setValue('description', mealDetails?.description)
        setValue('date', new Date(mealDetails?.date))
        setValue('time',  new Date(mealDetails?.time))
        setValue('inDiet', mealDetails?.inDiet)
      }
    }
  },[])

  return(
    <Container >
      <Header 
        title={ meal === 'new' ? 'Nova refeição' : 'Editar refeição'}
        onBack={handleGoBack}
      />
      <Content showsVerticalScrollIndicator={false}>
        <Form>
          <Controller
            control={control}
            name="name"
            render={({field : {onChange, value}}) => (
              <Input 
                label='Nome'
                isError={!!errors.name?.message}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <Controller
            control={control}
            name="description"
            render={({field : {onChange, value}}) => (
              <Input 
                numberOfLines={5}
                multiline
                label='Descrição'
                style={{height: 120, textAlignVertical:'top'}}
                isError={!!errors.description?.message}
                onChangeText={onChange}
                value={value}
              />
            )}
          />

          <GridWrapper>
            <GridElement>
              <Controller
                control={control}
                name="date"
                render={({field : {onChange, value}}) => (
                  <TouchableOpacity onPress={handleShowDataPicker}>
                    <Input 
                      label='Data'
                      isError={!!errors.date?.message}
                      value={dateFormatter(value)}
                      editable={false}
                    />

                    {showDatePicker &&
                      <DateTimePicker
                        mode='date'
                        value={value ?? new Date()}
                        display={Platform.OS === 'android' ? 'spinner' : 'default'}
                        onTouchCancel={handleHideDatePicker}
                        onChange={(_, selectedDate) => {
                          // setShowDatePicker(Platform.OS === 'ios')
                          handleHideDatePicker()
                          onChange(selectedDate)
                        }}
                      />
                    }
                  </TouchableOpacity>
                )}
              />
            </GridElement>

            <GridElement>
              <Controller
                control={control}
                name="time"
                render={({field : {onChange, value}}) => (
                  <TouchableOpacity onPress={handleShowTimePicker}>
                    <Input 
                      label='Hora'
                      isError={!!errors.time?.message}
                      value={timeFormatter(value)}
                      editable={false}
                    />

                    {showTimePicker &&
                      <DateTimePicker
                        mode='time'
                        value={value ?? new Date()}
                        display={Platform.OS === 'android' ? 'spinner' : 'default'}
                        is24Hour
                        onTouchCancel={handleHideTimePicker}
                        onChange={(_, selectedTime) => {
                          handleHideTimePicker()
                          onChange(selectedTime)
                        }}
                      />
                    }
                  </TouchableOpacity>
                )}
              />
            </GridElement>
          </GridWrapper>

          <ContentWrapper error={!!errors.inDiet?.message}>
            <Title>Está dentro da dieta?</Title>
            <GridWrapper>
              <GridElement>
                <Controller
                  control={control}
                  name="inDiet"
                  render={({ field: { onChange, value } }) => (
                    <MealTypeButton 
                      title='Sim' 
                      isActive={value === true}
                      type='yes'
                      onPress={() => onChange(true)}
                    />
                  )}
                />
              </GridElement>

              <GridElement>
                <Controller
                  control={control}
                  name="inDiet"
                  render={({ field: { onChange, value } }) => (
                    <MealTypeButton 
                      title='Não' 
                      isActive={value === false}
                      type='no'
                      onPress={() => onChange(false)}
                    />
                  )}
                />
              </GridElement>
            </GridWrapper>
          </ContentWrapper>

        </Form>
      </Content>
      <ButtonWrapper >
        <Button 
          title={ meal === 'new' ? 'Cadastrar refeição' : 'Salvar alterações'}
          onPress = {handleSubmit(handleForm)}
        />
      </ButtonWrapper>
    </Container>
  )
}