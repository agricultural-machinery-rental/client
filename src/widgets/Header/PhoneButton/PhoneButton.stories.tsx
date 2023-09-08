import { Story } from '@storybook/react';
import React from 'react';

import { PhoneButton } from './PhoneButton';
import type { TPhoneButton } from './typing';

export default {
  title: 'Header/PhoneButton',
  component: PhoneButton,
};

const Template: Story<TPhoneButton> = args => <PhoneButton {...args} />;

export const PhoneButtonDefault = Template.bind({});
