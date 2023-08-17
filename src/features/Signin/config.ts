import { type TFieldConfig } from '@/entities/Form';

import { validationTypes, type TSigninParams } from '@/shared/form';

export const signinConfig: TFieldConfig<keyof TSigninParams>[] = [
  {
    kindOfField: 'input',
    name: 'login',
    pattern: validationTypes.phoneOrEmail,
    required: true,
    type: 'text',
    label: 'Почта или номер телефона',
  },
  {
    kindOfField: 'passwordInput',
    name: 'password',
    pattern: validationTypes.password,
    required: true,
    type: 'password',
    label: 'Пароль',
  },
];
