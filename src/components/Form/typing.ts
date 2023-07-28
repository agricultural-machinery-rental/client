import { ReactNode, HTMLInputTypeAttribute } from 'react';
import { ValidationTypes, FormFieldNames } from './';

export type TFormProps = {
  header?: ReactNode;
  footer?: ReactNode;
  fileds: TFormConfigType[];
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

export type TFormConfigType = {
  kindOfField: 'input' | 'textarea';
  name: FormFieldNames;
  pattern?: ValidationTypes;
  required: boolean;
  value?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  asterisk?: 'visible' | 'hidden';
};

export type TValidationProps = {
  value: RegExp;
  message: string;
};
