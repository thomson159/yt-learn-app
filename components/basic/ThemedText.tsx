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
        type === 'bold' ? styles.bold : undefined,
        type === 'big' ? styles.big : undefined,
        type === 'bigBold' ? styles.bigBold : undefined,
        type === 'small' ? styles.small : undefined,
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
  },
  decorationLine: {
    fontSize: 12,
    fontWeight: 400,
    textDecorationLine: 'underline',
  },
  date: {
    fontSize: 10,
    fontWeight: 400,
  },
  default: {
    fontSize: 12,
    fontWeight: 500,
  },
  big: {
    fontSize: 15,
    fontWeight: 400,
  },
  bold: {
    fontSize: 12,
    fontWeight: 700,
  },
  bigBold: {
    fontSize: 14,
    fontWeight: 700,
  },
  small: {
    fontSize: 10,
    fontWeight: 600,
  },
});

// font-family: Poppins;
