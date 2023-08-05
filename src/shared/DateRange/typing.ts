import { FormFieldNames, ValidationTypes } from '@/features/Form';
import { UseFormRegisterReturn, UseFormWatch, UseFormSetValue } from 'react-hook-form';
import { InputHTMLAttributes } from 'react';

export type TDateRange = {
  name: FormFieldNames;
  register?: UseFormRegisterReturn<FormFieldNames>;
  pattern?: ValidationTypes;
  watch?: UseFormWatch<Record<string, string>>;
  setValue?: UseFormSetValue<Record<string, string>>;
  required?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
