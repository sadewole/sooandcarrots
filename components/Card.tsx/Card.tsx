import { StyleSheet, View } from 'react-native';
import React from 'react';

export const Card = (props: View['props']) => {
  const { style, ...rest } = props;
  return <View style={[styles.card, style]} {...rest} />;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
});
