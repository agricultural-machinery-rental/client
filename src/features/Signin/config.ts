import { type TSigninParams } from '@/features/Form';
import { type TFieldConfig } from '@/features/Form/Field';

import { validationTypes } from '@/shared/form';

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
