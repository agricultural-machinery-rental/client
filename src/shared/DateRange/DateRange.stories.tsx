import { FormFieldNames } from '@/features/Form';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { DateRange, type TDateRange } from './';

export default {
  title: 'Components/DateRange',
  component: DateRange,
} as Meta;

const Template: Story<TDateRange> = args => <DateRange {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: FormFieldNames.daterange,
};
