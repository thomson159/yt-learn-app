import { InnerLayout } from '@/components/InnerLayout';
import { SearchProvider } from '@/components/SearchProvider';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <SearchProvider>
      <InnerLayout />
    </SearchProvider>
  );
}
