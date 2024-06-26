import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '@/constants/colors';
import { ThemedText } from '@/components/ThemedText';
import ChevronIcon from '@/assets/svgs/chevron-down.svg';
import { fonts } from '@/constants/fonts';

export const Select = ({
  onPress,
  value,
  placeholder = '',
  error,
}: {
  placeholder?: string;
  value: string;
  onPress?(): void;
  error?: { message: string };
}) => {
  return (
    <View style={{ marginBottom: 8 }}>
      <TouchableOpacity style={[styles.inputWrapper]} onPress={onPress}>
        <View style={styles.input}>
          <ThemedText style={[styles.valueInput, placeholder ? {color: colors.gray500}: undefined]}>{value || placeholder}</ThemedText>
        </View>
        <ChevronIcon />
      </TouchableOpacity>
      {error && (
        <ThemedText style={{ color: colors.red500 }}>
          {error.message}
        </ThemedText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.gray50,
    gap: 2.5,
  },
  input: {
    flex: 1,
  },
  valueInput: {
    fontSize: 16,
    fontFamily: fonts.regular,
    paddingVertical: 2,
  },
});
