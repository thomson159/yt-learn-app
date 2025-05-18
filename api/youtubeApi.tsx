import { BASE_URL } from '@/constants/Consts';
import { YouTubeVideo } from '@/constants/Types';
import axios from 'axios';
import { YOUTUBE_API_KEY } from '../config';

export async function searchVideos(query: string): Promise<YouTubeVideo[]> {
  try {
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
  } catch (error: any) {
    const data = error.response?.data;

    if (data?.error?.errors) {
      const quotaExceeded = data.error.errors.some(
        (e: any) => e.reason === 'quotaExceeded',
      );

      if (quotaExceeded) {
        console.error('Przekroczono limit zapytań API YouTube');
      }

      console.error(
        'YouTube API error:',
        error.response?.status,
        JSON.stringify(data.error.errors, null, 2),
        data.error.message,
      );
    } else {
      console.error('YouTube API error:', error.response?.status, data);
    }

    throw error;
  }
}
