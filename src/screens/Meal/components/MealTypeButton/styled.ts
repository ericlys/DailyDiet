import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type MealTypeByttonStyleProps = 'yes' | 'no'

type Props = {
  type: MealTypeByttonStyleProps
  isActive: boolean
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  padding: 16px 0;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border-radius: 6px;
  background-color: ${({theme}) => theme.COLORS.GRAY_200};

  ${({theme, type, isActive}) => {
    if(isActive){
      switch (type) {
      case 'no':
        return css`
        background-color: ${theme.COLORS.RED_100};
        border: 1px solid ${theme.COLORS.RED_700};
      `
      default:
        return css`
        background-color: ${theme.COLORS.GREEN_100};
        border: 1px solid ${theme.COLORS.GREEN_700};
      `
      }
    }
  }}
`
export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_900};
  `}
`
type IconProps = {
  type: MealTypeByttonStyleProps
}

export const Icon = styled.View<IconProps>`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background-color: ${({theme, type}) => type === 'yes' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
`