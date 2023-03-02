import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '@storage/storageConfig'
import { mealgetAll } from './mealGetAll'
import { MealStorage } from './MealStorage'

export async function mealCreate(newMeal: MealStorage) {
  try {
    const storage = await mealgetAll()

    const newStorage = JSON.stringify([newMeal,...storage])

    await AsyncStorage.setItem(MEAL_COLLECTION, newStorage)
  }catch (error) {
    throw error
  }
}