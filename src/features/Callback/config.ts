import { type TCallbackParams } from '@/features/Form';
import { type TFieldConfig } from '@/features/Form/Field';

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
