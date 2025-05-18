import { ThemedText } from '@/components/basic/ThemedText';
import { Item } from '@/constants/Types';
import { useLocalSearchParams } from 'expo-router';
// import { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Video, { VideoRef } from 'react-native-video';

export default function VideoSreen() {
  const params: Item = useLocalSearchParams();
  // const videoRef = useRef<VideoRef>(null);

  return (
    <View style={styles.container}>
      {/* <Video
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }} // przykładowy link
        ref={videoRef}
        style={styles.video}
        controls
        resizeMode="contain"
      /> */}

      <ThemedText type="title" numberOfLines={1} ellipsizeMode="tail">
        {params.title}
      </ThemedText>
      <ThemedText type="bigBold">{params.channel}</ThemedText>

      <ThemedText type="small" style={{ marginBottom: 6, marginTop: 16 }}>
        Description
      </ThemedText>
      <ThemedText type="default" style={{ marginBottom: 16 }}>
        {params.description}
      </ThemedText>

      <ThemedText type="small" style={{ marginBottom: 6 }}>
        Statistics
      </ThemedText>
      <Text>{params.viewCount} views</Text>
      <Text>{params.likeCount} likes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    minHeight: '100%',
    padding: 24,
  },
  video: {
    width: '100%',
    height: 200,
    marginBottom: 24,
  },
});
