// import { fetchVideoStats } from '@/api/youtubeApiStats';
import { fetchVideoStats } from '@/api/youtubeApiStatsMock';
import { ItemStats } from '@/constants/Types';
import { useEffect, useState } from 'react';

export function useFetchVideoStats(videoId: string) {
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
        const data = await fetchVideoStats(videoId);
        setStats(data);
      } catch (error) {
        console.error('Stats fetch error:', error);
      }
    }

    fetchStats();
  }, [videoId]);

  return stats;
}
