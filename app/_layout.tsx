import { InnerLayout } from '@/components/InnerLayout';
import { SearchProvider } from '@/components/SearchProvider';
import { useFonts } from 'expo-font';
import { useState } from 'react';
import 'react-native-reanimated';

export default function RootLayout() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [inputValue, setInputValue] = useState('');

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) return null;

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <SearchProvider>
      <InnerLayout
        theme={theme}
        toggleTheme={toggleTheme}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </SearchProvider>
  );
}
