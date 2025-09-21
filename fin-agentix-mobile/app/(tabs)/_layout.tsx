import React from 'react';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0066cc',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="loans"
        options={{
          title: 'Loans',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bank" color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="marketplace"
        options={{
          title: 'Marketplace',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="store" color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}