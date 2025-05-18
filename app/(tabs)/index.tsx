import { HomeRow } from '@/components/home/HomeRow';
import { queries } from '@/constants/Consts';
import { Item } from '@/constants/Types';
import { useFetchHomeVideos } from '@/hooks/useFetchHomeVideos';
import { ScrollView } from 'react-native';
import styledNative from 'styled-components/native';

export default function HomeScreen() {
  const itemsByCategory = useFetchHomeVideos(queries);

  return (
    <ViewWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Object.entries(itemsByCategory).map(
          ([title, items]: [string, Item[]], index, arr) => (
            <HomeRow
              key={title}
              title={title}
              items={items}
              isLast={index === arr.length - 1}
            />
          ),
        )}
      </ScrollView>
    </ViewWrapper>
  );
}

const ViewWrapper = styledNative.View`
  padding-top: 128px;
  padding-bottom: 80px;
  background-color: #fff;
`;
