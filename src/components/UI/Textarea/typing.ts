import { HTMLAttributes } from 'react';
import { UseFormWatch, UseFormRegisterReturn } from 'react-hook-form';
import { ValidationTypes, FormFieldNames } from '@/components/Form';

export type TTextarea = {
  name: FormFieldNames;
  resize?: boolean;
  register: UseFormRegisterReturn<FormFieldNames>;
  required: boolean;
  pattern?: ValidationTypes;
  label?: string;
  watch: UseFormWatch<Record<string, string>>;
} & HTMLAttributes<HTMLTextAreaElement>;

export type TTextareaStyled = {
  $resize?: boolean;
};

export type TLabelProps = {
  $textareaValue: boolean;
};
