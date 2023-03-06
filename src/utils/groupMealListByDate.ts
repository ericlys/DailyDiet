import { MealStorage } from '@storage/meal/MealStorage'

export const groupMealListByDate = (meals: MealStorage[] ) => {

  const mealsGroupedByDate =  meals.reduce((acc, item) => {    
    const date = new Date(item.date).toLocaleDateString()
    
    if (!acc[date]) {
      acc[date] = []
    }
    acc[date].push(item)
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