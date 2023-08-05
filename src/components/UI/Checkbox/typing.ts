import { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn, UseFormWatch } from 'react-hook-form';

export type TCheckbox = {
  name: string;
  register: UseFormRegisterReturn;
  watch: UseFormWatch<Record<string, string>>;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;
