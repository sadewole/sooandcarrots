import { fonts } from '@/constants/fonts';
import { Text, type TextProps, StyleSheet } from 'react-native';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultBold' | 'subtitle' | 'titleExtra';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  return (
    <Text
      style={[
        type === 'default' ? styles.default : undefined,
        type === 'titleExtra' ? styles.titleExtra : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultBold' ? styles.defaultBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 14,
    lineHeight: 14,
    fontFamily: fonts.regular
  },
  defaultBold: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '700',
    fontFamily: fonts.bold
  },
  titleExtra: {
    fontSize: 36,
    fontWeight: '800',
    lineHeight: 45,
    fontFamily: fonts.extrabold
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 30,
    fontFamily: fonts.extrabold
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 27,
    fontFamily: fonts.bold
  },
});
