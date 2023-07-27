import { InputHTMLAttributes } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { ValidationTypes, FormFieldNames } from '@/components/Form';

export type TInputProps = {
  name: FormFieldNames;
  errorMessage?: string;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  pattern?: ValidationTypes;
} & InputHTMLAttributes<HTMLInputElement>;
