import NotesEditor from '@/components/video/NotesEditor';
import TabsRow from '@/components/video/TabsRow';
import VideoDetails from '@/components/video/VideoDetails';
import VideoHeader from '@/components/video/VideoHeader';
import { Item } from '@/constants/Types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import styledNative from 'styled-components/native';

export default function VideoSreen() {
  const params: Item = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState<'details' | 'notes'>('details');
  const [note, setNote] = useState('');
  const STORAGE_KEY = `note_${params.id}`;

  useEffect(() => {
    (async () => {
      try {
        const savedNote = await AsyncStorage.getItem(STORAGE_KEY);
        if (savedNote !== null) setNote(savedNote);
      } catch {}
    })();
  }, [STORAGE_KEY]);

  const saveNote = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, note);
    } catch {}
  };

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
      {activeTab === 'notes' && (
        <NotesEditor note={note} setNote={setNote} saveNote={saveNote} />
      )}
    </Container>
  );
}

const Container = styledNative.View`
  background-color: #FFFFFF;
  min-height: 100%;
  padding: 24px;
`;
