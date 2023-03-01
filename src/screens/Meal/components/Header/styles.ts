import { ArrowLeft } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export type HeaderColorProps = 'green' | 'gray' | 'red'

type Props = {
  color: HeaderColorProps
}

export const Container = styled.View<Props>`
  width: 100%;
  padding: 52px 48px 52px 24px;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  ${({color, theme}) => {
    switch (color) {
    case 'green':
      return css`
        background-color: ${theme.COLORS.GREEN_100};
      `
    case 'red':
      return css`
        background-color: ${theme.COLORS.RED_100};
      `
    default :
      return css`
        background-color: ${theme.COLORS.GRAY_300};
      `
    }  
  }
}
`

export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_900};
  `}
`

export const BackButton = styled.TouchableOpacity`
  border-radius: 999px;
`

export const Icon = styled(ArrowLeft).attrs({
  size: 24
})``