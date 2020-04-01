import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Buttons from '../components/buttons';
import ScrollableHeader from '../components/scrolls';

const Tab = createBottomTabNavigator();

const tabBarOptionsStyle = {
  labelStyle: {
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 1,
  },
  activeTintColor: '#48C9B0',
  inactiveTintColor: '#B2BABB',
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptionsStyle}>
      <Tab.Screen name="Buttons" component={Buttons} />
      <Tab.Screen name="Scroll" component={ScrollableHeader} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
