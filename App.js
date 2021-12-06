import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation1 from './Navigations/StackNavigation1'

import CineProvider from './Context/CineContext'

export default function App() {
  return (
    <CineProvider>
      <NavigationContainer>
        <StackNavigation1/>
      </NavigationContainer>
    </CineProvider>
  );
}