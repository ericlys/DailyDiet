import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '@storage/storageConfig'
import { mealgetAll } from './mealGetAll'

export async function mealDelete(mealId: string) {
  try {
    const storage = await mealgetAll()
    const updatedListWithouMeal = storage.filter(item => item.id !== mealId)


    const newStorage = JSON.stringify(updatedListWithouMeal)

    await AsyncStorage.setItem(MEAL_COLLECTION, newStorage)

  }catch (error) {
    throw error
  }
}