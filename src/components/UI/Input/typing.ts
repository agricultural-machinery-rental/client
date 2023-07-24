import { FC, InputHTMLAttributes } from 'react';
//import { UseFormRegister } from 'react-hook-form';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  //register: UseFormRegister<DataType>;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}
