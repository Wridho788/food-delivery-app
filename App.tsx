import React from 'react';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Route from './src/Routes';

export default function App() {
  const [loaded] = useFonts({
    Regular: require('./assets/fonts/Roboto-Regular.ttf'),
    Bold: require('./assets/fonts/Roboto-Bold.ttf'),
    Thin: require('./assets/fonts/Roboto-Thin.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <Route />
    </SafeAreaProvider>
  );
}

