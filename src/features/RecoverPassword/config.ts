import { type TRecoverPasswordParams, type TFieldConfig } from '@/entities/Form';

import { validationTypes } from '@/shared/form';

export const passwordResetConfig: TFieldConfig<keyof TRecoverPasswordParams>[] = [
  {
    kindOfField: 'input',
    name: 'email',
    pattern: validationTypes.email,
    required: true,
    type: 'email',
    label: 'Введите e-mail',
  },
];
