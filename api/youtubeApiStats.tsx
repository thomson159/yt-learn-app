import { BASE_URL } from '@/constants/Consts';
import { YouTubeVideoStats } from '@/constants/Types';
import axios from 'axios';
import { YOUTUBE_API_KEY } from '../config';

export async function searchVideosStats(
  videoId: string,
): Promise<YouTubeVideoStats> {
  try {
    const response = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: 'statistics',
        id: videoId,
        key: YOUTUBE_API_KEY,
      },
    });

    const stats = response.data.items[0]?.statistics;

    return {
      likeCount: stats?.likeCount ?? '0',
      viewCount: stats?.viewCount ?? '0',
    };
  } catch (error: any) {
    const data = error.response?.data;

    if (data?.error?.errors) {
      const quotaExceeded = data.error.errors.some(
        (e: any) => e.reason === 'quotaExceeded',
      );

      if (quotaExceeded) {
        console.error('Przekroczono limit zapytań API YouTube');
      }
    } else {
      console.error('YouTube API error:', error.response?.status, data);
    }

    throw error;
  }
}
