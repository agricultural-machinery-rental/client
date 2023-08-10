import { FormFieldNames, validationTypes } from '@/shared/form';

import type { TFieldConfig } from './Field';

export const profileConfig: TFieldConfig[] = [];

export const bookingConfig: TFieldConfig[] = [
  {
    kindOfField: 'textarea',
    name: FormFieldNames.message,
    required: false,
    label: 'Комментарии',
  },
];

export const callbackConfig: TFieldConfig[] = [
  {
    kindOfField: 'input',
    name: FormFieldNames.firstName,
    pattern: validationTypes.name,
    required: true,
    type: 'text',
    label: 'Имя',
  },
  {
    kindOfField: 'input',
    name: FormFieldNames.phone,
    pattern: validationTypes.phone,
    required: true,
    type: 'tel',
    label: 'Телефон',
  },
];
