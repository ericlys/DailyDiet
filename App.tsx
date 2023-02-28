import Home from '@screens/Home'
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { ActivityIndicator, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from '@theme/index'

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
      { fontsLoaded ? <Home/> : <ActivityIndicator /> }
    </ThemeProvider>
  )
}
