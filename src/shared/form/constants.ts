import { TValidation } from './typing';

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
  daterange = 'daterange',
}

export enum validationTypes {
  name = 'name',
  loginOrEmail = 'loginOrEmail',
  login = 'login',
  phone = 'phone',
  email = 'email',
  password = 'password',
}

// TODO скорректировать рег.выражения и сообщения об ошибке
export const validationPattern: Record<validationTypes, TValidation> = {
  name: {
    /* Строка состоит из кириллических букв
     * Содержит минимум 2 символа
     */
    value: /^[А-ЯЁё]{2,}$/,
    message: 'Ошибка name',
  },
  loginOrEmail: {
    /* Проверяет, что строка состоит из латинских букв, цифр и символов -_@.
     * Затем проверяет, что в строке нет @
     * ИЛИ (если есть @), то после собачки есть символы, точка и снова символы
     */
    value: /^(?=[A-Za-z0-9-_@.]{7,25}$)((?=^[^@.]+$)|(?=^.+@.+[.][A-Za-z]+$))/,
    message: 'Ошибка loginOrEmail',
  },
  login: {
    /* Строка состоит из латинских букв, цифр, дефиса и подчёркивания
     * Содержит от 7 до 25 символов
     */
    value: /^[A-Za-z0-9-_]{7,25}$/,
    message: 'Ошибка login',
  },
  phone: {
    /* Начинается с плюса
     * Далее проверяет, чтобы строка содержала 11 цифр (не обязательно подряд)
     * Далее проверяет, что срока состоит из цифр, скобок, дефиса и пробелов
     */
    value: /^\+(?=(?:\D*\d){11})[\d()\-\s]+$/,
    message: 'Ошибка phone',
  },
  email: {
    /* Вся длина строки от 7 до 25 символов
     * Начинается с латинских букв, цифр и символов ._%+-
     * Затем @
     * Затем латинские буквы и цифры
     * Затем точка
     * В конце латинские буквы
     */
    value: /^(?=^.{7,25}$)([A-Za-z\d._%+-]+)@([A-Za-z\d.-]+)\.([A-Za-z.-]+)$/,
    message: 'Ошибка email',
  },
  password: {
    value: /^[A-Z]$/g,
    message: 'Ошибка password',
  },
};
