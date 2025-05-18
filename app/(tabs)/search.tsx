import { Item } from '@/components/search/Item';
import { useSearchVideos } from '@/hooks/useSearchVideos ';
import { ScrollView } from 'react-native';
import { ViewWrapper } from '.';

export default function SearchScreen() {
  const items = useSearchVideos();

  return (
    <ViewWrapper>
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
