import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 14px 12px;
  margin-bottom: 8px;

  border: 1px solid ${({theme}) => theme.COLORS.GRAY_300};
  border-radius: 6px;
`

export const MealTime = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_900};
  `}
`

export const MealTitle = styled.Text.attrs({
  numberOfLines: 1
})`
  flex: 1;

  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`

export const Divider = styled.View`
  height: 80%;
  width: 1px;
  margin: 0 12px;
  background-color: ${({theme}) => theme.COLORS.GRAY_400};
`

export type MealListItemStatus = 'POSITIVE' | 'NEGATIVE'

type MealStatusProps = {
  type: MealListItemStatus
}

export const MealStatus = styled.View<MealStatusProps>`
  width: 14px;
  height: 14px;
  border-radius: 999px;
  margin: 0 16px;

  background: ${({theme, type}) => type === 'POSITIVE' ? theme.COLORS.GREEN_400 : theme.COLORS.RED_400};
`