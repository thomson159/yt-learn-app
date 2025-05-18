import { YouTubeVideo } from '@/constants/Types';

export async function searchVideos(query: string): Promise<YouTubeVideo[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (!query || query.trim() === '') return [];

  return [
    {
      snippet: {
        publishTime: '2023-01-01T00:00:00Z',
        title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s "${query}" #1`,
        thumbnails: {
          high: {
            url: 'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/14235/production/_100058428_mediaitem100058424.jpg',
          },
        },
        channelTitle: 'Mock Channel 1',
      },
    },
    {
      snippet: {
        publishTime: '2023-01-02T00:00:00Z',
        title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s "${query}" #2`,
        thumbnails: {
          high: {
            url: 'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/14235/production/_100058428_mediaitem100058424.jpg',
          },
        },
        channelTitle: 'Mock Channel 2',
      },
    },
  ];
}
