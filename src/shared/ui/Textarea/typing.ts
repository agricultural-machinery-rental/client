import { TextareaHTMLAttributes } from 'react';

import { type TReactHookFormInputElement } from '@/shared/form';

export type TTextarea = {
  resize?: boolean;
  label?: string;
} & TReactHookFormInputElement &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export type TTextareaStyledComponent = {
  $resize?: boolean;
};

export type TLabel = {
  $textareaValue: boolean;
};
