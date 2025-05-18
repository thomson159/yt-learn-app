import NotesEditor from '@/components/video/NotesEditor';
import TabsRow from '@/components/video/TabsRow';
import VideoDetails from '@/components/video/VideoDetails';
import VideoHeader from '@/components/video/VideoHeader';
import { Item } from '@/constants/Types';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import styledNative from 'styled-components/native';

export default function VideoSreen() {
  const params: Item = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState<'details' | 'notes'>('details');

  return (
    <Container>
      {/* <Video
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
        style={{ width: '100%', height: 200, marginBottom: 24 }}
        controls
        resizeMode="contain"
      /> */}
      <VideoHeader title={params.title} channel={params.channel} />
      <TabsRow activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'details' && <VideoDetails params={params} />}
      {activeTab === 'notes' && <NotesEditor params={params} />}
    </Container>
  );
}

const Container = styledNative.View`
  background-color: #FFFFFF;
  min-height: 100%;
  padding: 24px;
`;
