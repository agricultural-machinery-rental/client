import { TextareaHTMLAttributes } from 'react';
import { UseFormRegister, FieldValues, UseFormWatch } from 'react-hook-form';
import { ValidationTypes, FormFieldNames, TValidationProps } from '@/components/Form';

export type TTextarea = {
  name: FormFieldNames;
  resize?: boolean;
  register: UseFormRegister<FieldValues>;
  registerOptions: {
    pattern?: TValidationProps | undefined;
    required?: string | undefined;
  };
  required: boolean;
  pattern?: ValidationTypes;
  label?: string;
  watch: UseFormWatch<Record<string, string>>;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export type TTextareaStyled = {
  $resize?: boolean;
};
