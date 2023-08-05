import { TextareaHTMLAttributes } from 'react';
import { UseFormWatch, UseFormRegisterReturn } from 'react-hook-form';

export type TTextarea = {
  name: string;
  resize?: boolean;
  register: UseFormRegisterReturn;
  label?: string;
  watch: UseFormWatch<Record<string, string>>;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export type TTextareaStyled = {
  $resize?: boolean;
};

export type TLabelProps = {
  $textareaValue: boolean;
};
