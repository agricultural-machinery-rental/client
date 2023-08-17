import { Meta, Story } from '@storybook/react';
import React from 'react';

import { type TDateRange } from './typing';
import { DateRange } from './ui';

export default {
  title: 'Components/DateRange',
  component: DateRange,
} as Meta;

const Template: Story<TDateRange> = args => <DateRange {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'daterange',
};
