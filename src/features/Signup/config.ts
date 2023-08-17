import { type TFieldConfig } from '@/entities/Form';

import { validationTypes, type TSignupParams } from '@/shared/form';

type TSignupFieldNames = TSignupParams & {
  passwordRepeat: string;
};

export const signupConfig: TFieldConfig<keyof TSignupFieldNames>[] = [
  {
    kindOfField: 'input',
    name: 'lastName',
    pattern: validationTypes.name,
    required: true,
    type: 'text',
    label: 'Фамилия',
  },
  {
    kindOfField: 'input',
    name: 'firstName',
    pattern: validationTypes.name,
    required: true,
    type: 'text',
    label: 'Имя',
  },
  {
    kindOfField: 'input',
    name: 'middleName',
    pattern: validationTypes.name,
    required: false,
    type: 'text',
    label: 'Отчество',
  },
  {
    kindOfField: 'input',
    name: 'phone',
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
