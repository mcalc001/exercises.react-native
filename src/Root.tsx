import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import FixturesScreen from './modules/fixtures/FixturesScreen';
import HomeScreen from './modules/home/HomeScreen';
import ProfileScreen from './modules/profile/ProfileScreen';
import StoreScreen from './modules/store/StoreScreen';

type RootParamList = {
  Home: undefined;
  Fixtures: undefined;
  Store: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<RootParamList>();

export default () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{ title: 'Stadion FC' }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Fixtures"
        options={{ title: 'Fixtures' }}
        component={FixturesScreen}
      />
      <Tab.Screen name="Store" component={StoreScreen} />
      <Tab.Screen
        name="Profile"
        options={{ title: 'Profile' }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
