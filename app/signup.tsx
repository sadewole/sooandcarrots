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
import { Controller, useForm } from 'react-hook-form';
import { CompetitionPicker } from '@/components/CompetitionPicker';

type FormT = {
  email: string;
  firstName: string;
  lastName: string;
  competition: string;
};

const Signup = () => {
  const router = useRouter();
  const [isChecked, setChecked] = React.useState(false);
  const [isShowModal, setIsShowModal] = React.useState(false);

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    register,
    formState: { errors },
  } = useForm<FormT>({ mode: 'onChange' });
  register('competition', {
    required: 'You must pick a competition to register',
  });

  const onSubmit = async (data: FormT) => {
    console.log(data);
  };

  const toggleModal = () => setIsShowModal(!isShowModal);

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
          <Select
            value={getValues('competition')}
            placeholder='Competition to sign up *'
            onPress={toggleModal}
            errorMessage={errors.competition?.message}
          />
          <Controller
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email format is invalid',
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <Input
                placeholder='Enter email *'
                errorMessage={error?.message}
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
            name='email'
          />
          <PasswordInput />
          <Controller
            control={control}
            rules={{ required: 'First name is required' }}
            render={({ field, fieldState: { error } }) => (
              <Input
                placeholder='First Name in English *'
                errorMessage={error?.message}
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
            name='firstName'
          />
          <Controller
            control={control}
            rules={{ required: 'Last name is required' }}
            render={({ field, fieldState: { error } }) => (
              <Input
                placeholder='Last Name in English *'
                errorMessage={error?.message}
                onBlur={field.onBlur}
                onChangeText={field.onChange}
                value={field.value}
              />
            )}
            name='lastName'
          />
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
          <Button
            title='Sign Up'
            buttonStyle={{ marginVertical: 30 }}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </ScrollView>

      <CompetitionPicker
        isVisible={isShowModal}
        onClose={toggleModal}
        onSelect={(val) => {
          setValue('competition', val.title);
        }}
      />
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
    borderColor: '#D3D8FF',
  },
});
