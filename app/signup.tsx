import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ChevronGo } from '@/components/chevronGo/ChevronGo';
import { colors } from '@/constants/colors';
import { useRouter } from 'expo-router';
import { Select } from '@/components/fields/select/Select';
import { Input } from '@/components/fields/input/Input';
import { PasswordInput } from '@/components/fields/passwordInput/PasswordInput';
import { Button } from '@/components/button/Button';
import Checkbox from 'expo-checkbox';

const Signup = () => {
  const router = useRouter();
   const [isChecked, setChecked] = React.useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={router.back}>
          <ChevronGo
            borderColor={colors.gray300}
            iconColor={colors.black}
            direction='left'
          />
        </TouchableOpacity>
        <ThemedText type='title'>Create Account</ThemedText>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: 16, flex: 1, marginTop: 20 }}>
          <Select value='' placeholder='Competition to sign up *' />
          <Input placeholder='Enter email *' />
          <PasswordInput />
          <Input placeholder='First Name in English *' />
          <Input placeholder='Last Name in English *' />
          <View style={{ flexDirection: 'row', gap: 10, marginTop: 8 }}>
            <Checkbox
              style={styles.checkbox}
              value={isChecked}
              onValueChange={setChecked}
            />
            <ThemedText
              style={{ flex: 1, lineHeight: 21, color: colors.gray600 }}
            >
              By signing up, I agree to Cloit's{' '}
              <ThemedText style={{ textDecorationLine: 'underline' }}>
                Terms & Conditions
              </ThemedText>{' '}
              and{' '}
              <ThemedText style={{ textDecorationLine: 'underline' }}>
                Privacy Policy.
              </ThemedText>{' '}
            </ThemedText>
          </View>
          <Button title='Sign Up' buttonStyle={{ marginVertical: 30 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingHorizontal: 16,
  },
  checkbox: {
    marginTop: 7,
    borderRadius: 4,
    borderColor: '#D3D8FF'
  },
});
