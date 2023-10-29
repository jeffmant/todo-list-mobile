import { StatusBar } from 'react-native';
import { Home } from './src/screens/home';
import { useFonts, Inter_900Black, Inter_400Regular } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
    Inter_400Regular
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar 
        barStyle={'light-content'} 
        backgroundColor={'transparent'} 
        translucent
        />
      <Home />
    </>
  );
}