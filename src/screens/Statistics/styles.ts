
import { ArrowLeft } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1
`

export type StatisticsStyleProps = 'POSITIVE' | 'NEGATIVE'

type Props = {
  type: StatisticsStyleProps
}

export const HeaderStatistics = styled.View<Props>`
  width: 100%;
  padding: 66px 0;

  background-color: ${({theme, type}) => type === 'POSITIVE' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
  position: relative;
`

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 38px;
  left: 24px;
  border-radius: 999px;
`

export const Icon = styled(ArrowLeft).attrs({
  size: 24
})``

export const Content = styled.View`
  flex: 1;
  margin-top: -32px;
  border-radius: 20px;
  padding: 33px 24px;

  background-color: ${({theme}) => theme.COLORS.WHITE};
`

export const Title = styled.Text`
  text-align: center;

  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_900};
  `}
`

export const CardWrapper = styled.View`
  gap: 12px;
  margin-top: 23px;
`

export const DetailsWrapper = styled.View`
  width: 50%;
  flex-direction: row;
  gap: 12px;
`

