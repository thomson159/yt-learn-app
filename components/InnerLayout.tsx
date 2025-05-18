import { useSearch } from '@/components/SearchProvider';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { InnerLayoutProps } from '@/constants/Types';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import styledNative from 'styled-components/native';

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
      <NavWrapper>
        <StyledInput
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
        <ThemeButton onPress={toggleTheme}>
          <IconSymbol
            size={28}
            name={theme === 'dark' ? 'sun.max.fill' : 'moon.fill'}
            color="black"
          />
        </ThemeButton>
      </NavWrapper>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

const NavWrapper = styledNative.View`
  flex-direction: row;
  align-items: center;
  padding-top: 60px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: #ffffff;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const StyledInput = styledNative.TextInput`
  flex: 1;
  height: 44px;
  font-size: 16px;
  background-color: #ffffff;
  border-radius: 16px;
  border: 2px solid #2b2d42;
  margin-right: 16px;
  padding-left: 16px;
`;

export const ThemeButton = styledNative.TouchableOpacity``;
