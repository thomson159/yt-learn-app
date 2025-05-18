import { ThemedText } from '@/components/basic/ThemedText';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Item } from '@/constants/Types';
import styledNative from 'styled-components/native';

export default function VideoDetails({ params }: { params: Item }) {
  return (
    <>
      <StyledLabel type="small">Description</StyledLabel>
      <StyledText type="default">{params.description}</StyledText>
      <StyledLabel type="small">Statistics</StyledLabel>
      <InfoRow>
        <StyledInfo>
          <IconSymbol size={15} name="tv.fill" color={'#FFFFFF'} />
          <InfoText type="small">{params.viewCount} views</InfoText>
        </StyledInfo>
        <StyledInfo>
          <IconSymbol size={15} name="hand.thumbsup.fill" color={'#FFFFFF'} />
          <InfoText type="small">{params.likeCount} likes</InfoText>
        </StyledInfo>
      </InfoRow>
    </>
  );
}

const StyledLabel = styledNative(ThemedText)`
  margin-top: 16px;
  margin-bottom: 8px;
`;

const StyledText = styledNative(ThemedText)`
  margin-bottom: 8px;
`;

const StyledInfo = styledNative.View`
  flex-direction: row;
  align-items: center;
  background-color: #2b2d42;
  padding: 10px;
  border-radius: 8px;
`;

const InfoText = styledNative(ThemedText)`
  color: #ffffff;
  margin-left: 8px;
`;

const InfoRow = styledNative.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;
