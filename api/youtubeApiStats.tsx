import { BASE_URL } from '@/constants/Consts';
import { YouTubeVideoStats } from '@/constants/Types';
import axios, { AxiosError } from 'axios';
import { YOUTUBE_API_KEY } from '../config';

export async function fetchVideoStats(
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
  } catch (error) {
    const err = error as AxiosError<{
      error: { errors: { reason: string }[]; message: string };
    }>;

    const data = err.response?.data;

    if (data?.error?.errors) {
      const quotaExceeded = data.error.errors.some(
        (e) => e.reason === 'quotaExceeded',
      );

      if (quotaExceeded) {
        console.error('Przekroczono limit zapytań API YouTube');
      }

      console.error(
        'YouTube API error:',
        err.response?.status,
        JSON.stringify(data.error.errors, null, 2),
        data.error.message,
      );
    } else {
      console.error('YouTube API error:', err.response?.status, data);
    }

    throw err;
  }
}
