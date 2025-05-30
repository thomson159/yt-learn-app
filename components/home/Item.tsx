import { formatDate } from '@/constants/Fns';
import { Props } from '@/constants/Types';
import { Image } from 'react-native';
import styledNative from 'styled-components/native';
import { ThemedText } from '../basic/ThemedText';

export function Item({ item }: Props) {
  return (
    <ItemWrapper>
      <Thumbnail source={{ uri: item.thumbnail }} />
      <ThemedText type="default" numberOfLines={2} ellipsizeMode="tail">
        {item.title}
      </ThemedText>
      <DateText type="date">{formatDate(item.date)}</DateText>
    </ItemWrapper>
  );
}

const ItemWrapper = styledNative.View`
  max-width: 180px;
`;

const Thumbnail = styledNative(Image)`
  border-radius: 14px;
  margin-top: 16px;
  margin-bottom: 8px;
  width: 180px;
  height: 112px;
`;

const DateText = styledNative(ThemedText)`
  text-align: right;
  margin-top: 8px;
`;
