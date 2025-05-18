import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
// import { Navbar } from './Navbar';
import { StackScreen } from './StackScreen';

export function InnerLayout() {
  // const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [theme] = useState<'dark' | 'light'>('light');
  // const [inputValue, setInputValue] = useState('');

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) return null;

  // const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
      {/* <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        inputValue={inputValue}
        setInputValue={setInputValue}
      /> */}
      <StackScreen />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
