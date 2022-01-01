import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './main';

export const AppContainer: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export * from './main';