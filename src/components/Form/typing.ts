import { ReactNode } from 'react';
import { ValidationTypes, InputTypes, FormFieldNames } from './';

export type TFormProps = {
  title?: string;
  header?: ReactNode;
  footer?: ReactNode;
  fileds: FormConfigType[];
  handleFormSubmit: () => void;
  defaultValues?: Record<string, string>;
};

export type FormConfigType = {
  kindOfField: 'input' | 'textarea';
  name: FormFieldNames;
  pattern?: ValidationTypes;
  required: boolean;
  value?: string;
  type?: InputTypes;
  placeholder?: string;
};

export type ValidationProps = {
  value: RegExp;
  message: string;
};
