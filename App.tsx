import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { ActivityIndicator, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from '@theme/index'
import { Routes } from '@routes/index'
import { MealProvider } from './src/contexts/MealContext'

export default function App() {
  const [ fontsLoaded ] = useFonts({
    NunitoSans_400Regular, NunitoSans_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="dark-content"
        backgroundColor="transparent" 
        translucent
      />      
      <MealProvider>
        { fontsLoaded ? <Routes/> : <ActivityIndicator /> }
      </MealProvider>
    </ThemeProvider>
  )
}
