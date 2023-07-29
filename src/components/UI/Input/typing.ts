import { InputHTMLAttributes } from 'react';
import { UseFormRegister, FieldValues, UseFormWatch } from 'react-hook-form';
import { ValidationTypes, FormFieldNames, TValidationProps } from '@/components/Form';

export type TInputProps = {
  name: FormFieldNames;
  register: UseFormRegister<FieldValues>;
  registerOptions: {
    pattern?: TValidationProps | undefined;
    required?: string | undefined;
  };
  required: boolean;
  pattern?: ValidationTypes;
  label?: string;
  watch: UseFormWatch<Record<string, string>>;
} & InputHTMLAttributes<HTMLInputElement>;
