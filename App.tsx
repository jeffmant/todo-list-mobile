import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Home } from './src/screens/home';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter': require('./assets/fonts/Inter.ttf'),
  });

  if (!fontsLoaded) {
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