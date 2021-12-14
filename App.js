import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './Navigations/BottomTabNavigator';
import QuotesProvider from './Context/quotesContext';

export default function App() {
  return (
    <QuotesProvider>
      <NavigationContainer>
        <BottomTabNavigator/>
      </NavigationContainer>
    </QuotesProvider>
  );
}