import { type TFormConfigType, ValidationTypes, FormFieldNames } from './';

export const signinConfig: TFormConfigType[] = [
  {
    kindOfField: 'input',
    name: FormFieldNames.login,
    pattern: ValidationTypes.login,
    required: true,
    type: 'text',
    placeholder: 'Логин или номер телефона',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.password,
    pattern: ValidationTypes.password,
    required: true,
    type: 'password',
    placeholder: 'Пароль',
  },
];

export const signupConfig: TFormConfigType[] = [
  {
    kindOfField: 'input',
    name: FormFieldNames.lastNname,
    pattern: ValidationTypes.name,
    required: true,
    type: 'text',
    placeholder: 'Фамилия',
    asterisk: 'visible',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.firstNname,
    pattern: ValidationTypes.name,
    required: true,
    type: 'text',
    placeholder: 'Имя',
    asterisk: 'visible',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.middleNname,
    pattern: ValidationTypes.name,
    required: false,
    type: 'text',
    placeholder: 'Отчество',
    asterisk: 'hidden',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.phone,
    pattern: ValidationTypes.phone,
    required: true,
    type: 'tel',
    placeholder: 'Телефон',
    asterisk: 'visible',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.email,
    pattern: ValidationTypes.email,
    required: true,
    type: 'email',
    placeholder: 'e-mail',
    asterisk: 'visible',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.password,
    pattern: ValidationTypes.password,
    required: true,
    type: 'password',
    placeholder: 'Пароль',
    asterisk: 'visible',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.passwordRepeat,
    required: true,
    type: 'password',
    placeholder: 'Повторите пароль',
    asterisk: 'visible',
  },
];

export const profileConfig: TFormConfigType[] = [];

export const bookingConfig: TFormConfigType[] = [
  {
    kindOfField: 'textarea',
    name: FormFieldNames.message,
    required: false,
    placeholder: 'Пароль',
  },
];

export const callbackConfig: TFormConfigType[] = [
  {
    kindOfField: 'input',
    name: FormFieldNames.firstNname,
    pattern: ValidationTypes.name,
    required: true,
    type: 'text',
    placeholder: 'Имя',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.phone,
    pattern: ValidationTypes.phone,
    required: true,
    type: 'tel',
    placeholder: 'Телефон',
  },
];
