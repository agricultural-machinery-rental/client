import { HTMLAttributes } from 'react';

export type TCheckbox = {
  name: string;
  label: string;
  required?: boolean;
  register?: (...args: unknown[]) => object;
  validationSchema?: object;
  errors?: object;
} & HTMLAttributes<HTMLInputElement>;
