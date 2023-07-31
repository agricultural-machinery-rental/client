import { InputHTMLAttributes } from 'react';
import { UseFormWatch, UseFormRegisterReturn } from 'react-hook-form';
import { ValidationTypes, FormFieldNames } from '@/components/Form';

export type TInputProps = {
  name: FormFieldNames;
  register: UseFormRegisterReturn<FormFieldNames>;
  required: boolean;
  pattern?: ValidationTypes;
  label?: string;
  watch: UseFormWatch<Record<string, string>>;
} & InputHTMLAttributes<HTMLInputElement>;

export type TLabelProps = {
  $inputValue: boolean;
};
