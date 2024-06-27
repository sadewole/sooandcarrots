import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Select } from './Select';

const SelectMeta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
  argTypes: {
    onPress: { action: 'pressed' },
    placeholder: { action: 'text' },
  },
  args: {
    placeholder: 'Select options',
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

export default SelectMeta;

export const Default: StoryObj<typeof Select> = {};

export const WithValue: StoryObj<typeof Select> = {
  args: {
    value: 'new label 3',
  },
};
