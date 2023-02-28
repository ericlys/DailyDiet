import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;

  align-items: center;
  justify-content: center;
`

export const Percentage = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_900};
  `}
  line-height: 42px;
  text-align: center; 
`

export const Description = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `}

  text-align: center;
`