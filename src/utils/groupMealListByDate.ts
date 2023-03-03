import { MealStorage } from '@storage/meal/MealStorage'

export const groupMealListByDate = (meals: MealStorage[] ) => {

  const mealsGroupedByDate =  meals.reduce((acc, item) => {
    if (!acc[item.date]) {
      acc[item.date] = []
    }
    acc[item.date].push(item)
    return acc
  }, {} as Record<string, MealStorage[]>) //  { [key: string]: MealStorage[] }

  const result = Object.keys(mealsGroupedByDate)
    .map((date) => {
      return  {
        date,
        data: mealsGroupedByDate[date],
      }
    })

  return result
}