import { type TFieldConfig } from '@/features/Form/Field';

import { validationTypes } from '@/shared/form';

export enum callbackFieldNames {
  phone = 'phone',
  note = 'note',
}

export const callbackConfig: TFieldConfig[] = [
  {
    kindOfField: 'input',
    name: callbackFieldNames.phone,
    pattern: validationTypes.phone,
    required: true,
    type: 'phone',
    label: 'Телефон',
  },
  {
    kindOfField: 'textarea',
    name: callbackFieldNames.note,
    required: false,
    label: 'Комментарий',
  },
];
