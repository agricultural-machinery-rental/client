import { type TRecoverPasswordParams } from '@/features/Form';
import { type TFieldConfig } from '@/features/Form/Field';

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
