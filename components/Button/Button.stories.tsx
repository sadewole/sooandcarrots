import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import LoginIcon from '@/assets/svgs/login.svg';
import { ChevronGo } from '@/components/chevronGo/ChevronGo';

const ButtonMeta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed' },
    title: { control: 'text' },
    disabled: { control: 'boolean' },
    titleStyle: { control: 'object' },
    buttonStyle: { control: 'object' },
    iconLeft: { control: 'object' },
    iconRight: { control: 'object' },
  },
  args: {
    title: 'Click here',
  },
  decorators: [
    (Story) => (
      <View style={{ justifyContent: 'center', flex: 1 }}>
        <Story />
        <Story
          args={{
            iconLeft: <LoginIcon />,
            iconRight: <ChevronGo />,
            title: 'Hello World',
            buttonStyle: { marginTop: 10 },
          }}
        />
      </View>
    ),
  ],
};

export default ButtonMeta;

export const Basic: StoryObj<typeof Button> = {};

export const Disabled: StoryObj<typeof Button> = {
  args: {
    title: 'Disabled',
    disabled: true,
    buttonStyle: {
      backgroundColor: 'red',
    },
  },
};
