import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 32px;
`

export type RegisterFeedbackStyleProps = 'positive' | 'negative'

type Props = {
  type: RegisterFeedbackStyleProps
}

export const Title = styled.Text<Props>`
  ${({theme, type}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${type === 'positive' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700}
  `}
`

export const Description = styled.Text`
  text-align: center;
  margin: 8px 0 40px;

  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_900}
  `}
`

export const TextHighlight = styled.Text`
 ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_900}
  `}
`