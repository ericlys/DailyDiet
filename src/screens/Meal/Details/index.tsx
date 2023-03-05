import { Button } from '@components/Button'
import { MealsContext } from '@contexts/MealContext'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MealStorage } from '@storage/meal/MealStorage'
import { useContext, useEffect, useState } from 'react'
import { Modal } from 'react-native'
import { Header } from '../components/Header'
import { MealTypeButton } from '../components/MealTypeButton'
import { ButtonWrapper, Container, Content, ContentWrapper, Description, ModalContainer, ModalContent, ModalGridElement, ModalGridWrapper, ModalTitle, Title } from './styles'

type RouteParams = {
  mealId: string
}

export function Details() {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false)
  const [meal, setMeal] = useState<MealStorage>()

  const { getMealDetails, deleteMeal } = useContext(MealsContext)
  
  const route = useRoute()
 
  const { mealId } = route.params as RouteParams

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  function handleGoBack() {
    navigation.navigate('home')
  }

  function handleEditMeal() {
    navigation.navigate('register', { meal: mealId })
  }

  function handleDeleteMeal() {
    deleteMeal(mealId)
    handleGoBack()
  }

  useEffect(() => {
    const findMeal = getMealDetails(mealId)
    setMeal(findMeal)
  }, [])

  return(
    <Container>
      <Header 
        title='Refeição'
        color='green'
        onBack={handleGoBack}
      />

      <Content>
        <ContentWrapper>
          <Title>{meal?.name}</Title>
          <Description>
            {meal?.description}
          </Description>
        </ContentWrapper>

        <ContentWrapper>
          <Title size='SM'>Data e hora</Title>
          <Description>
            {meal?.date.replaceAll('.', '/')} às {meal?.time}
          </Description>
        </ContentWrapper>

        <ContentWrapper
          style={{ width: 144 }}
        >
          <MealTypeButton 
            style={{padding: 0}}
            size='SM'
            title={meal?.inDiet ? 'dentro da dieta' : 'fora da dieta'}
            type={meal?.inDiet ? 'yes' : 'no'}
          />
        </ContentWrapper>
        
        <ButtonWrapper>
          <Button
            icon='PencilSimpleLine'
            title='Editar refeição'
            onPress={handleEditMeal}
          />
          <Button
            type='SECONDARY'
            icon='Trash'
            title='Excluir refeição'
            onPress={toggleModal} 
          />
        </ButtonWrapper>
      </Content>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
        statusBarTranslucent={true}
      >
        <ModalContainer onPress={toggleModal}>
          <ModalContent>
            <ModalTitle>
              Deseja realmente excluir o registro da refeição?
            </ModalTitle>

            <ModalGridWrapper>
              <ModalGridElement>
                <Button 
                  type='SECONDARY'
                  title='Cancelar'
                  onPress={toggleModal} 
                />
              </ModalGridElement>

              <ModalGridElement>
                <Button 
                  title='Sim, excluir'
                  onPress={handleDeleteMeal}
                />
              </ModalGridElement>
            </ModalGridWrapper>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Container>
  )
}