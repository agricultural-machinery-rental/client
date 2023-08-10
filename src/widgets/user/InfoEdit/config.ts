import { TFieldConfig } from '@/features/Form/Field';

import { validationTypes } from '@/shared/form';

export enum profileFieldNames {
  lastName = 'lastName',
  firstName = 'firstName',
  middleName = 'middleName',
  birthday = 'birthday',
  phone = 'phone',
  email = 'email',
  companyName = 'companyName',
  companyTIN = 'companyTIN',
}

export const profileConfig: TFieldConfig[] = [
  {
    kindOfField: 'input',
    name: profileFieldNames.lastName,
    pattern: validationTypes.name,
    required: true,
    type: 'text',
    label: 'Фамилия',
  },
  {
    kindOfField: 'input',
    name: profileFieldNames.firstName,
    pattern: validationTypes.name,
    required: true,
    type: 'text',
    label: 'Имя',
  },
  {
    kindOfField: 'input',
    name: profileFieldNames.middleName,
    pattern: validationTypes.name,
    required: false,
    type: 'text',
    label: 'Отчество',
  },
  {
    kindOfField: 'input', // TODO заменить на компонент календаря с выбором даты
    name: profileFieldNames.birthday,
    required: false,
    type: 'text',
    label: 'День рождения',
  },
  {
    kindOfField: 'input',
    name: profileFieldNames.phone,
    pattern: validationTypes.phone,
    required: true,
    type: 'tel',
    label: 'Телефон',
  },
  {
    kindOfField: 'input',
    name: profileFieldNames.email,
    pattern: validationTypes.email,
    required: true,
    type: 'email',
    label: 'e-mail',
  },
  {
    kindOfField: 'input',
    name: profileFieldNames.companyName,
    required: false,
    type: 'text',
    label: 'Название организации',
  },
  {
    kindOfField: 'input',
    name: profileFieldNames.companyTIN,
    required: false,
    type: 'text',
    label: 'ИНН организации',
  },
];
