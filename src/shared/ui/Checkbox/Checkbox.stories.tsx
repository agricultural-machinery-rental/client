import { Meta, Story } from '@storybook/react';
import React from 'react';

import { type TCheckbox } from './typing';
import { Checkbox } from './ui';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<TCheckbox> = args => <Checkbox {...args} />;

export const Unchecked = Template.bind({});
Unchecked.args = {
  label: 'Текст для чекбокса',
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Текст для чекбокса',
  checked: true,
};
