import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '@storage/storageConfig'
import { MealStorage } from './MealStorage'

export async function mealgetAll(){
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

    const mealGroups:MealStorage[] = storage ? JSON.parse(storage) : []

    return mealGroups
  }catch (error) {
    throw error
  }

}