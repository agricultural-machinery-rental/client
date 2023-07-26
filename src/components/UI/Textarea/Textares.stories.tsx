import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Textarea, type TTextarea } from './index';

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as Meta;

const Template: Story<TTextarea> = args => <Textarea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Поле для ввода',
  resize: false,
};
