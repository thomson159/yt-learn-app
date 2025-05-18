import { HomeItemType } from '@/constants/Types';
import styledNative from 'styled-components/native';
import { ThemedText } from '../basic/ThemedText';

export function HomeItem({ item }: HomeItemType) {
  return (
    <Col>
      <Thumbnail source={{ uri: item.thumbnail }} />
      <ThemedText type="default" numberOfLines={2} ellipsizeMode="tail">
        {item.title}
      </ThemedText>
      <ThemedText type="date">
        {new Date(item.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </ThemedText>
    </Col>
  );
}

const Col = styledNative.View`
  max-width: 180px;
`;

const Thumbnail = styledNative(Image)`
  border-radius: 14px;
  margin-top: 16px;
  margin-bottom: 8px;
  width: 180px;
  height: 112px;
`;
