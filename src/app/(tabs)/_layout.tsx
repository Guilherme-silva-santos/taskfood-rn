import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/src/constants/Colors';
import { useColorScheme } from '@/src/hooks/useColorScheme';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { TabBarIcon } from '@/src/components/navigation/TabBarIcon';
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const labelColor = 'gray';

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitleStyle:{color: labelColor},
          tabBarLabelStyle:{color: labelColor},
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={labelColor} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          headerTitleStyle:{color: labelColor},
          tabBarLabelStyle:{color: labelColor},
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'search' : 'search-outline'} color={labelColor} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil ',
          headerTitleStyle:{color: labelColor},
          tabBarLabelStyle:{color: labelColor},
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={'gray'} />
          ),
        }}
      />
    </Tabs>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
