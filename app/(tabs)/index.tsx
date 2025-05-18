import { Row } from '@/components/home/Row';
import { Item } from '@/constants/Types';
import { useFetchVideos } from '@/hooks/useFetchVideos';
import { ScrollView } from 'react-native';
import styledNative from 'styled-components/native';

export default function HomeScreen() {
  const itemsByCategory = useFetchVideos();

  return (
    <ViewWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        {Object.entries(itemsByCategory).map(
          ([title, items]: [string, Item[]], index) => (
            <Row key={index} title={title} items={items} />
          ),
        )}
      </ScrollView>
    </ViewWrapper>
  );
}

export const ViewWrapper = styledNative.View`
  padding-top: 128px;
  padding-bottom: 80px;
  background-color: #fff;
  min-height: 100%;
`;
