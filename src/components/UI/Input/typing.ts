import { InputHTMLAttributes } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { ValidationTypes } from '@/components/Form';

export type TInputProps = {
  name: string;
  errorMessage?: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  pattern?: ValidationTypes;
} & InputHTMLAttributes<HTMLInputElement>;
