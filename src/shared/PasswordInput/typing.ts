import { InputHTMLAttributes } from 'react';
import { UseFormWatch, UseFormRegisterReturn } from 'react-hook-form';

export type TPasswordInput = {
  name: string;
  register: UseFormRegisterReturn;
  label?: string;
  watch: UseFormWatch<Record<string, string>>;
} & InputHTMLAttributes<HTMLInputElement>;
