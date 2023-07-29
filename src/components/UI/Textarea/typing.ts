import { HTMLAttributes } from 'react';

export type TTextarea = {
  name: string;
  resize?: boolean;
  required?: boolean;
  register?: (...args: unknown[]) => object;
} & HTMLAttributes<HTMLTextAreaElement>;

export type TTextareaStyled = {
  $resize?: boolean;
};
