import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native' 

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  border-radius: 6px;
  padding: 16px 0;

  ${({theme, type}) => css `
    background-color: ${ type === 'PRIMARY' ? theme.COLORS.GRAY_700 : 'transparent' };
    color: ${ type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_900 };
    border: 1px solid ${ type !== 'PRIMARY' && theme.COLORS.GRAY_900}
  `}
`

export const Title = styled.Text<Props>`
  ${({theme, type}) => css `
    font-family: ${ theme.FONT_FAMILY.BOLD };
    font-size: ${ theme.FONT_SIZE.SM}px;
    color: ${ type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_900 };
  `}
`