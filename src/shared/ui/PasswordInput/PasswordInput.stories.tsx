import { Story, Meta } from '@storybook/react';
import React from 'react';

import { type TPasswordInput } from './typing';
import { PasswordInput } from './ui';

export default {
  title: 'Components/PasswordInput',
  component: PasswordInput,
  decorators: [
    Story => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<TPasswordInput> = args => <PasswordInput {...args} />;

export const PasswordInputDefault = Template.bind({});
PasswordInputDefault.args = {
  name: 'password',
  label: 'Пароль',
};
