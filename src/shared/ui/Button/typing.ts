import { ButtonHTMLAttributes } from 'react';

import { type TReactHookFormInputElement } from '@/shared/form';

export type TButton = {
  label?: string;
} & TReactHookFormInputElement &
  ButtonHTMLAttributes<HTMLButtonElement>;
