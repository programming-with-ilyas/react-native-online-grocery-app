import React, { Fragment, useContext } from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { View } from 'react-native';
import Svg, { SvgProps, Path, Text } from "react-native-svg"

export type RootStackParamList = {
    screen: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

const HomeScreen = () => {
    return(
        <View>
        <Text>dwadwa</Text>
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <Path d="M30 1h40l29 29v40L70 99H30L1 70V30z" stroke="#000" fill="none" />
    <Path d="M31 3h38l28 28v38L69 97H31L3 69V31z" fill="#a23" />
    <Text x={50} y={68} fontSize={48} fill="#FFF" textAnchor="middle" />
        </Svg>
      </View>
    )
}
export const AppSwitchNavigator: React.FC = () => {
    return (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            gestureEnabled: false,
            gestureDirection: 'vertical',
          }}>
      <Stack.Screen name="screen" component={HomeScreen} />
    </Stack.Navigator>
    )
}

