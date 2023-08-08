import { FormFieldNames, validationTypes } from '@/shared/form';

import type { TFieldConfig } from './Field';

export const signupConfig: TFieldConfig[] = [
  {
    kindOfField: 'input',
    name: FormFieldNames.lastName,
    pattern: validationTypes.name,
    required: true,
    type: 'text',
    label: 'Фамилия',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.firstName,
    pattern: validationTypes.name,
    required: true,
    type: 'text',
    label: 'Имя',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.middleName,
    pattern: validationTypes.name,
    required: false,
    type: 'text',
    label: 'Отчество',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.phone,
    pattern: validationTypes.phone,
    required: true,
    type: 'tel',
    label: 'Телефон',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.email,
    pattern: validationTypes.email,
    required: true,
    type: 'email',
    label: 'e-mail',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.password,
    pattern: validationTypes.password,
    required: true,
    type: 'password',
    label: 'Пароль',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.passwordRepeat,
    required: true,
    type: 'password',
    label: 'Повторите пароль',
  },
];

export const profileConfig: TFieldConfig[] = [];

export const bookingConfig: TFieldConfig[] = [
  {
    kindOfField: 'textarea',
    name: FormFieldNames.message,
    required: false,
    label: 'Комментарии',
  },
];

export const callbackConfig: TFieldConfig[] = [
  {
    kindOfField: 'input',
    name: FormFieldNames.firstName,
    pattern: validationTypes.name,
    required: true,
    type: 'text',
    label: 'Имя',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.phone,
    pattern: validationTypes.phone,
    required: true,
    type: 'tel',
    label: 'Телефон',
  },
];
