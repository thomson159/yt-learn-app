import { PropsWithChildren, ReactElement } from 'react';
import { TextProps } from 'react-native';

export const queries = [
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

export type HomeRom = {
  title: string;
  items: Item[];
  isLast: boolean;
};

export const HEADER_HEIGHT = 250;

export type ParallaxScrollViewProps = PropsWithChildren<{
  headerImage: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'date' | 'defaultBold';
};
