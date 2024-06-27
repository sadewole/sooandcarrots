import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ThemedText } from './ThemedText';

const ThemedTextMeta: Meta<typeof ThemedText> = {
  title: 'ThemedText',
  component: ThemedText,
  argTypes: {
    style: { control: 'object' },
    children: { control: 'text' },
    type: {
      control: 'radio',
      options: [
        'default',
        'title',
        'defaultBold',
        'subtitle',
        'titleExtra',
        'defaultSubtitle',
      ],
    },
  },
  args: {
    type: 'default',
    children: 'New Relic',
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

export default ThemedTextMeta;

export const Default: StoryObj<typeof ThemedText> = {};

export const LargeText: StoryObj<typeof ThemedText> = {
  args: {
    type: 'titleExtra',
    children: 'Expecting something big',
  },
};
