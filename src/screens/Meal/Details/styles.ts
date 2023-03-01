import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  
  margin-top: -28px;
  border-radius: 20px;
  padding:40px 24px;
  gap: 24px;

  background-color: ${({theme}) => theme.COLORS.WHITE};
`

type Props = {
  size?: 'XL' | 'SM'
}

export const Title = styled.Text<Props>`
  ${({theme, size}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${ size === 'SM' ? theme.FONT_SIZE.SM : theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_900};
  `}
`

export const Description = styled.Text`
  margin-top: 8px;
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const ContentWrapper = styled.View``

export const ButtonWrapper = styled.View`
  margin-top: auto;
  gap: 8px;
`