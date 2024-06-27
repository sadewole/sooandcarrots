import { StyleSheet, View } from 'react-native';
import React from 'react';
import ChevronIcon from '@/assets/svgs/chevron.svg';
import { colors } from '@/constants/colors';

export type ChevronGoProps = {
  borderColor?: string;
  backgroundColor?: string;
  iconColor?: string;
  direction?: 'right' | 'left';
};

export const ChevronGo = ({
  borderColor = colors.white,
  backgroundColor,
  iconColor = colors.white,
  direction = 'right',
}: ChevronGoProps) => {
  return (
    <View style={[styles.iconWrapper, { borderColor, backgroundColor }]}>
      <ChevronIcon
        color={iconColor}
        style={direction === 'left' && {transform: [{ rotate: '180deg' }]}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 999,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
