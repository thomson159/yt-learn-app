import { ThemedTextProps } from '@/constants/Types';
import { useThemeColor } from '@/hooks/useThemeColor';
import { StyleSheet, Text } from 'react-native';

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
        type === 'defaultBold' ? styles.defaultBold : undefined,
        type === 'defaultBig' ? styles.defaultBig : undefined,
        type === 'decorationLine' ? styles.decorationLine : undefined,
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
  },
  decorationLine: {
    fontSize: 12,
    lineHeight: 24,
    fontWeight: 400,
    letterSpacing: 0.2,
    textDecorationLine: 'underline',
  },
  date: {
    fontSize: 10,
    lineHeight: 24,
    letterSpacing: 0.2,
    fontWeight: 400,
  },
  default: {
    fontSize: 12,
    lineHeight: 12,
    fontWeight: 500,
    letterSpacing: 0.2,
  },
  defaultBig: {
    fontSize: 15,
    lineHeight: 12,
    fontWeight: 400,
    letterSpacing: 0.2,
  },
  defaultBold: {
    fontSize: 12,
    lineHeight: 12,
    fontWeight: 700,
    letterSpacing: 0.2,
  },
});

// font-family: Poppins;
