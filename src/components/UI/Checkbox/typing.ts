import { FormFieldNames, ValidationTypes } from '@/components/Form';
import { HTMLAttributes } from 'react';
import { UseFormRegisterReturn, UseFormWatch } from 'react-hook-form';

export type TCheckbox = {
  name: FormFieldNames;
  register: UseFormRegisterReturn<FormFieldNames>;
  required: boolean;
  pattern?: ValidationTypes;
  watch: UseFormWatch<Record<string, string>>;
  label?: string;
} & HTMLAttributes<HTMLInputElement>;
