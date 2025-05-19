import { YouTubeVideoStats } from '@/constants/Types';

export async function fetchVideoStats(
  videoId: string,
): Promise<YouTubeVideoStats> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (!videoId || videoId.trim() === '')
    return {
      likeCount: '0',
      viewCount: '0',
    };

  return {
    likeCount: '123123',
    viewCount: '53466',
  };
}
