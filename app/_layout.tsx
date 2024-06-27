import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import Constants from 'expo-constants';
import { View } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const [loaded] = useFonts({
    JakartaSans: require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
    JakartaSansMedium: require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
    JakartaSansSemiBold: require('../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    JakartaSansBold: require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
    JakartaSansExtraBold: require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <Slot />;
}

let EntryPoint = RootLayout;

if (Constants.expoConfig?.extra?.storybookEnabled) {
  const StorybookUI = require('../.storybook').default;
  EntryPoint = () => {
    SplashScreen.hideAsync();
    return (
      <View style={{ flex: 1 }}>
        <StorybookUI />
      </View>
    );
  };
}

export default EntryPoint;
