import { ArrowUpRight } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export type StatisticsButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: StatisticsButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  background-color: ${({theme, type}) => 
    type === 'PRIMARY' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100
};
  padding: 20px;
  margin: 26px 0;
  border-radius: 8px;

  position: relative;
`

export const Icon = styled(ArrowUpRight).attrs(() => ({
  size: 32,
}))`
  position: absolute;
  top: 8px;
  right: 8px;
`