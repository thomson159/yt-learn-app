// Render the Video component only on supported platforms (web, iOS, Android).
// This prevents the app from crashing during Expo Go or other environments
// where the Video component might cause issues.
// When built for the target platforms (web, iOS, Android), the component will work correctly.

// Testing the Video component was very challenging for me,
// as I only have a Lenovo computer running Ubuntu where I wrote the code,
// and an iPhone 13 Pro on which I tested the app.

import NotesEditor from '@/components/video/NotesEditor';
import TabsRow from '@/components/video/TabsRow';
import VideoDetails from '@/components/video/VideoDetails';
import VideoHeader from '@/components/video/VideoHeader';
import { Item, ItemStats } from '@/constants/Types';
import { useFetchVideoStats } from '@/hooks/useFetchVideoStats';
import { useLocalSearchParams } from 'expo-router';
// import { useRef, useState } from 'react';
import { useState } from 'react';
// import Video, { VideoRef } from 'react-native-video';
import styledNative from 'styled-components/native';

export default function VideoSreen() {
  const params: Item = useLocalSearchParams();
  const stats: ItemStats = useFetchVideoStats(params.id);
  const [activeTab, setActiveTab] = useState<'details' | 'notes'>('details');

  // const videoRef = useRef<VideoRef>(null);
  // const background = require('../assets/broadchurch.mp4');

  return (
    <Container>
      {/* <Video
        source={background}
        ref={videoRef}
        style={{ width: '100%', height: 200, marginBottom: 24 }}
        controls
        resizeMode="contain"
      /> */}
      <VideoHeader title={params.title} channel={params.channel} />
      <TabsRow activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'details' && (
        <VideoDetails
          description={params.description}
          likeCount={stats.likeCount}
          viewCount={stats.viewCount}
        />
      )}
      {activeTab === 'notes' && <NotesEditor params={params} />}
    </Container>
  );
}

const Container = styledNative.View`
  background-color: #FFFFFF;
  min-height: 100%;
  padding: 24px;
`;
