import { TFieldConfig } from '@/entities/Form';

import { validationTypes, type TChangePassword } from '@/shared/form';

export const changePasswordConfig: TFieldConfig<keyof TChangePassword>[] = [
  {
    kindOfField: 'passwordInput',
    name: 'oldPassword',
    pattern: validationTypes.password,
    required: true,
    type: 'password',
    label: 'Старый пароль',
  },
  {
    kindOfField: 'passwordInput',
    name: 'newPassword',
    pattern: validationTypes.password,
    required: true,
    type: 'password',
    label: 'Новый пароль',
  },
  {
    kindOfField: 'passwordInput',
    name: 'passwordRepeat',
    pattern: validationTypes.password,
    required: true,
    type: 'password',
    label: 'Подтвердите новый пароль',
  },
];
