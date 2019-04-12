import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen'

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
	Home: HomeScreen,
	Profile: ProfileScreen
});
  
export default createAppContainer(TabNavigator);