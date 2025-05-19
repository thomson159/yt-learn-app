import NotesEditor from '@/components/video/NotesEditor';
import TabsRow from '@/components/video/TabsRow';
import VideoDetails from '@/components/video/VideoDetails';
import VideoHeader from '@/components/video/VideoHeader';
import { Item } from '@/constants/Types';
import { useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import styledNative from 'styled-components/native';
// import Video, { VideoRef } from 'react-native-video';

export default function VideoSreen() {
  const params: Item = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState<'details' | 'notes'>('details');

  // Render the Video component only on supported platforms (web, iOS, Android).
  // This prevents the app from crashing during Expo Go or other environments
  // where the Video component might cause issues.
  // When built for the target platforms (web, iOS, Android), the component will work correctly.

  // const videoRef = useRef<VideoRef>(null);
  // const background = require('./background.mp4');

  return (
    <Container>
      {/* <VideoComponent
        // source={background}
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
        ref={videoRef}
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
