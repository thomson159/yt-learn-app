import { Stack } from 'expo-router';

export function StackScreen() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
      <Stack.Screen name="video" options={{ title: '' }} />
    </Stack>
  );
}
