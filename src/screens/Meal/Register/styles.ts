import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;

  background-color: ${({theme}) => theme.COLORS.GRAY_300};
`

export const Content = styled(ScrollView)`
  flex: 1;
  
  margin-top: -28px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
`

export const Form = styled.View`
  padding:40px 24px;
  gap: 14px;
`

export const GridWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 14px;
`

export const GridElement = styled.View`
  flex: 1;
`

export const Title = styled.Text`
  margin-bottom: 8px;
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700}
  `}
`

export const ContentWrapper = styled.View``

export const ButtonWrapper = styled.View`
  padding: 24px;
  margin-top: auto;
  background-color: ${({theme}) => theme.COLORS.WHITE};
`