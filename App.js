import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './Navigations/StackNavigation'

import CineProvider from './Context/CineContext'

export default function App() {
  return (
    <CineProvider>
      <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
    </CineProvider>
  );
}