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
import EyeIcon from '@/assets/svgs/eye.svg';
import EyeSlashIcon from '@/assets/svgs/eyeSlash.svg';
import { fonts } from '@/constants/fonts';

type InputProps = TextInputProps & {
  rightIcon?: React.ReactNode;
  containerStyle?: ViewStyle;
  rightIconStyle?: ViewStyle;
  rounded?: 'full' | 'top' | 'bottom';
};

export const Input = (props: InputProps) => {
  const {
    rightIcon,
    style,
    containerStyle,
    rightIconStyle,
    rounded = 'full',
    secureTextEntry,
    ...rest
  } = props;
  const [showPassword, setShowPassword] = React.useState(!secureTextEntry);

  return (
    <View style={[styles.inputWrapper, styles[rounded], containerStyle]}>
      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={colors.gray500}
        secureTextEntry={!showPassword}
        {...rest}
      />
      {secureTextEntry ? (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
        </TouchableOpacity>
      ) : rightIcon ? (
        <View>{rightIcon}</View>
      ) : undefined}
    </View>
  );
};

export const styles = StyleSheet.create({
  inputWrapper: {
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray50,
    gap: 2.5,
  },
  full: { borderRadius: 16 },
  top: { borderTopRightRadius: 16, borderTopLeftRadius: 16 },
  bottom: { borderBottomEndRadius: 16, borderBottomStartRadius: 16 },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: fonts.regular,
  },
});
