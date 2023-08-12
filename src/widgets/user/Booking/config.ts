import { type TFieldConfig } from '@/features/Form/Field';

import { FormFieldNames } from '@/shared/form';

export const bookingConfig: TFieldConfig[] = [
  {
    kindOfField: 'daterange',
    name: FormFieldNames.daterange,
    required: false,
    label: 'Комментарии',
  },
  {
    kindOfField: 'textarea',
    name: FormFieldNames.message,
    required: true,
    type: 'text',
    label: 'Пожалуйста, укажите другую\nдополнительную информацию: город, ..."-',
  },
];
