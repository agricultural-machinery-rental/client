import { ReactNode } from 'react';
import { FieldValues } from 'react-hook-form';

import { type TFormData } from '@/shared/form';

import { TFieldConfig } from './Field';

export type TForm = {
  footer?: ReactNode;
  fields: TFieldConfig[];
  handleFormSubmit: (data: TFormData) => void;
  defaultValues?: FieldValues;
  asterisk?: boolean;
};
