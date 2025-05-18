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
    | 'defaultBold'
    | 'defaultBig'
    | 'decorationLine';
};

export type YouTubeVideo = {
  snippet: {
    publishTime: string;
    title: string;
    channelTitle: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
};

export type InnerLayoutProps = {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  inputValue: string;
  setInputValue: (val: string) => void;
};
