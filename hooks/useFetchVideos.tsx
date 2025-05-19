// import { searchVideos } from '@/api/youtubeApiMock';
import { searchVideos } from '@/api/youtubeApi';
import { queries } from '@/constants/Consts';
import { capitalize } from '@/constants/Fns';
import { ItemsByCategory, YouTubeVideo } from '@/constants/Types';
import { useEffect, useState } from 'react';

export function useFetchVideos() {
  const [itemsByCategory, setItemsByCategory] = useState<ItemsByCategory>({});

  useEffect(() => {
    async function fetchAllVideos() {
      try {
        const results = await Promise.all(queries.map((q) => searchVideos(q)));
        const newItemsByCategory: ItemsByCategory = {};

        queries.forEach((query, i) => {
          newItemsByCategory[capitalize(query)] = results[i].map(
            (video: YouTubeVideo) => ({
              id: video.id.videoId,
              date: video.snippet.publishTime,
              title: video.snippet.title,
              thumbnail: video.snippet.thumbnails.high.url,
              channel: video.snippet.channelTitle,
              description: video.snippet.description,
            }),
          );
        });

        setItemsByCategory(newItemsByCategory);
      } catch (error) {
        console.error('Fetch videos error:', error);
      }
    }

    fetchAllVideos();
  }, []);

  return itemsByCategory;
}
