import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button } from '@/components/button/Button';
import { colors } from '@/constants/colors';
import LoginIcon from '@/assets/svgs/login.svg';
import MailIcon from '@/assets/svgs/mail.svg';
import { ThemedText } from '@/components/themedText/ThemedText';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ChevronGo } from '@/components/chevronGo/ChevronGo';

const Home = () => {
  const router = useRouter();
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
            iconRight={<ChevronGo />}
            title='Sign up for free'
            onPress={() => router.push('/signup')}
          />

          <Button
            buttonStyle={{
              backgroundColor: colors.gray800,
              marginTop: 16,
            }}
            iconLeft={<MailIcon />}
            title='Continue with Email'
            iconRight={<ChevronGo />}
            onPress={() => router.push('/home')}
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
