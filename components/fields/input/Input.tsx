import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { colors } from '@/constants/colors';
import { ThemedText } from '@/components/ThemedText';
import { fonts } from '@/constants/fonts';

type InputProps = TextInputProps & {
  rightIcon?: React.ReactNode;
  containerStyle?: ViewStyle;
  rightIconStyle?: ViewStyle;
  errorMessage?: string;
};

export const Input = (props: InputProps) => {
  const {
    rightIcon,
    style,
    containerStyle,
    rightIconStyle,
    errorMessage,
    ...rest
  } = props;

  return (
    <View style={[{ marginBottom: 8 }, style]}>
      <View style={[textFieldStyles.inputWrapper, containerStyle]}>
        <TextInput
          style={[textFieldStyles.input, style]}
          placeholderTextColor={colors.gray500}
          {...rest}
        />
        {rightIcon && <View>{rightIcon}</View>}
      </View>

      {errorMessage && errorMessage && (
        <ThemedText style={{ color: colors.red500 }}>
          {errorMessage as string}
        </ThemedText>
      )}
    </View>
  );
};

export const textFieldStyles = StyleSheet.create({
  inputWrapper: {
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray50,
    gap: 2.5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: fonts.regular,
  },
});
