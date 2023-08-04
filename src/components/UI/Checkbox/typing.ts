import { FormFieldNames, ValidationTypes } from '@/components/Form';
import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn, UseFormWatch } from 'react-hook-form';

export type TCheckbox = {
  name: FormFieldNames;
  register: UseFormRegisterReturn<FormFieldNames>;
  pattern?: ValidationTypes;
  watch: UseFormWatch<Record<string, string>>;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;
