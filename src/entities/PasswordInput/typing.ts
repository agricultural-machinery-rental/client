import { InputHTMLAttributes } from 'react';

import { TReactHookFormInputElement } from '@/shared/form';

export type TPasswordInput = { label?: string } & TReactHookFormInputElement &
  InputHTMLAttributes<HTMLInputElement>;
