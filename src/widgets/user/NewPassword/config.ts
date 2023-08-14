import { type TFieldConfig } from '@/features/Form/Field';

import { validationTypes } from '@/shared/form';

export enum newPasswordFieldNames {
  code = 'code',
  password = 'password',
  passwordRepeat = 'passwordRepeat',
}

export const newPasswordConfig: TFieldConfig[] = [
  {
    kindOfField: 'input',
    name: newPasswordFieldNames.code,
    required: true,
    type: 'text',
    label: 'Введите код',
  },
  {
    kindOfField: 'passwordInput',
    name: newPasswordFieldNames.password,
    pattern: validationTypes.password,
    required: true,
    type: 'password',
    label: 'Введите новый пароль',
  },
  {
    kindOfField: 'passwordInput',
    name: newPasswordFieldNames.passwordRepeat,
    pattern: validationTypes.password,
    required: true,
    type: 'password',
    label: 'Повторите пароль',
  },
];
