import HappyPersonSVG from '@assets/happy_person.svg'
import { Button } from '@components/Button'
import SadPersonSVG from '@assets/sad_person.svg'
import { Container, Description, TextHighlight, Title, RegisterFeedbackStyleProps } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'

type RouteParams = {
  params: {
    type: RegisterFeedbackStyleProps
  }
}

export function RegisterFeedback() {
  const navigation = useNavigation()
  const { params } = useRoute() as RouteParams
  const {type} = params

  function handleGoToHome() {
    navigation.navigate('home')
  }

  return(
    <Container>
      {type === 'positive' ? (
        <>     
          <Title type={type}>Continue assim!</Title>
          <Description>
            Você continua <TextHighlight>dentro da dieta.</TextHighlight> Muito bem!
          </Description>
    
          <HappyPersonSVG 
            width={224}
            height={288}
          />
        </>
      ):
        (
          <>
            <Title type={type}>Que pena!</Title>
            <Description>
              Você <TextHighlight>saiu da dieta</TextHighlight> dessa vez, mas continue se 
              esforçando e não desista!
            </Description>

            <SadPersonSVG 
              width={224}
              height={288}
            />

          </>
        )

      }

      <Button 
        style={{ width: 191, marginTop: 32 }}
        title='Ir para a página inicial'
        onPress={handleGoToHome}
      />
    </Container>
  )
}