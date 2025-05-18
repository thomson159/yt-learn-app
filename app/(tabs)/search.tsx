import { ThemedText } from '@/components/basic/ThemedText';
import { Item } from '@/components/search/Item';
import { useSearch } from '@/components/SearchProvider';
import { useSearchVideos } from '@/hooks/useSearchVideos ';
import { ScrollView } from 'react-native';
import styledNative from 'styled-components/native';

export default function SearchScreen() {
  const items = useSearchVideos();
  const { query } = useSearch();

  return (
    <ViewWrapper>
      <ThemedText type="date" style={{ paddingLeft: 24 }}>
        {items.length} result found for: &quot;{query}&quot;
      </ThemedText>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ScrollView>
    </ViewWrapper>
  );
}

const ViewWrapper = styledNative.View`
  padding-top: 114px;
  padding-bottom: 94px;
  background-color: #fff;
  min-height: 100%;
`;
