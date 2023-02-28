import { Container, Divider, MealStatus, MealTime, MealTitle, MealListItemStatus } from './styles'

type Props = {
  time: string
  title: string
  status: MealListItemStatus
}

export function MealListItem({time, title, status}: Props) {
  return (
    <Container>
      <MealTime>{time}</MealTime>
      <Divider/>
      <MealTitle>{title}</MealTitle>
      <MealStatus type={status}/>
    </Container>
  )
}