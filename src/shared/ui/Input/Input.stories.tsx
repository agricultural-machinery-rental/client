import { Story, Meta } from '@storybook/react';
import React from 'react';

import { type TInput } from './typing';
import { Input } from './ui';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    type: {
      options: ['text', 'email', 'tel', 'number'],
      control: { type: 'select' },
    },
  },
  decorators: [
    Story => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<TInput> = args => <Input {...args} />;

export const InputDefault = Template.bind({});
InputDefault.args = {
  name: 'first_name',
  label: 'Имя',
  type: 'text',
  disabled: false,
  placeholder: '',
};
