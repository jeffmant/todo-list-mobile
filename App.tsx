import { StatusBar, Text } from 'react-native';
import { useFonts } from 'expo-font';

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
      <Text 
        style={{ 
          fontFamily: 'Inter', 
          padding: 24, 
          marginTop: 24 
        }}> 
        Hello World 
      </Text>
    </>
  );
}