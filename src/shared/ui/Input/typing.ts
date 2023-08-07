import { InputHTMLAttributes } from 'react';

import { type TReactHookFormInputElement } from '@/shared/form';

export type TInput = {
  label?: string;
} & TReactHookFormInputElement &
  InputHTMLAttributes<HTMLInputElement>;

export type TLabel = {
  $inputValue: boolean;
};
