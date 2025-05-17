import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';

export default function BlurTabBarBackground() {
  return (
    <BlurView
      tint="light" // albo "dark", albo "default"
      intensity={100}
      style={[StyleSheet.absoluteFill, { backgroundColor: '#8D99AE' }]}
    />
  );
}

export function useBottomTabOverflow() {
  return useBottomTabBarHeight();
}
