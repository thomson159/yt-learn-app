import { BASE_URL } from '@/constants/Consts';
import { YouTubeVideo } from '@/constants/Types';
import axios from 'axios';
import { YOUTUBE_API_KEY } from '../config';

export async function searchVideos(query: string): Promise<YouTubeVideo[]> {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      part: 'snippet',
      q: query,
      key: YOUTUBE_API_KEY,
      maxResults: 10,
      type: 'video',
    },
  });

  return response.data.items;
}
