import { Meta, Story } from '@storybook/react';
import React from 'react';

import { type TButton } from './typing';
import { Button } from './ui';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<TButton> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Кнопка-кнопка',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Кнопка-кнопка',
};
