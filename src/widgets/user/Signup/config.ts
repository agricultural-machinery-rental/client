import { TFieldConfig } from '@/features/Form/Field';

import { validationTypes } from '@/shared/form';

enum signupFieldNames {
  lastName = 'lastName',
  firstName = 'firstName',
  middleName = 'middleName',
  phone = 'phone',
  email = 'email',
  password = 'password',
  passwordRepeat = 'passwordRepeat',
}

export const signupConfig: TFieldConfig<signupFieldNames>[] = [
  {
    kindOfField: 'input',
    name: signupFieldNames.lastName,
    pattern: validationTypes.name,
    required: true,
    type: 'text',
    label: 'Фамилия',
  },
  {
    kindOfField: 'input',
    name: signupFieldNames.firstName,
    pattern: validationTypes.name,
    required: true,
    type: 'text',
    label: 'Имя',
  },
  {
    kindOfField: 'input',
    name: signupFieldNames.middleName,
    pattern: validationTypes.name,
    required: false,
    type: 'text',
    label: 'Отчество',
  },
  {
    kindOfField: 'input',
    name: signupFieldNames.phone,
    pattern: validationTypes.phone,
    required: true,
    type: 'tel',
    label: 'Телефон',
  },
  {
    kindOfField: 'input',
    name: signupFieldNames.email,
    pattern: validationTypes.email,
    required: true,
    type: 'email',
    label: 'e-mail',
  },
  {
    kindOfField: 'passwordInput',
    name: signupFieldNames.password,
    pattern: validationTypes.password,
    required: true,
    type: 'password',
    label: 'Пароль',
  },
  {
    kindOfField: 'passwordInput',
    name: signupFieldNames.passwordRepeat,
    required: true,
    type: 'password',
    label: 'Повторите пароль',
  },
];
