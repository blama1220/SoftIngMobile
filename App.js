import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    // Components: ComponentsScreen,
    // List : ListScreen,
    // Image : ImageScreen
  },
  
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
