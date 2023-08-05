import { InputHTMLAttributes } from 'react';

import { type TReactHookFormInputElement } from '@/shared/form';

export type TDateRange = {
  required?: boolean;
} & TReactHookFormInputElement &
  InputHTMLAttributes<HTMLInputElement>;
