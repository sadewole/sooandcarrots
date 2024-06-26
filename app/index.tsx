import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '@/components/Button/Button';
import { Colors } from '@/constants/Colors';
import LoginIcon from '@/assets/svgs/login.svg';
import MailIcon from '@/assets/svgs/mail.svg';
import ChevronIcon from '@/assets/svgs/chevron-right-circle.svg';
import { ThemedText } from '@/components/ThemedText';
import { LinearGradient } from 'expo-linear-gradient';

const Home = () => {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <ImageBackground
      source={require('@/assets/images/home-bg.png')}
      style={styles.backgroundImage}
    >
      <View style={[styles.overlay, { paddingTop: top + 50 }]}>
        <ThemedText type='titleExtra' style={styles.title}>
          Soo{'\n'}and Carrots
        </ThemedText>
        <View style={{ flex: 1 }} />

        <LinearGradient
          colors={['transparent', '#161718', '#161718']}
          style={styles.gradient}
        />
        <View style={{ paddingBottom: 40 + bottom }}>
          <Button
            iconLeft={<LoginIcon />}
            iconRight={<ChevronIcon />}
            title='Sign up for free'
          />

          <Button
            buttonStyle={{
              backgroundColor: Colors.darkenBlue,
              marginTop: 16,
            }}
            iconLeft={<MailIcon />}
            title='Continue with Email'
            iconRight={<ChevronIcon />}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    color: 'white',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 300,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
});

export default Home;
