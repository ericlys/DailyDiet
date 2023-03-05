import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '@storage/storageConfig'
import { AppError } from '@utils/AppError'
import { mealgetAll } from './mealGetAll'
import { MealStorage } from './MealStorage'

export async function mealUpdate(meal: MealStorage) {
  try {
    const storage = await mealgetAll()

    const mealIndex = storage.findIndex(item => item.id === meal.id)

    if (mealIndex < 0) {
      throw new AppError('Nenhuma refeição foi encontrada')
    }
    
    storage[mealIndex] = meal

    const newStorage = JSON.stringify(storage)

    await AsyncStorage.setItem(MEAL_COLLECTION, newStorage)

  }catch (error) {
    throw error
  }
}