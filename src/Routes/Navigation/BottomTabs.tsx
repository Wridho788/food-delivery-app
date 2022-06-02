import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabParamList } from '../../Types/BottomParamsList';
import { HomeScreen } from '../../Screens';
import RestaurantsScreen from './../../Screens/Restaurants/index';
import OrderScreen from './../../Screens/Order/index';
import AccountScreen from './../../Screens/Account/index';
import { icons, COLORS } from '../../Constants';

const Tabs = createBottomTabNavigator<BottomTabParamList>();

const BottomTabs = (): JSX.Element => (
  // @ts-ignore
  <Tabs.Navigator screenOptions={{
   headerShown: false,
  }}>
    <Tabs.Screen name="Home" component={HomeScreen} options={{
      tabBarIcon: (props: {
        focused: boolean;
      }) => {
        return <Image
          source={icons.cutlery}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: props ? COLORS.primary : COLORS.secondary
          }}
        />;
      }
    }} />
    <Tabs.Screen name="Restaurants" component={RestaurantsScreen} options={{
      tabBarIcon: (props: {
        focused: boolean;
      }) => {
        return <Image
          source={icons.search}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: props ? COLORS.primary : COLORS.secondary
          }}
        />;
      }
    }} />
    <Tabs.Screen name="Order" component={OrderScreen} options={{
      tabBarIcon: (props: {
        focused: boolean;
      }) => {
        return <Image
          source={icons.like}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: props ? COLORS.primary : COLORS.secondary
          }}
        />;
      }
    }} />
    <Tabs.Screen name="Account" component={AccountScreen} options={{
      tabBarIcon: (props: {
        focused: boolean;
      }) => {
        return <Image
          source={icons.user}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
            tintColor: props ? COLORS.primary : COLORS.secondary
          }}
        />;
      }
    }} />
  </Tabs.Navigator>
)

export default BottomTabs;