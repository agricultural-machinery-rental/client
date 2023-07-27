import { ReactNode } from 'react';
import { ValidationTypes, InputTypes, FormFieldNames } from './';

export type TFormProps = {
  header?: ReactNode;
  footer?: ReactNode;
  fileds: FormConfigType[];
  handleFormSubmit: () => void;
  defaultValues?: Record<string, string>;
  classNames: {
    fieldset?: string;
    field?: string;
    error?: string;
  };
};

export type TAsterisk = {
  visibility?: 'visible' | 'hidden';
};

export type FormConfigType = {
  kindOfField: 'input' | 'textarea';
  name: FormFieldNames;
  pattern?: ValidationTypes;
  required: boolean;
  value?: string;
  type?: InputTypes;
  placeholder?: string;
  asterisk?: 'visible' | 'hidden';
};

export type ValidationProps = {
  value: RegExp;
  message: string;
};
