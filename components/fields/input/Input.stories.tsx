import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Input } from './Input';

const InputMeta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  argTypes: {
    onPress: { action: 'pressed' },
    rightIcon: { control: 'text' },
    containerStyle: { control: 'object' },
    rightIconStyle: { control: 'object' },
    value: { control: 'text' },
    rounded: {
      control: 'select',
      options: ['full', 'top', 'bottom'],
    },
  },
  args: {
    rounded: 'full',
    value: 'search data...',
  },
  decorators: [
    (Story) => (
      <View
        style={{ justifyContent: 'center', flex: 1, paddingHorizontal: 20 }}
      >
        <Story />
      </View>
    ),
  ],
};

export default InputMeta;

export const Default: StoryObj<typeof Input> = {};

export const PasswordInput: StoryObj<typeof Input> = {
  args: {
    value: 'password',
    secureTextEntry: true,
  },
};
