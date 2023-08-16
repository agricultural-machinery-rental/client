import { type TBookingFormParams } from '@/features/Form';
import { type TFieldConfig } from '@/features/Form/Field';

import { validationTypes } from '@/shared/form';

export const bookingConfig: TFieldConfig<keyof TBookingFormParams>[] = [
  {
    kindOfField: 'daterange',
    name: 'daterange',
    required: true,
  },
  {
    kindOfField: 'textarea',
    name: 'message',
    required: false,
    pattern: validationTypes.comment,
    placeholder: 'Пожалуйста, укажите другую\nдополнительную информацию: город и т.д.',
  },
];
