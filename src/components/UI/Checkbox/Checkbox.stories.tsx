import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Checkbox, type TCheckbox } from './index';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<TCheckbox> = args => <Checkbox {...args} />;

export const Unchecked = Template.bind({});
Unchecked.args = {
  text: 'Текст для чекбокса',
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  text: 'Текст для чекбокса',
  checked: true,
};
