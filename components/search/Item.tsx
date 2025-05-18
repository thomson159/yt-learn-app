import { formatDate } from '@/constants/Fns';
import { Props } from '@/constants/Types';
import { Image } from 'react-native';
import styledNative from 'styled-components/native';
import { ThemedText } from '../basic/ThemedText';
import { ThemedView } from '../basic/ThemedView';

export function Item({ item }: Props) {
  return (
    <ItemWrapper>
      <Thumbnail source={{ uri: item.thumbnail }} />
      <ChannelText>{item.channel}</ChannelText>
      <DescriptionText numberOfLines={2} ellipsizeMode="tail">
        {item.title}
      </DescriptionText>
      <DateText>{formatDate(item.date)}</DateText>
    </ItemWrapper>
  );
}

const ItemWrapper = styledNative(ThemedView)`
  width: 100%;
  padding-top: 8px;
  padding-bottom: 16px;
  padding-left: 24px;
  padding-right: 24px;
`;

const Thumbnail = styledNative(Image)`
  border-radius: 14px;
  width: 100%;
  height: 200px;
`;

const ChannelText = styledNative(ThemedText).attrs({ type: 'bold' })`
  margin-top: 16px;
  margin-bottom: 8px;
`;

const DescriptionText = styledNative(ThemedText).attrs({ type: 'big' })`
  margin-top: 2px;
`;

const DateText = styledNative(ThemedText).attrs({ type: 'date' })`
  text-align: right;
  margin-top: 12px;
`;
