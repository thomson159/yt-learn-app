import { SearchItemType } from '@/constants/Types';
import styledNative from 'styled-components/native';
import { ThemedText } from '../basic/ThemedText';
import { ThemedView } from '../basic/ThemedView';

export function SearchItem({ des, date, channel }: SearchItemType) {
  return (
    <ItemWrapper>
      <VideoImage />
      <ChannelText>{channel}</ChannelText>
      <DescriptionText numberOfLines={2} ellipsizeMode="tail">
        {des}
      </DescriptionText>
      <DateText>{date}</DateText>
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

const VideoImage = styledNative.View`
  background-color: darkgray;
  min-height: 200px;
  border-radius: 14px;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const ChannelText = styledNative(ThemedText).attrs({ type: 'defaultBold' })`
  margin-top: 16px;
`;

const DescriptionText = styledNative(ThemedText).attrs({ type: 'default' })`
  margin-top: 8px;
`;

const DateText = styledNative(ThemedText).attrs({ type: 'date' })`
  margin-top: 12px;
`;
