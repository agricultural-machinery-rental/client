import { type TFieldConfig } from '@/entities/Form';

import { validationTypes, type TSignupParams } from '@/shared/form';

type TSignupFieldNames = TSignupParams & {
  passwordRepeat: string;
};

export const signupConfig: TFieldConfig<keyof TSignupFieldNames>[] = [
  {
    kindOfField: 'input',
    name: 'last_name',
    pattern: validationTypes.name,
    required: true,
    type: 'text',
    label: 'Фамилия',
  },
  {
    kindOfField: 'input',
    name: 'first_name',
    pattern: validationTypes.name,
    required: true,
    type: 'text',
    label: 'Имя',
  },
  {
    kindOfField: 'input',
    name: 'phone_number',
    pattern: validationTypes.phone,
    required: true,
    type: 'tel',
    label: 'Телефон',
  },
  {
    kindOfField: 'input',
    name: 'email',
    pattern: validationTypes.email,
    required: true,
    type: 'email',
    label: 'e-mail',
  },
  {
    kindOfField: 'passwordInput',
    name: 'password',
    pattern: validationTypes.password,
    required: true,
    type: 'password',
    label: 'Пароль',
  },
  {
    kindOfField: 'passwordInput',
    name: 'passwordRepeat',
    required: true,
    type: 'password',
    label: 'Повторите пароль',
  },
];
