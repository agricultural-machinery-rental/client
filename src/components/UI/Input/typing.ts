import { FC, InputHTMLAttributes } from 'react';
//import { UseFormRegister } from 'react-hook-form';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  isError?: boolean;
  errorMessage?: string;
  required?: boolean;
  placeholder?: string;
}
