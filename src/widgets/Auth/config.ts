import { type TFieldConfig } from '@/features/Form/Field';

import { FormFieldNames, validationTypes } from '@/shared/form';

export const signinConfig: TFieldConfig[] = [
  {
    kindOfField: 'input',
    name: FormFieldNames.login,
    pattern: validationTypes.login,
    required: true,
    type: 'text',
    label: 'Почта или номер телефона',
  },
  {
    kindOfField: 'passwordInput',
    name: FormFieldNames.password,
    pattern: validationTypes.password,
    required: true,
    type: 'password',
    label: 'Пароль',
  },
];
