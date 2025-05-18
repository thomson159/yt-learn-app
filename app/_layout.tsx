import { SearchProvider } from '@/components/SearchProvider';
import { WelcomePopup } from '@/components/WelcomePopup';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Host } from 'react-native-portalize';
import 'react-native-reanimated';

export default function RootLayout() {
  const [theme] = useState<'dark' | 'light'>('light');
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <Host>
      <WelcomePopup />
      <SearchProvider>
        <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
            <Stack.Screen
              name="video"
              options={{
                title: '',
                headerBackTitle: 'Back',
                headerTintColor: '#2B2D42',
              }}
            />
          </Stack>
          <StatusBar style={theme === 'dark' ? 'light' : 'dark'} />
        </ThemeProvider>
      </SearchProvider>
    </Host>
  );
}
