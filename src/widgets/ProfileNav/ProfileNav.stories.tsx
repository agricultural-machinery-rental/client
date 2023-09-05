import { Meta, Story } from '@storybook/react';
import React from 'react';

import { type TProfileNav } from './typing';
import { ProfileNav } from './ui';

const mockLinks = [
  {
    text: 'Мой профиль',
    href: '',
  },
  {
    text: 'Текущие заявки',
    href: '',
  },
];

export default {
  title: 'Profile/ProfileNav',
  component: ProfileNav,
} as Meta;

const Template: Story<TProfileNav> = args => <ProfileNav {...args} />;

export const ProfileNavDefault = Template.bind({});
ProfileNavDefault.args = {
  links: mockLinks,
};
