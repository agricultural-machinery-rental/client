import { Story } from '@storybook/react';

import { TError } from './typing';
import { Error } from './ui';

export default {
  title: 'Components/Error',
  component: Error,
};

const Template: Story<TError> = args => <Error {...args} />;
export const ErrorDefault = Template.bind({});
ErrorDefault.args = {
  errorMessage: 'Ошибка',
};
