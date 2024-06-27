import { fonts } from '@/constants/fonts';
import { useMemo } from 'react';
import {
  Text,
  type TextProps,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';

export type ThemedTextProps = TextProps & {
  type?:
    | 'default'
    | 'title'
    | 'defaultBold'
    | 'subtitle'
    | 'titleExtra'
    | 'defaultSubtitle';
};

export function ThemedText({
  style,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const combinedStyle: StyleProp<TextStyle> = useMemo(() => {
    return StyleSheet.flatten([styles[type], style]);
  }, [style, type]);
  return <Text style={combinedStyle} {...rest} />;
}

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    lineHeight: 14,
    fontFamily: fonts.regular,
  },
  defaultBold: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '700',
    fontFamily: fonts.bold,
  },
  titleExtra: {
    fontSize: 36,
    fontWeight: '800',
    lineHeight: 45,
    fontFamily: fonts.extrabold,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 30,
    fontFamily: fonts.extrabold,
  },
  defaultSubtitle: {
    fontSize: 18,
    lineHeight: 27,
    fontFamily: fonts.regular,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 27,
    fontFamily: fonts.bold,
  },
});
