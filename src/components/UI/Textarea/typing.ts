import { TextareaHTMLAttributes } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { ValidationTypes, FormFieldNames } from '@/components/Form';

export type TTextarea = {
  name: FormFieldNames;
  resize?: boolean;
  register: UseFormRegister<FieldValues>;
  required: boolean;
  pattern?: ValidationTypes;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export type TTextareaStyled = {
  $resize?: boolean;
};
