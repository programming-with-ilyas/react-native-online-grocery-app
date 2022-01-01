import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { SplashScreenNavigationProp } from '../../navigation';
import Logo from './components/Logo';

export const SplashScreen: React.FC = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  useEffect(() => {
    setTimeout(() => navigation.navigate('WelcomeScreen'), 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
