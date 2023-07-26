import { type FormConfigType, ValidationTypes, InputTypes, FormFieldNames } from './';

export const signinConfig: FormConfigType[] = [
  {
    kindOfField: 'input',
    name: FormFieldNames.login,
    pattern: ValidationTypes.login,
    required: true,
    type: InputTypes.text,
    placeholder: 'Логин или номер телефона',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.password,
    pattern: ValidationTypes.password,
    required: true,
    type: InputTypes.password,
    placeholder: 'Пароль',
  },
];

export const signupConfig: FormConfigType[] = [
  {
    kindOfField: 'textarea',
    name: FormFieldNames.message,
    required: false,
    placeholder: 'Пароль',
  },
];

export const profileConfig: FormConfigType[] = [];

export const bookingConfig: FormConfigType[] = [];

export const callbackConfig: FormConfigType[] = [];
