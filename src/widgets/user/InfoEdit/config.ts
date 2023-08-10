import { TFieldConfig } from '@/features/Form/Field';

import { validationTypes } from '@/shared/form';

import { TUser } from '../mockUser';

export const profileConfig: TFieldConfig<keyof TUser>[] = [
  {
    kindOfField: 'input',
    name: 'lastName',
    pattern: validationTypes.name,
    required: true,
    type: 'text',
    label: 'Фамилия',
  },
  {
    kindOfField: 'input',
    name: 'firstName',
    pattern: validationTypes.name,
    required: true,
    type: 'text',
    label: 'Имя',
  },
  {
    kindOfField: 'input',
    name: 'middleName',
    pattern: validationTypes.name,
    required: false,
    type: 'text',
    label: 'Отчество',
  },
  {
    kindOfField: 'input', // TODO заменить на компонент календаря с выбором даты
    name: 'birthday',
    required: false,
    type: 'text',
    label: 'День рождения',
  },
  {
    kindOfField: 'input',
    name: 'phone',
    pattern: validationTypes.phone,
    required: true,
    type: 'tel',
    label: 'Телефон',
  },
  {
    kindOfField: 'input',
    name: 'email',
    pattern: validationTypes.email,
    required: true,
    type: 'email',
    label: 'e-mail',
  },
  {
    kindOfField: 'input',
    name: 'companyName',
    required: false,
    type: 'text',
    label: 'Название организации',
  },
  {
    kindOfField: 'input',
    name: 'companyTIN',
    required: false,
    type: 'text',
    label: 'ИНН организации',
  },
];
