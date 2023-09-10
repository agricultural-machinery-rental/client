import { type TFieldConfig } from '@/entities/Form';

import { type TProfileParams, validationTypes } from '@/shared/form';

export const profileConfig: TFieldConfig<keyof TProfileParams>[] = [
  {
    kindOfField: 'input',
    name: 'last_name',
    pattern: validationTypes.name,
    required: true,
    type: 'text',
    label: 'Фамилия',
  },
  {
    kindOfField: 'input',
    name: 'first_name',
    pattern: validationTypes.name,
    required: true,
    type: 'text',
    label: 'Имя',
  },
  {
    kindOfField: 'input',
    name: 'patronymic',
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
    name: 'phone_number',
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
    name: 'organization_name',
    required: false,
    type: 'text',
    label: 'Название организации',
  },
  {
    kindOfField: 'input',
    name: 'inn',
    required: false,
    type: 'text',
    label: 'ИНН организации',
  },
];
