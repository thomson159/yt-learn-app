import { searchVideosStats } from '@/api/youtubeApiStats';
import { ItemStats } from '@/constants/Types';
import { useEffect, useState } from 'react';

export function useSearchVideosStats(videoId: string) {
  const [stats, setStats] = useState<ItemStats>({
    likeCount: '0',
    viewCount: '0',
  });

  useEffect(() => {
    if (!videoId.trim()) {
      setStats({
        likeCount: '0',
        viewCount: '0',
      });
      return;
    }

    async function fetchStats() {
      try {
        const data = await searchVideosStats(videoId);
        setStats(data);
      } catch (error) {
        console.error('Stats fetch error:', error);
      }
    }

    fetchStats();
  }, [videoId]);

  return stats;
}
