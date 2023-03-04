
import { useNavigation, useRoute } from '@react-navigation/native'
import { dateFormatter, hourFormatter } from '@utils/formmaters'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

import { Button } from '@components/Button'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { MealTypeButton } from '../components/MealTypeButton'

import { ButtonWrapper, Container, Content, ContentWrapper, Form, GridElement, GridWrapper, Title } from './styles'
import { Alert } from 'react-native'
import { useContext } from 'react'
import { MealsContext } from '@contexts/MealContext'

type RouteParams = {
  params: {
    meal?: string;
  }
}

const schema = z.object({
  name: z.string().min(3),
  description: z.string(),
  date: z.string().length(10, { message: 'data inválida'}).transform((date) => date.replaceAll('/','.')),
  time: z.string().length(5, { message: 'hora inválida'}),
  inDiet: z.boolean(),
})

type FormData = z.infer<typeof schema>

export function Register() {
  const { registerMeal } = useContext(MealsContext)

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      time: '',
      date: ''
    }
  })

  const navigation = useNavigation()
  const { params } = useRoute() as RouteParams

  const meal = params?.meal ?? 'new'

  function handleGoBack() {
    navigation.navigate('home')
  }

  async function handleForm (data: FormData) {
    try {
      registerMeal(data)
      navigation.navigate('home')

    }catch( error) {
      Alert.alert('Nova refeição', 'Não foi possivel criar uma nova refeição.')
      console.log(error)
    }
  }

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
                  <Input 
                    label='Data'
                    keyboardType='numeric'
                    maxLength={10}
                    isError={!!errors.date?.message}
                    onChangeText={onChange}
                    value={dateFormatter(value)}
                  />
                )}
              />
            </GridElement>

            <GridElement>
              <Controller
                control={control}
                name="time"
                render={({field : {onChange, value}}) => (
                  <Input 
                    label='Hora' 
                    keyboardType='numeric'
                    maxLength={5}
                    isError={!!errors.time?.message}
                    onChangeText={onChange}
                    value={hourFormatter(value)}
                  />
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