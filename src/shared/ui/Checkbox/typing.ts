import { InputHTMLAttributes } from 'react';

import { type TReactHookFormInputElement } from '@/shared/form';

export type TCheckbox = {
  label?: string;
} & TReactHookFormInputElement &
  InputHTMLAttributes<HTMLInputElement>;
