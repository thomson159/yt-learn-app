import { useSearch } from '@/components/SearchProvider';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { InnerLayoutProps } from '@/constants/Types';
import { useRouter } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import styledNative from 'styled-components/native';

export function Navbar({
  theme,
  toggleTheme,
  inputValue,
  setInputValue,
  setTheme,
}: InnerLayoutProps) {
  const { setQuery } = useSearch();
  const router = useRouter();

  return (
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
      <TouchableOpacity onPress={toggleTheme}>
        <IconSymbol
          size={28}
          name={theme === 'dark' ? 'sun.max.fill' : 'moon.fill'}
          color="black"
        />
      </TouchableOpacity>
    </NavWrapper>
  );
}

const NavWrapper = styledNative.View`
  flex-direction: row;
  align-items: center;
  padding-top: 60px;
  padding-left: 24px;
  padding-right: 24px;
  background-color: '#FFFFFF')};
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
