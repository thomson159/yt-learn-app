import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, Text, type TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'date';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'date' ? styles.date : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 24,
    letterSpacing: 0.2,
    paddingLeft: 24,
  },
  default: {
    fontSize: 12,
    lineHeight: 12,
    fontWeight: 500,
    letterSpacing: 0.2,
  },
  date: {
    textAlign: 'right',
    fontSize: 10,
    lineHeight: 24,
    letterSpacing: 0.2,
    fontWeight: 400,
  },
});

// font-family: Poppins;
