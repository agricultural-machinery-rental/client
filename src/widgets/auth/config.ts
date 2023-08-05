import { TFormConfigType, ValidationTypes } from '@/features/Form';

export enum AuthFeildNames {
  login = 'login',
  password = 'password',
}

export const signinConfig: TFormConfigType[] = [
  {
    kindOfField: 'input',
    name: AuthFeildNames.login,
    pattern: ValidationTypes.login,
    required: true,
    type: 'text',
    label: 'Логин или номер телефона',
  },
  {
    kindOfField: 'input',
    name: AuthFeildNames.password,
    pattern: ValidationTypes.password,
    required: true,
    type: 'password',
    label: 'Пароль',
  },
];
