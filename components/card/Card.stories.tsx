import { View } from 'react-native';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';
import { ThemedText } from '../themedText/ThemedText';

const CardMeta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
  argTypes: { style: { control: 'object' } },
  decorators: [
    (Story) => (
      <View style={{ flex: 1 }}>
        {[1, 2].map((item) => (
          <View key={item} style={{ alignItems: 'center' }}>
            <Story
              args={{
                style: {
                  width: 200,
                  height: 200,
                  backgroundColor: 'green',
                  marginBottom: 20,
                },
                children: <ThemedText>{item}</ThemedText>,
              }}
            />
          </View>
        ))}
      </View>
    ),
  ],
};

export default CardMeta;

export const Default: StoryObj<typeof Card> = {};
