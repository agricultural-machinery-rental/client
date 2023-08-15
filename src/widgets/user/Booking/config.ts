import { type TFieldConfig } from '@/features/Form/Field';

import { FormFieldNames, validationTypes } from '@/shared/form';

export const bookingConfig: TFieldConfig[] = [
  {
    kindOfField: 'daterange',
    name: FormFieldNames.daterange,
    required: true,
  },
  {
    kindOfField: 'textarea',
    name: FormFieldNames.message,
    required: false,
    pattern: validationTypes.comment,
    placeholder: 'Пожалуйста, укажите другую\nдополнительную информацию: город и т.д.',
  },
];
