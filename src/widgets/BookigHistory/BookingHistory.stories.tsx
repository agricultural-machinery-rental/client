import { Meta, Story } from '@storybook/react';
import React from 'react';

import { BookingHistory } from './ui';

export default {
  title: 'Profile/BookingHistory',
  component: BookingHistory,
} as Meta;

const Template: Story = () => <BookingHistory />;

export const BookingHistoryDefault = Template.bind({});
