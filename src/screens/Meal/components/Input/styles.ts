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

export type InputStyleProps = 'active' | 'disabled'

type Props = {
  type: InputStyleProps
}

export const InputField = styled.TextInput<Props>`
  width: 100%;
  min-height: 48px;

  ${({theme, type}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_900};
    border: 1px solid ${ type === 'active' ? theme.COLORS.GRAY_500 : theme.COLORS.GRAY_300};
  `}
  border-radius: 6px;
  padding: 10px 14px;
`

