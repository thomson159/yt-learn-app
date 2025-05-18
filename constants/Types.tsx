import { PropsWithChildren, ReactElement } from 'react';
import { TextProps } from 'react-native';

export type Queries = [
  'react native',
  'react',
  'typescript',
  'expo',
  'firebase',
];

export type Item = {
  date: string;
  title: string;
  thumbnail: string;
};

export type ItemsByCategory = {
  [key: string]: Item[];
};

export type HomeRowType = {
  title: string;
  items: Item[];
  isLast: boolean;
};

export type HomeItemType = { item: Item };

export type SearchItemType = {
  des: string;
  date: string;
  channel: string;
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
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
};
