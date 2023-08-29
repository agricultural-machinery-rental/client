import { Meta, Story } from '@storybook/react';
import React from 'react';

import { type TField } from './typing';
import { Field } from './ui';

export default {
  title: 'Form/Field',
  component: Field,
} as Meta;

const Template: Story<TField> = args => <Field {...args} />;

export const FieldInput = Template.bind({});
FieldInput.args = {
  name: 'firstName',
  asterisk: true,
  errorMessage: '',
  kindOfField: 'input',
  required: true,
  label: 'Имя',
  placeholder: '',
  type: 'text',
};

export const FieldPasswordInput = Template.bind({});
FieldPasswordInput.args = {
  name: 'password',
  asterisk: true,
  errorMessage: '',
  kindOfField: 'passwordInput',
  required: true,
  label: 'Пароль',
  placeholder: '',
  type: 'password',
};

export const FieldTextarea = Template.bind({});
FieldTextarea.args = {
  name: 'comment',
  asterisk: false,
  errorMessage: '',
  kindOfField: 'textarea',
  required: false,
  label: 'Сообщение',
  placeholder: '',
  type: 'text',
};

export const FieldCheckbox = Template.bind({});
FieldCheckbox.args = {
  asterisk: true,
  errorMessage: '',
  kindOfField: 'checkbox',
  required: true,
  label: 'Согласен/на на обработку данных',
  type: 'text',
};

export const FieldDaterange = Template.bind({});
FieldDaterange.args = {
  name: 'daterange',
  asterisk: true,
  errorMessage: '',
  kindOfField: 'daterange',
  required: true,
};
