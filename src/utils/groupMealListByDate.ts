import { MealStorage } from '@storage/meal/MealStorage'

function convertToDatetime(dataString: string) {
  const [day, month, year] = dataString.split('/')
  return new Date(`${year}-${month}-${day}`).getTime()
}

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
    }).sort((a, b) =>  convertToDatetime(b.date) - convertToDatetime(a.date))

  return result
}