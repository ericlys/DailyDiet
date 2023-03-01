import HappyPersonSVG from '@assets/happy_person.svg'
import { Button } from '@components/Button'
import SadPersonSVG from '@assets/sad_person.svg'
import { Container, Description, TextHighlight, Title, RegisterFeedbackStyleProps } from './styles'
import { useState } from 'react'

export function RegisterFeedback() {
  const [type, setType] = useState<RegisterFeedbackStyleProps>('negative')

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
      />
    </Container>
  )
}