import { ReactNode, HTMLInputTypeAttribute } from 'react';
import { UseFormWatch, UseFormRegisterReturn, UseFormSetValue } from 'react-hook-form';
import { ValidationTypes, FormFieldNames } from './consts';

export type TFormProps = {
  footer?: ReactNode;
  fileds: TFormConfigType[];
  handleFormSubmit: () => void;
  defaultValues?: Record<string, string>;
  asterisk?: boolean;
};

export type TRhfProps = {
  register: UseFormRegisterReturn<FormFieldNames>;
  watch: UseFormWatch<Record<string, string>>;
  setValue: UseFormSetValue<Record<string, string>>;
};

export type TFieldProps = {
  asterisk?: boolean;
  errorMessage?: string;
} & TFormConfigType &
  TRhfProps;

export type TAsterisk = {
  visibility?: 'visible' | 'hidden';
};

export type TKindOfField = 'input' | 'textarea' | 'checkbox' | 'daterange';

export type TFormConfigType = {
  kindOfField: TKindOfField;
  name: FormFieldNames;
  pattern?: ValidationTypes;
  required: boolean;
  value?: string;
  type?: HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
};

export type TValidationProps = {
  value: RegExp;
  message: string;
};
