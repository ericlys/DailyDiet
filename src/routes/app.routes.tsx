import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '@screens/Home'
import { Details } from '@screens/Meal/Details'
import { Register } from '@screens/Meal/Register'
import { RegisterFeedback } from '@screens/Meal/RegisterFeedback'
import { Statistics } from '@screens/Statistics'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name='home' component={Home}/>
      <Screen name='statistics' component={Statistics}/>
      <Screen name='register' component={Register}/>
      <Screen name='feedback' component={RegisterFeedback}/>
      <Screen name='details' component={Details}/>
    </Navigator>
  )
}