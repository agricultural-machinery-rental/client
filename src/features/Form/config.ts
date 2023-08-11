import { FormFieldNames } from '@/shared/form';

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
