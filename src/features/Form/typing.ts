import { ReactNode } from 'react';

import { TFieldConfig } from './Field';

export type TForm = {
  footer?: ReactNode;
  fileds: TFieldConfig[];
  handleFormSubmit: () => void;
  defaultValues?: Record<string, string>;
  asterisk?: boolean;
};
