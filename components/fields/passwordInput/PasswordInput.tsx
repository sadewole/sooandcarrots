import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { colors } from '@/constants/colors';
import { ThemedText } from '@/components/ThemedText';
import { fonts } from '@/constants/fonts';
import EyeIcon from '@/assets/svgs/eye.svg';
import EyeSlashIcon from '@/assets/svgs/eyeSlash.svg';

type PasswordInputProps = TextInputProps & {
  containerStyle?: ViewStyle;
  error?: { message: string };
};

export const PasswordInput = (props: PasswordInputProps) => {
  const {
    style,
    containerStyle,
    error,
    ...rest
  } = props;
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowCofirmPassword] = React.useState(false);

  return (
    <View style={[{ marginBottom: 8 }, style]}>
      <View style={[textFieldStyles.inputGroup, containerStyle]}>
        <View
          style={[
            textFieldStyles.inputWrapper,
            {
              borderBottomWidth: StyleSheet.hairlineWidth,
              borderColor: colors.gray300,
            },
          ]}
        >
          <TextInput
            style={[textFieldStyles.input, style]}
            placeholderTextColor={colors.gray500}
            secureTextEntry
            placeholder='Enter password *'
            {...rest}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
          </TouchableOpacity>
        </View>
        <View style={textFieldStyles.inputWrapper}>
          <TextInput
            style={[textFieldStyles.input, style]}
            placeholderTextColor={colors.gray500}
            placeholder='Enter cofirm password *'
            {...rest}
          />
          <TouchableOpacity
            onPress={() => setShowCofirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? <EyeIcon /> : <EyeSlashIcon />}
          </TouchableOpacity>
        </View>
      </View>

      {error && error?.message && (
        <ThemedText style={{ color: colors.red500 }}>
          {error?.message as string}
        </ThemedText>
      )}
    </View>
  );
};

export const textFieldStyles = StyleSheet.create({
  inputGroup: {
    borderRadius: 16,
    marginTop: 8,
    backgroundColor: colors.gray50,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: fonts.regular,
  },
  inputWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2.5,
  },
});
