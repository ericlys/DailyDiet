import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`

export const Label = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`

export type InputStyleProps = 'active' | 'disabled' | 'error'

type Props = {
  type: InputStyleProps
}

export const InputField = styled.TextInput<Props>`
  width: 100%;
  min-height: 48px;

  padding: 10px 14px;

  border-width: 1px;
  border-style: solid;
  border-radius: 6px;

  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_900};
  `}

  ${({theme, type}) => {
    switch(type) {
    case 'active': 
      return css`
        border-color: ${theme.COLORS.GRAY_500}
      `
    case 'error': 
      return css`
        border-color: ${theme.COLORS.RED_400}
      `
    default: 
      return css`
        border-color: ${theme.COLORS.GRAY_300}
      `
    }
  }}
`

