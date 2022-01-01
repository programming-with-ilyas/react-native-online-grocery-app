import React, { useMemo } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppSwitchNavigator } from './main';

export const AppContainer: React.FC = () => {
  return (
    <NavigationContainer>
      {useMemo(
        () => (
          <AppSwitchNavigator />
        ),
        [],
      )}
    </NavigationContainer>
  );
};

export * from './main';