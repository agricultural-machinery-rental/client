import { TFieldConfig } from '@/entities/Form';

import { validationTypes } from '@/shared/form';

enum settingsFieldNames {
  oldPassword = 'oldPassword',
  newPassword = 'newPassword',
  passwordRepeat = 'passwordRepeat',
}

export const changePasswordConfig: TFieldConfig<settingsFieldNames>[] = [
  {
    kindOfField: 'passwordInput',
    name: settingsFieldNames.oldPassword,
    pattern: validationTypes.password,
    required: true,
    type: 'password',
    label: 'Старый пароль',
  },
  {
    kindOfField: 'passwordInput',
    name: settingsFieldNames.newPassword,
    pattern: validationTypes.password,
    required: true,
    type: 'password',
    label: 'Новый пароль',
  },
  {
    kindOfField: 'passwordInput',
    name: settingsFieldNames.passwordRepeat,
    pattern: validationTypes.password,
    required: true,
    type: 'password',
    label: 'Подтвердите новый пароль',
  },
];
