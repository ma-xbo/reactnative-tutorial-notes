import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Settings from './screens/Settings';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Settings' component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}