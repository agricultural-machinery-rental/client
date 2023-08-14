import { type TFieldConfig } from '@/features/Form/Field';

import { validationTypes } from '@/shared/form';

export enum passwordResetFieldNames {
  email = 'email',
}

export const passwordResetConfig: TFieldConfig<passwordResetFieldNames>[] = [
  {
    kindOfField: 'input',
    name: passwordResetFieldNames.email,
    pattern: validationTypes.email,
    required: true,
    type: 'email',
    label: 'Введите e-mail',
  },
];
