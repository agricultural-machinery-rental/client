import { InputHTMLAttributes } from 'react';
import { UseFormWatch, UseFormRegisterReturn } from 'react-hook-form';

export type TInputProps = {
  name: string;
  register: UseFormRegisterReturn;
  label?: string;
  watch: UseFormWatch<Record<string, string>>;
} & InputHTMLAttributes<HTMLInputElement>;

export type TLabelProps = {
  $inputValue: boolean;
};
