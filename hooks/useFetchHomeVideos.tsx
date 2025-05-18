import { searchVideos, YouTubeVideo } from '@/api/youtubeApi';
import { capitalize } from '@/constants/Fns';
import { ItemsByCategory, queries } from '@/constants/Types';
import { useEffect, useState } from 'react';

export function useFetchHomeVideos() {
  const [itemsByCategory, setItemsByCategory] = useState<ItemsByCategory>({});

  useEffect(() => {
    async function fetchAllVideos() {
      const results = await Promise.all(queries.map((q) => searchVideos(q)));
      const newItemsByCategory: ItemsByCategory = {};

      queries.forEach((query, i) => {
        newItemsByCategory[capitalize(query)] = results[i].map(
          (video: YouTubeVideo) => ({
            date: video.snippet.publishTime,
            title: video.snippet.title,
            thumbnail: video.snippet.thumbnails.default.url,
          }),
        );
      });

      setItemsByCategory(newItemsByCategory);
    }

    fetchAllVideos();
  }, []);

  return itemsByCategory;
}
