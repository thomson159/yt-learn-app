import { ThemedText } from '@/components/basic/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import styledNative from 'styled-components/native';

export default function VideoHeader({
  title,
  channel,
}: {
  title: string;
  channel: string;
}) {
  return (
    <>
      <TitleText type="title" numberOfLines={1} ellipsizeMode="tail">
        {title}
      </TitleText>
      <ChannelRow>
        <IconWrapper>
          <IconSymbol size={20} name="person.fill" color="#FFFFFF" />
        </IconWrapper>
        <ThemedText type="bigBold">{channel}</ThemedText>
      </ChannelRow>
    </>
  );
}

const TitleText = styledNative(ThemedText)`
  margin-bottom: 8px;
`;

const ChannelRow = styledNative.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 8px;
`;

const IconWrapper = styledNative.View`
  width: 48px;
  height: 48px;
  border-radius: 50px;
  background-color: #2B2D42;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;
