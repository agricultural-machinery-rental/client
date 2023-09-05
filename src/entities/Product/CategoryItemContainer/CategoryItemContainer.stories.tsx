import { Meta, Story } from '@storybook/react';
import React from 'react';

import { catalogItemCategory } from '@/shared/catalog';

import { type TCategoryItemContainer } from './typing';
import { CategoryItemContainer } from './ui';

export default {
  title: 'Product/CategoryItemContainer',
  component: CategoryItemContainer,
} as Meta;

const Template: Story<TCategoryItemContainer> = args => <CategoryItemContainer {...args} />;

export const CategoryItemContainerDefault = Template.bind({});
CategoryItemContainerDefault.args = {
  title: 'Заголовок',
  category: catalogItemCategory.motor_tractor,
};
