import { PropsWithChildren, ReactElement } from 'react';
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

export type ParallaxScrollViewProps = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'date' | 'defaultBold';
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
