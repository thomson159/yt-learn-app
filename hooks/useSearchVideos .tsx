import { searchVideos } from '@/api/youtubeApi';
// import { searchVideos } from '@/api/youtubeApiMock';
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
          id: video.id.videoId,
          date: video.snippet.publishTime,
          title: video.snippet.title,
          thumbnail: video.snippet.thumbnails.high.url,
          channel: video.snippet.channelTitle,
          description: video.snippet.description,
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
