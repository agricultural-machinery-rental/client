import type { TValidationProps } from './typing';

export enum FormFieldNames {
  lastName = 'lastName',
  firstName = 'firstName',
  middleName = 'middleName',
  login = 'login',
  phone = 'phone',
  email = 'email',
  password = 'password',
  passwordRepeat = 'repeatablePassword',
  message = 'message',
  checkbox = 'checkbox',
}

export enum ValidationTypes {
  name = 'name',
  login = 'login',
  phone = 'phone',
  email = 'email',
  password = 'password',
}

// TODO скорректировать рег.выражения и сообщения об ошибке
export const ValidationPattern: Record<ValidationTypes, TValidationProps> = {
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