import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import FixturesScreen from './modules/fixtures/screens/FixturesScreen';
import HomeScreen from './modules/home/screens/HomeScreen';
import ProfileScreen from './modules/profile/screens/ProfileScreen';
import ShopScreen from './modules/shop/screens/ShopScreen';

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
      <Tab.Screen name="Store" component={ShopScreen} />
      <Tab.Screen
        name="Profile"
        options={{ title: 'Profile' }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
