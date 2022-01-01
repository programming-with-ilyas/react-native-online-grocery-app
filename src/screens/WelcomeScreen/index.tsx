import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Text, StyleSheet, ImageBackground, Pressable } from 'react-native';
import background from '../../../assets/img/welcome-screen-background.png';
import { WelcomeScreenNavigationProp } from '../../navigation';
import Logo from './components/Logo';

export const WelcomeScreen: React.FC = () => {
    const navigation = useNavigation<WelcomeScreenNavigationProp>();
    const onPress = useCallback(() => {
        navigation.navigate('LoginScreen');
    }, []);
  return (
    <ImageBackground source={background} style={styles.container}>
      <Logo style={{ alignSelf: 'center', marginTop: 'auto' }} />
      <Text style={styles.title}>Welcome to our store</Text>
      <Text style={styles.subtitle}>Ger your groceries in as fast as one hour</Text>
      <Pressable style={styles.button} onPress={onPress} android_ripple={{radius: 100}}>
        <Text style={styles.buttonText}>Get started</Text>
      </Pressable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'GilroySemiBold',
    fontSize: 48,
    marginTop: 34,
  },
  subtitle: {
    fontFamily: 'GilroyMedium',
    fontSize: 16,
    fontStyle: 'normal',
    lineHeight: 15,
    textAlign: 'center',
    color: '#FCFCFCB2',
    marginTop: 18,
  },
  button: {
    backgroundColor: '#53B175',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 32,
    paddingVertical: 24,
    borderRadius: 17,
    marginTop: 41,
    marginBottom: 80,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'GilroySemiBold',
    fontSize: 18,
  },
});
