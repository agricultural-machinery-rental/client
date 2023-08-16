import { HTMLInputTypeAttribute } from 'react';

import { TKindOfField, TReactHookFormInputElement, validationTypes } from '@/shared/form';

export type TAsterisk = {
  visibility?: 'visible' | 'hidden';
};

export type TField = {
  asterisk?: boolean;
  errorMessage?: string;
} & TReactHookFormInputElement &
  TFieldConfig;

export type TFieldConfig<T = string> = {
  kindOfField: TKindOfField;
  name: T;
  pattern?: validationTypes;
  required: boolean;
  value?: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
};
