import { useSearch } from '@/components/SearchProvider';
import { IconSymbol } from '@/components/ui/IconSymbol';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import 'react-native-reanimated';

type InnerLayoutProps = {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  inputValue: string;
  setInputValue: (val: string) => void;
};

export function InnerLayout({
  theme,
  toggleTheme,
  inputValue,
  setInputValue,
}: InnerLayoutProps) {
  const { setQuery } = useSearch();
  const router = useRouter();

  return (
    <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <View style={styles.nav}>
        <TextInput
          style={styles.input}
          placeholder="Search videos"
          autoCorrect={false}
          autoCapitalize="none"
          clearButtonMode="while-editing"
          value={inputValue}
          onChangeText={setInputValue}
          onSubmitEditing={() => {
            setQuery(inputValue);
            router.push('/search');
          }}
        />
        <TouchableOpacity onPress={toggleTheme}>
          <IconSymbol
            size={28}
            name={theme === 'dark' ? 'sun.max.fill' : 'moon.fill'}
            color="black"
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
