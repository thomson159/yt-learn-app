import { YouTubeVideo } from '@/constants/Types';

export async function searchVideos(query: string): Promise<YouTubeVideo[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (!query || query.trim() === '') return [];

  return [
    {
      id: {
        videoId: '1',
      },
      snippet: {
        publishTime: '2023-05-01T00:00:00Z',
        title: `Video 1 "${query}, Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing"`,
        description: `Description for video 1 with query "${query}, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."`,
        thumbnails: {
          high: {
            url: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
          },
        },
        channelTitle: 'Mock Channel 1',
      },
      // statistics: {
      //   likeCount: '123',
      //   viewCount: '100',
      // },
    },
    {
      id: {
        videoId: '2',
      },
      snippet: {
        publishTime: '2023-01-01T00:00:00Z',
        title: `Video 2 "${query}, Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing"`,
        description: `Description for video 2 with query "${query}, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."`,
        thumbnails: {
          high: {
            url: 'https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/14235/production/_100058428_mediaitem100058424.jpg',
          },
        },
        channelTitle: 'Mock Channel 2',
      },
      // statistics: {
      //   likeCount: '456',
      //   viewCount: '3000',
      // },
    },
    {
      id: {
        videoId: '3',
      },
      snippet: {
        publishTime: '2023-10-01T00:00:00Z',
        title: `Video 3 "${query}, Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing"`,
        description: `Description for video 3 with query "${query}, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."`,
        thumbnails: {
          high: {
            url: 'https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png',
          },
        },
        channelTitle: 'Mock Channel 3',
      },
      // statistics: {
      //   likeCount: '789',
      //   viewCount: '10',
      // },
    },
  ];
}
