import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ChevronGo } from './ChevronGo';

const ChevronGoMeta: Meta<typeof ChevronGo> = {
  title: 'ChevronGo',
  component: ChevronGo,
  argTypes: {
    borderColor: { control: 'text' },
    backgroundColor: { control: 'text' },
    iconColor: { control: 'text' },
    direction: {
      control: 'select',
      options: ['right', 'left'],
    },
  },
  args: {
    direction: 'right',
    backgroundColor: '#B8BFFF',
    iconColor: '#000',
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

export default ChevronGoMeta;

export const Default: StoryObj<typeof ChevronGo> = {};

export const LeftDirection: StoryObj<typeof ChevronGo> = {
  args: {
    direction: 'left',
    borderColor: '#000',
  },
};
