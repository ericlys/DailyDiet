import { Button } from '@components/Button'
import { Header } from '../components/Header'
import { MealTypeButton } from '../components/MealTypeButton'
import { ButtonWrapper, Container, Content, ContentWrapper, Description, Title } from './styles'

export function Details() {
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
          />
        </ButtonWrapper>
      </Content>
    </Container>
  )
}