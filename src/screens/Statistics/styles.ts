
import { ArrowLeft } from 'phosphor-react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export type StatisticsStyleProps = 'POSITIVE' | 'NEGATIVE'

type Props = {
  type: StatisticsStyleProps
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({theme, type}) => type === 'POSITIVE' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
`

export const HeaderStatistics = styled.View`
  width: 100%;
  padding: 66px 0;

  position: relative;
`

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 28px;
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
  width: 100%;
  flex-direction: row;
  gap: 17px;
`

export const DetailsElement = styled.View`
  flex: 1;
`

