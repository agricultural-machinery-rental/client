import { TextareaHTMLAttributes } from 'react';
import { UseFormWatch, UseFormRegisterReturn } from 'react-hook-form';
import { FormFieldNames } from '@/components/Form';

export type TTextarea = {
  name: FormFieldNames;
  resize?: boolean;
  register: UseFormRegisterReturn<FormFieldNames>;
  label?: string;
  watch: UseFormWatch<Record<string, string>>;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export type TTextareaStyled = {
  $resize?: boolean;
};

export type TLabelProps = {
  $textareaValue: boolean;
};
