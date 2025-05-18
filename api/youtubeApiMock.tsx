import { YouTubeVideo } from '@/constants/Types';

export async function searchVideos(query: string): Promise<YouTubeVideo[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (!query || query.trim() === '') return [];

  return [
    {
      snippet: {
        publishTime: '2023-05-01T00:00:00Z',
        title: `Video 1 "${query}"`,
        description: `Description for video 1 with query "${query}"`,
        thumbnails: {
          high: {
            url: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
          },
        },
        channelTitle: 'Mock Channel 1',
      },
      statistics: {
        likeCount: '123',
        viewCount: '100',
      },
    },
    {
      snippet: {
        publishTime: '2023-01-01T00:00:00Z',
        title: `Video 2 "${query}"`,
        description: `Description for video 2 with query "${query}"`,
        thumbnails: {
          high: {
            url: 'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/14235/production/_100058428_mediaitem100058424.jpg',
          },
        },
        channelTitle: 'Mock Channel 2',
      },
      statistics: {
        likeCount: '456',
        viewCount: '3000',
      },
    },
    {
      snippet: {
        publishTime: '2023-10-01T00:00:00Z',
        title: `Video 3 "${query}"`,
        description: `Description for video 3 with query "${query}"`,
        thumbnails: {
          high: {
            url: 'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png',
          },
        },
        channelTitle: 'Mock Channel 3',
      },
      statistics: {
        likeCount: '789',
        viewCount: '10',
      },
    },
  ];
}
