import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import InicioScreen from '../Screens/today';
import GithubScreen from '../Screens/random';
import AcercadeScreen from '../Screens/quotes';


const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      tabBarOptions={{
        activeTintColor: '#ff6600',
        inactiveTintColor: '#060606',
        showLabel: true,
        labelStyle: {
          fontSize: 12,
        },
        style: {
          paddingBottom: 5,
          backgroundColor: '#f3f3f1',
        },
      }}>
      <Tab.Screen 
        name="Today"
        component={InicioScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Today',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'today-outline'} size={20} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Random"
        component={GithubScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Random',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'shuffle-outline'} size={20} color={color} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Quotes"
        component={AcercadeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Quotes',
          tabBarIcon: ({ color }) => (
            <Ionicons name={'calendar-outline'} size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
