import { HTMLInputTypeAttribute } from 'react';

import {
  type TKindOfField,
  type TReactHookFormInputElement,
  type TFormData,
  validationTypes,
} from '@/shared/form';

export type TAsterisk = {
  visibility?: 'visible' | 'hidden';
};

export type TField = {
  asterisk?: boolean;
  errorMessage?: string;
} & TReactHookFormInputElement &
  TFieldConfig;

export type TFieldConfig<T = keyof TFormData> = {
  kindOfField: TKindOfField;
  name: T;
  pattern?: validationTypes;
  required: boolean;
  value?: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
};
