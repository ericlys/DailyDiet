import { mealCreate } from '@storage/meal/mealCreate'
import { mealDelete } from '@storage/meal/mealDelete'
import { mealgetAll } from '@storage/meal/mealGetAll'
import { MealStorage } from '@storage/meal/MealStorage'
import { mealUpdate } from '@storage/meal/mealUpdate'
import { AppError } from '@utils/AppError'
import { groupMealListByDate } from '@utils/groupMealListByDate'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { Alert } from 'react-native'
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
  getMealDetails: (mealId: string) => MealStorage | undefined
  updateMeal: (meal: MealStorage) => void
  deleteMeal: (id: string) => void
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

  function getMealDetails(mealId: string) {
    const meal = meals.find(meal => meal.id === mealId)
    return meal
  }

  async function updateMeal(meal: MealStorage) {
    try {
      await mealUpdate(meal)
      updateMealsList()
    } catch(error) {
      if(error instanceof AppError){
        Alert.alert('Atualizar refeição', error.message)
      }else {
        console.log(error)
        Alert.alert('Atualizar refeição', 'Não foi possivel atualizar.')
      }
    }
  }

  async function deleteMeal(id: string) {
    try {
      await mealDelete(id)
      updateMealsList()
    } catch(error) {
      console.log(error)
      Alert.alert('Exclusão da refeição', 'Não foi possivel excluir.')
    }
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
    <MealsContext.Provider value={{ registerMeal, deleteMeal, getMealDetails, updateMeal, meals, mealGroupList, dietPercentage }}>
      {children}
    </MealsContext.Provider>
  )
}