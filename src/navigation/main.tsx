import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CartScreen, ExploreScreen, FavoritesScreen, HomeScreen, LoginScreen, OrderAcceptedScreen, ProductDetailScreen, SearchScreen, SplashScreen, WelcomeScreen } from '../screens';
import { Icon } from '../components';

export type BottomTabParamList = {
  HomeScreen: undefined;
  ExploreScreen: undefined;
  CartScreen: undefined;
  FavoritesScreen: undefined;
  AccountScreen: undefined;
}

const Tab = createBottomTabNavigator<BottomTabParamList>();


const BottomTabBar = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#53B175', header: () => null }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Icon name="shop" color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => <Icon name="explore" color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color, size }) => <Icon name="cart" color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => <Icon name="favorites" color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="AccountScreen"
        component={SplashScreen}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size }) => <Icon name="account" color={color} size={20} />,
        }}
      />
    </Tab.Navigator>
  );
};

export type RootStackParamList = {
  SplashScreen: undefined;
  BottomTab: BottomTabParamList;
  OrderAcceptedScreen: undefined;
  SearchScreen: undefined;
  ProductDetailScreen: undefined;
  LoginScreen: undefined;
  WelcomeScreen: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();
export const RootStack: React.FC = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          gestureEnabled: false,
          gestureDirection: 'vertical',
        }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="BottomTab" component={BottomTabBar} />
      <Stack.Screen name="OrderAcceptedScreen" component={OrderAcceptedScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      </Stack.Navigator>
    )
}