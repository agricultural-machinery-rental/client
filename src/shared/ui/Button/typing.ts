import { ButtonHTMLAttributes } from 'react';

export type TButton = {
  label?: string;
  $designType?: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;
