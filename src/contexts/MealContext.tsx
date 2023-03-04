import { mealCreate } from '@storage/meal/mealCreate'
import { mealgetAll } from '@storage/meal/mealGetAll'
import { MealStorage } from '@storage/meal/MealStorage'
import { groupMealListByDate } from '@utils/groupMealListByDate'
import { createContext, ReactNode, useEffect, useState } from 'react'
import uuid from 'react-native-uuid'


type mealGroupProps = {
  date: string;
  data: MealStorage[];
}

type Meal = {
  time: string;
  name: string;
  description: string;
  date: string;
  inDiet: boolean;
}

type MealsProviderProps = {
  children: ReactNode
}

type MealContextProps = {
  registerMeal: (meal: Meal) => void
  meals: MealStorage[]
  mealGroupList: mealGroupProps[]
  dietPercentage: string
}

export const MealsContext = createContext({} as MealContextProps)

export function MealProvider({children}: MealsProviderProps) {
  const [meals, setMeals] = useState<MealStorage[]>([])
  const [mealGroupList, setMealGroupList] = useState<mealGroupProps[]>([])
  const [dietPercentage, setDietPercentage] = useState('0,00')

  async function updateMealsList() {
    const mealsStore = await mealgetAll()
    setMeals(mealsStore)
  }

  function calculeteDietPercentage() {
    const totalMealInDiet = meals.filter(meal => meal.inDiet).length
    const percentageInDiet = ((totalMealInDiet / meals.length) * 100).toFixed(2).replace('.',',')

    setDietPercentage(percentageInDiet)
  }

  async function registerMeal(meal: Meal) {
    await mealCreate({
      id: uuid.v4().toString(),
      ...meal
    })

    updateMealsList()
    calculeteDietPercentage()
  }

  useEffect(() => {
    const mealsGroup = groupMealListByDate(meals)
    setMealGroupList(mealsGroup)
    calculeteDietPercentage()
  }, [meals])

  useEffect(() => {
    updateMealsList()
  }, [])


  return (
    <MealsContext.Provider value={{ registerMeal, meals, mealGroupList, dietPercentage }}>
      {children}
    </MealsContext.Provider>
  )
}