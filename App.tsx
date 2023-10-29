import { StatusBar } from 'react-native';
import { Home } from './src/screens/home';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar 
        barStyle={'dark-content'} 
        backgroundColor={'transparent'} 
        translucent
        />
      <Home />
    </>
  );
}