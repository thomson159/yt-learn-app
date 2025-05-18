// TODO: Used MaterialIcons instead of custom icons from assets for faster development.
// Can replace with custom SVG icons from assets later for better branding and design.

import { HapticTab } from '@/components/basic/HapticTab';
import { Navbar } from '@/components/Navbar';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import React, { useState } from 'react';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState<'dark' | 'light'>('light'); // dynamiczny
  const [inputValue, setInputValue] = useState('');

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <>
      <Navbar
        theme={theme}
        setTheme={setTheme} // przekazujemy setter
        toggleTheme={toggleTheme}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          tabBarInactiveTintColor:
            Colors[colorScheme ?? 'light'].tabIconDefault,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: {
            position: 'absolute',
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            title: 'Search',
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="magnifyingglass" color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
