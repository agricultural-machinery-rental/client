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
    kindOfField: 'input',
    name: FormFieldNames.lastNname,
    pattern: ValidationTypes.name,
    required: true,
    type: InputTypes.text,
    placeholder: 'Фамилия',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.firstNname,
    pattern: ValidationTypes.name,
    required: true,
    type: InputTypes.text,
    placeholder: 'Имя',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.middleNname,
    pattern: ValidationTypes.name,
    required: false,
    type: InputTypes.text,
    placeholder: 'Отчество',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.phone,
    pattern: ValidationTypes.phone,
    required: true,
    type: InputTypes.tel,
    placeholder: 'Телефон',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.email,
    pattern: ValidationTypes.email,
    required: true,
    type: InputTypes.email,
    placeholder: 'e-mail',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.password,
    pattern: ValidationTypes.password,
    required: true,
    type: InputTypes.password,
    placeholder: 'Пароль',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.passwordRepeat,
    required: true,
    type: InputTypes.password,
    placeholder: 'Повторите пароль',
  },
];

export const profileConfig: FormConfigType[] = [];

export const bookingConfig: FormConfigType[] = [
  {
    kindOfField: 'textarea',
    name: FormFieldNames.message,
    required: false,
    placeholder: 'Пароль',
  },
];

export const callbackConfig: FormConfigType[] = [
  {
    kindOfField: 'input',
    name: FormFieldNames.firstNname,
    pattern: ValidationTypes.name,
    required: true,
    type: InputTypes.text,
    placeholder: 'Имя',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.phone,
    pattern: ValidationTypes.phone,
    required: true,
    type: InputTypes.tel,
    placeholder: 'Телефон',
  },
];
