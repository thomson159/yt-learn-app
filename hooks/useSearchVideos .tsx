import { searchVideos } from '@/api/youtubeApiMock';
// import { searchVideos } from '@/api/youtubeApi';
import { useSearch } from '@/components/SearchProvider';
import { Item, YouTubeVideo } from '@/constants/Types';
import { useEffect, useState } from 'react';

export function useSearchVideos() {
  const { query } = useSearch();
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setItems([]);
      return;
    }

    async function fetchVideos() {
      try {
        const videos = await searchVideos(query);
        const formatted = videos.map((video: YouTubeVideo) => ({
          id: video.id,
          date: video.snippet.publishTime,
          title: video.snippet.title,
          thumbnail: video.snippet.thumbnails.high.url,
          channel: video.snippet.channelTitle,
          description: video.snippet.description,
          likeCount: video.statistics?.likeCount ?? '0',
          viewCount: video.statistics?.viewCount ?? '0',
        }));

        setItems(formatted);
      } catch (error) {
        console.error('Search error:', error);
      }
    }

    fetchVideos();
  }, [query]);

  return items;
}
