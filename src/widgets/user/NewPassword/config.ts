import { TNewPassword } from '@/features/Form';
import { type TFieldConfig } from '@/features/Form/Field';

import { validationTypes } from '@/shared/form';

type TNewPasswordFieldNames = TNewPassword & {
  passwordRepeat: string;
};

export const newPasswordConfig: TFieldConfig<keyof TNewPasswordFieldNames>[] = [
  {
    kindOfField: 'input',
    name: 'token',
    required: true,
    type: 'text',
    label: 'Введите код',
  },
  {
    kindOfField: 'passwordInput',
    name: 'password',
    pattern: validationTypes.password,
    required: true,
    type: 'password',
    label: 'Введите новый пароль',
  },
  {
    kindOfField: 'passwordInput',
    name: 'passwordRepeat',
    pattern: validationTypes.password,
    required: true,
    type: 'password',
    label: 'Повторите пароль',
  },
];
