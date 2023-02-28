import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  padding: 24px;
`

export const Content = styled.View`
  width: 100%;
  margin-top: 30px;
`

export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_900};
  `}
`

export const ListHeader = styled.Text`
  ${({theme}) => css` 
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_900}
  `}

  margin: 8px 0;
`