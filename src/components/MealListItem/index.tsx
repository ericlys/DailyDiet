import { TouchableOpacityProps } from 'react-native'
import { Container, Divider, MealStatus, MealTime, MealTitle, MealListItemStatus } from './styles'

type Props = TouchableOpacityProps & {
  time: string
  title: string
  status: MealListItemStatus
}

export function MealListItem({time, title, status, ...rest}: Props) {
  return (
    <Container {...rest}>
      <MealTime>{time}</MealTime>
      <Divider/>
      <MealTitle>{title}</MealTitle>
      <MealStatus type={status}/>
    </Container>
  )
}