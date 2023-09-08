import { Meta, Story } from '@storybook/react';
import React from 'react';

import { HeaderNavItems } from './constants';
import { type TNav } from './typing';
import { Nav } from './ui';

export default {
  title: 'Header/Nav',
  component: Nav,
} as Meta;

const Template: Story<TNav> = args => <Nav {...args} />;

export const NavDefault = Template.bind({});
NavDefault.args = {
  navItems: HeaderNavItems,
  curPathName: HeaderNavItems[0].link,
};
