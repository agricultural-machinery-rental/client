import { Meta, Story } from '@storybook/react';
import React from 'react';

import { type TTextarea } from './typing';
import { Textarea } from './ui';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  decorators: [
    Story => (
      <div style={{ width: '500px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<TTextarea> = args => <Textarea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Начните вводить сообщение',
  resize: false,
  label: 'Сообщение',
};
