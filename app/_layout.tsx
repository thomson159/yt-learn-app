import { IconSymbol } from '@/components/ui/IconSymbol';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import 'react-native-reanimated';

export default function RootLayout() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={styles.nav}>
        <TextInput
          style={styles.input}
          placeholder="Search videos"
          autoCorrect={false}
          autoCapitalize="none"
          clearButtonMode="while-editing"
        />
        <TouchableOpacity onPress={toggleTheme}>
          <IconSymbol
            size={28}
            name={theme === 'dark' ? 'sun.max.fill' : 'moon.fill'}
            color={theme === 'dark' ? 'black' : 'black'}
          />
        </TouchableOpacity>
      </View>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 16,
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  input: {
    flex: 1,
    height: 44,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#2B2D42',
    marginRight: 16,
    paddingLeft: 16,
  },
});
