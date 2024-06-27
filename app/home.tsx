import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Card } from '@/components/card/Card';
import { ThemedText } from '@/components/themedText/ThemedText';
import { Button } from '@/components/button/Button';
import { colors } from '@/constants/colors';
import StarIcon from '@/assets/svgs/star.svg';
import CloseIcon from '@/assets/svgs/close-circle.svg';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();
  const goHome = () => router.push('/');

  return (
    <View style={styles.container}>
      <View style={[StyleSheet.absoluteFill, styles.overlay]} />
      <Card style={{ backgroundColor: colors.white }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <StarIcon />
          <TouchableOpacity onPress={goHome}>
            <CloseIcon />
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 50 }}>
          <ThemedText type='title' style={{ marginBottom: 20 }}>
            Welcome to Soo
          </ThemedText>
          <ThemedText type='defaultSubtitle'>
            Great to have you with us!
          </ThemedText>
        </View>
        <Button title='Got it' onPress={goHome} />
      </Card>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  overlay: {
    backgroundColor: colors.black,
    opacity: 0.45,
  },
});
