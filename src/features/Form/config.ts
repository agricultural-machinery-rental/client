import type { TFormConfigType } from './typing';
import { ValidationTypes, FormFieldNames } from './consts';

export const signupConfig: TFormConfigType[] = [
  {
    kindOfField: 'input',
    name: FormFieldNames.lastName,
    pattern: ValidationTypes.name,
    required: true,
    type: 'text',
    label: 'Фамилия',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.firstName,
    pattern: ValidationTypes.name,
    required: true,
    type: 'text',
    label: 'Имя',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.middleName,
    pattern: ValidationTypes.name,
    required: false,
    type: 'text',
    label: 'Отчество',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.phone,
    pattern: ValidationTypes.phone,
    required: true,
    type: 'tel',
    label: 'Телефон',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.email,
    pattern: ValidationTypes.email,
    required: true,
    type: 'email',
    label: 'e-mail',
  },
  {
    kindOfField: 'passwordInput',
    name: FormFieldNames.password,
    pattern: ValidationTypes.password,
    required: true,
    type: 'password',
    label: 'Пароль',
  },
  {
    kindOfField: 'passwordInput',
    name: FormFieldNames.passwordRepeat,
    required: true,
    type: 'password',
    label: 'Повторите пароль',
  },
];

export const profileConfig: TFormConfigType[] = [];

export const bookingConfig: TFormConfigType[] = [
  {
    kindOfField: 'textarea',
    name: FormFieldNames.message,
    required: false,
    label: 'Комментарии',
  },
];

export const callbackConfig: TFormConfigType[] = [
  {
    kindOfField: 'input',
    name: FormFieldNames.firstName,
    pattern: ValidationTypes.name,
    required: true,
    type: 'text',
    label: 'Имя',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.phone,
    pattern: ValidationTypes.phone,
    required: true,
    type: 'tel',
    label: 'Телефон',
  },
];
