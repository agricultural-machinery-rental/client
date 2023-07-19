import React from 'react';
import { Story, Meta } from '@storybook/react';
import Button, { TButton } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<TButton> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Кнопка-кнопка',
};
