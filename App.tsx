import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AppContainer } from './src/navigation';
import * as Font from 'expo-font';

const customFonts = {
  GilroyExtraBold: require('./assets/fonts/Gilroy-ExtraBold.ttf'),
  GilroyBold: require('./assets/fonts/Gilroy-Bold.ttf'),
  GilroyRegular: require('./assets/fonts/Gilroy-Regular.ttf'),
  GilroySemiBold: require('./assets/fonts/Gilroy-SemiBold.ttf'),
  GilroyMedium: require('./assets/fonts/Gilroy-Medium.ttf'),
  GilroyLight: require('./assets/fonts/Gilroy-Light.ttf'),
  IcoMoon: require('./assets/fonts/icomoon.ttf'),
};

export default function App() {
  const [loaded, setLoaded] = useState<boolean>(false);
  
  useEffect(() => {
    Font.loadAsync(customFonts)
      .then(() => setLoaded(true))
      .catch((e) => console.log(JSON.stringify(e)));
  }, []);
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {!loaded && <Text>Loading Assets</Text>}
      {loaded && (<AppContainer />)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
