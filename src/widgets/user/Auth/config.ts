import { type TFieldConfig } from '@/features/Form/Field';

import { validationTypes } from '@/shared/form';

export enum authFieldNames {
  login = 'login',
  password = 'password',
}

export const signinConfig: TFieldConfig[] = [
  {
    kindOfField: 'input',
    name: authFieldNames.login,
    pattern: validationTypes.phoneOrEmail,
    required: true,
    type: 'text',
    label: 'Почта или номер телефона',
  },
  {
    kindOfField: 'passwordInput',
    name: authFieldNames.password,
    pattern: validationTypes.password,
    required: true,
    type: 'password',
    label: 'Пароль',
  },
];
