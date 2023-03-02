import { Button } from '@components/Button'
import { useState } from 'react'
import { Modal } from 'react-native'
import { Header } from '../components/Header'
import { MealTypeButton } from '../components/MealTypeButton'
import { ButtonWrapper, Container, Content, ContentWrapper, Description, ModalContainer, ModalContent, ModalGridElement, ModalGridWrapper, ModalTitle, Title } from './styles'

export function Details() {
  const [modalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  return(
    <Container>
      <Header 
        title='Refeição'
        color='green'
      />

      <Content>
        <ContentWrapper>
          <Title>Sanduíche</Title>
          <Description>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </Description>
        </ContentWrapper>

        <ContentWrapper>
          <Title size='SM'>Data e hora</Title>
          <Description>
            12/08/2022 às 16:00
          </Description>
        </ContentWrapper>

        <ContentWrapper
          style={{ width: 144 }}
        >
          <MealTypeButton 
            style={{padding: 0}}
            size='SM'
            title='dentro da dieta'
          />
        </ContentWrapper>
        
        <ButtonWrapper>
          <Button
            icon='PencilSimpleLine'
            title='Editar refeição'
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
                />
              </ModalGridElement>
            </ModalGridWrapper>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Container>
  )
}