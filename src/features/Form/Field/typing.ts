import { HTMLInputTypeAttribute } from 'react';

import {
  FormFieldNames,
  TKindOfField,
  TReactHookFormInputElement,
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

export type TFieldConfig = {
  kindOfField: TKindOfField;
  name: FormFieldNames;
  pattern?: validationTypes;
  required: boolean;
  value?: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
};
