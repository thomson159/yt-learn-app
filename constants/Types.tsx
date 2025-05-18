import { TextProps } from 'react-native';

export type Queries = [
  'react native',
  'react',
  'typescript',
  'expo',
  'firebase',
];

export type Props = {
  item: Item;
};

export type Item = {
  date: string;
  title: string;
  thumbnail: string;
  channel: string;
  description: string;
  likeCount: string;
  viewCount: string;
};

export type ItemsByCategory = {
  [key: string]: Item[];
};

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | 'default'
    | 'title'
    | 'date'
    | 'bold'
    | 'big'
    | 'decorationLine'
    | 'small'
    | 'light'
    | 'bigBold';
};

export type YouTubeVideo = {
  snippet: {
    publishTime: string;
    title: string;
    description: string;
    channelTitle: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
  statistics: {
    likeCount: string;
    viewCount: string;
  };
};

export type InnerLayoutProps = {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  inputValue: string;
  setInputValue: (val: string) => void;
};

export type SortOption =
  | 'Upload date: latest'
  | 'Upload date: oldest'
  | 'Most popular';

export type ItemType = {
  date: string;
  viewCount: string;
};
