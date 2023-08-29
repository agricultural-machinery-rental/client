import { Meta, Story } from '@storybook/react';
import React from 'react';

import { type TBookingItem } from './typing';
import { BookingItem } from './ui';

export default {
  title: 'Components/BookingItem',
  component: BookingItem,
  decorators: [
    Story => (
      <div style={{ width: '800px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const mockData = {
  name: 'Трактор R-40',
  dates: 'Забронирован с 30.07 по 12.08',
  category: 'Экскаваторы',
  comment: 'Обл. Ростовская, район Зерноградский, поселок Донской. Аренда с экипажем.',
};

const Template: Story<TBookingItem> = args => <BookingItem {...args} />;

export const BookingItemDefault = Template.bind({});
BookingItemDefault.args = {
  name: mockData.name,
  dates: mockData.dates,
  category: mockData.category,
  comment: mockData.comment,
};
