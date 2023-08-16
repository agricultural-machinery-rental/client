import { type TCallbackParams, type TFieldConfig } from '@/entities/Form';

import { validationTypes } from '@/shared/form';

export const callbackConfig: TFieldConfig<keyof TCallbackParams>[] = [
  {
    kindOfField: 'input',
    name: 'phone',
    pattern: validationTypes.phone,
    required: true,
    type: 'phone',
    label: 'Телефон',
  },
  {
    kindOfField: 'textarea',
    name: 'comment',
    required: false,
    label: 'Комментарий',
  },
];
