import { ValidationProps } from './';

export enum FormFieldNames {
  lastNname = 'lastNname',
  firstNname = 'firstNname',
  middleNname = 'middleNname',
  login = 'login',
  phone = 'phone',
  email = 'email',
  password = 'password',
  passwordRepeat = 'repeatablePassword',
  message = 'message',
}

export enum ValidationTypes {
  name = 'name',
  login = 'login',
  phone = 'phone',
  email = 'email',
  password = 'password',
}

export enum InputTypes {
  checkbox = 'checkbox',
  email = 'email',
  number = 'number',
  password = 'password',
  tel = 'tel',
  text = 'text',
}

// TODO скорректировать рег.выражения и сообщения об ошибке
export const ValidationPattern: Record<ValidationTypes, ValidationProps> = {
  name: {
    value: /^[A-Z]$/g,
    message: 'Ошибка',
  },
  login: {
    value: /^[A-Z]$/g,
    message: 'Ошибка',
  },
  phone: {
    value: /^[A-Z]$/g,
    message: 'Ошибка',
  },
  email: {
    value: /^[A-Z]$/g,
    message: 'Ошибка',
  },
  password: {
    value: /^[A-Z]$/g,
    message: 'Ошибка',
  },
};
