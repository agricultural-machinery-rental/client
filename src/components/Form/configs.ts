import { type TFormConfigType, ValidationTypes, FormFieldNames } from './';

export const signinConfig: TFormConfigType[] = [
  {
    kindOfField: 'input',
    name: FormFieldNames.login,
    pattern: ValidationTypes.login,
    required: true,
    type: 'text',
    label: 'Логин или номер телефона',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.password,
    pattern: ValidationTypes.password,
    required: true,
    type: 'password',
    label: 'Пароль',
  },
];

export const signupConfig: TFormConfigType[] = [
  {
    kindOfField: 'input',
    name: FormFieldNames.lastName,
    pattern: ValidationTypes.name,
    required: true,
    type: 'text',
    label: 'Фамилия',
    asterisk: 'visible',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.firstName,
    pattern: ValidationTypes.name,
    required: true,
    type: 'text',
    label: 'Имя',
    asterisk: 'visible',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.middleName,
    pattern: ValidationTypes.name,
    required: false,
    type: 'text',
    label: 'Отчество',
    asterisk: 'hidden',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.phone,
    pattern: ValidationTypes.phone,
    required: true,
    type: 'tel',
    label: 'Телефон',
    asterisk: 'visible',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.email,
    pattern: ValidationTypes.email,
    required: true,
    type: 'email',
    label: 'e-mail',
    asterisk: 'visible',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.password,
    pattern: ValidationTypes.password,
    required: true,
    type: 'password',
    label: 'Пароль',
    asterisk: 'visible',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.passwordRepeat,
    required: true,
    type: 'password',
    label: 'Повторите пароль',
    asterisk: 'visible',
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
