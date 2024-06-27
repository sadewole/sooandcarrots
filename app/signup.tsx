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
import { Button } from '@/components/button/Button';
import Checkbox from 'expo-checkbox';
import { Controller, useForm } from 'react-hook-form';
import { CompetitionPicker } from '@/components/CompetitionPicker';
import CheckIcon from '@/assets/svgs/check.svg';
import { emailRegex, passwordRegex } from '@/constants/utils';

type FormT = {
  email: string;
  firstName: string;
  lastName: string;
  competition: string;
  password: string;
  confirmPassword: string;
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
    watch,
    register,
    formState: { errors },
  } = useForm<FormT>({ mode: 'all' });
  register('competition', {
    required: 'You must pick a competition to register',
  });

  const onSubmit = async (data: FormT) => {
    console.log(data);
    router.push('/home');
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
          <View>
            <Controller
              control={control}
              rules={{ required: 'Email is required', pattern: emailRegex }}
              render={({ field }) => (
                <Input
                  placeholder='Enter email *'
                  onBlur={field.onBlur}
                  onChangeText={field.onChange}
                  value={field.value}
                />
              )}
              name='email'
            />
            {errors.email && (
              <ThemedText style={{ color: colors.red500 }}>
                Email format is invalid
              </ThemedText>
            )}
          </View>
          <View>
            <Controller
              control={control}
              rules={{
                required: true,
                minLength: 8,
                pattern: passwordRegex,
              }}
              render={({ field }) => (
                <Input
                  placeholder='Enter password *'
                  onBlur={field.onBlur}
                  secureTextEntry
                  onChangeText={field.onChange}
                  value={field.value}
                  rounded='top'
                  containerStyle={{
                    marginBottom: 0,
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    borderColor: colors.gray300,
                  }}
                />
              )}
              name='password'
            />
            <Controller
              control={control}
              rules={{
                required: true,
                validate: (val) => {
                  const pass = getValues('password');
                  return pass === val;
                },
              }}
              render={({ field }) => (
                <Input
                  placeholder='Enter confirm password *'
                  onBlur={field.onBlur}
                  secureTextEntry
                  onChangeText={field.onChange}
                  value={field.value}
                  rounded='bottom'
                  containerStyle={{ marginTop: 0 }}
                />
              )}
              name='confirmPassword'
            />

            {(errors?.password || errors?.confirmPassword) && (
              <View>
                <ThemedText style={{ color: colors.red500 }}>
                  {errors.password?.type !== 'required' &&
                    errors.password?.type !== 'minLength' && <CheckIcon />}{' '}
                  At least 8 letters
                </ThemedText>
                <ThemedText style={{ color: colors.red500 }}>
                  {passwordRegex.test(watch('password')) && <CheckIcon />}{' '}
                  Include at least 3 uppercase letters, lowercase letters,
                  number, or special letters
                </ThemedText>
                <ThemedText style={{ color: colors.red500 }}>
                  Special letters are only limited to (~`!@#$%^&*()_-+=?)
                </ThemedText>
                <ThemedText style={{ color: colors.red500 }}>
                  {errors.confirmPassword?.type !== 'required' &&
                    errors.confirmPassword?.type !== 'validate' && (
                      <CheckIcon />
                    )}{' '}
                  New password and Confirm password do not match.
                </ThemedText>
              </View>
            )}
          </View>
          <View>
            <Controller
              control={control}
              rules={{ required: 'First name is required' }}
              render={({ field }) => (
                <Input
                  placeholder='First Name in English *'
                  onBlur={field.onBlur}
                  onChangeText={field.onChange}
                  value={field.value}
                />
              )}
              name='firstName'
            />
            {errors.firstName && (
              <ThemedText style={{ color: colors.red500 }}>
                {errors.firstName?.message}
              </ThemedText>
            )}
          </View>
          <View>
            <Controller
              control={control}
              rules={{ required: 'Last name is required' }}
              render={({ field }) => (
                <Input
                  placeholder='Last Name in English *'
                  onBlur={field.onBlur}
                  onChangeText={field.onChange}
                  value={field.value}
                />
              )}
              name='lastName'
            />
            {errors.lastName && (
              <ThemedText style={{ color: colors.red500 }}>
                {errors.lastName?.message}
              </ThemedText>
            )}
          </View>
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
            disabled={!isChecked}
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
