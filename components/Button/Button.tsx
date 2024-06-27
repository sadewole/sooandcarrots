import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
  View,
} from 'react-native';
import { colors } from '@/constants/colors';
import { ThemedText } from '../ThemedText';

export type ButtonProps = {
  onPress?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
};

export const Button = ({
  onPress,
  disabled,
  title,
  children,
  buttonStyle,
  titleStyle,
  iconLeft,
  iconRight,
}: ButtonProps) => {
  const hasChildren = React.Children.count(children) > 0;
  const hasIcon = Boolean(iconLeft || iconRight);

  return (
    <TouchableOpacity
      style={[styles.container, buttonStyle, disabled && {opacity: 0.5}]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <View style={styles.contentContainer}>
        {iconLeft && <View style={{ marginLeft: 16 }}>{iconLeft}</View>}
        {hasChildren ? (
          children
        ) : (
          <ThemedText
            type='defaultBold'
            style={[
              styles.text,
              !hasIcon && { textAlign: 'center' },
              titleStyle,
            ]}
          >
            {title}
          </ThemedText>
        )}
        {iconRight && <View>{iconRight}</View>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.paleBlue,
    borderRadius: 100,
    height: 52,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 4,
  },
});
