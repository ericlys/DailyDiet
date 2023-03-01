import styled, { css } from 'styled-components/native'

export type CardColorsStyleProps = 'PRIMARY' | 'SECONDARY' | 'TERTIARY'

type Props = {
  color: CardColorsStyleProps
}

export const Container = styled.View<Props>`
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  
  ${({ color, theme }) => {
    switch (color) {
    case 'SECONDARY':
      return css`
          background-color: ${theme.COLORS.GREEN_100};
        `
    case 'TERTIARY':
      return css`
          background-color: ${theme.COLORS.RED_100};
        `
    default:
      return css`
          background-color: ${theme.COLORS.GRAY_100};
        `
    }
  }}
`
