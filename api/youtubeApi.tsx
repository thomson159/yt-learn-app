import axios from 'axios';
import { YOUTUBE_API_KEY } from '../config';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export type YouTubeVideo = {
  snippet: {
    publishTime: string;
    title: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
};

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
