import { ReactNode } from 'react';
import { FieldValues } from 'react-hook-form';

import { TFieldConfig } from './Field';

export type TForm = {
  footer?: ReactNode;
  fields: TFieldConfig[];
  handleFormSubmit: (data: TFormData) => void;
  defaultValues?: FieldValues;
  asterisk?: boolean;
};

export type TBookingFormParams = {
  daterange: number[];
  message: string;
};

export type TSigninParams = {
  login: string;
  password: string;
};

export type TSignupParams = {
  lastName: string;
  firstName: string;
  middleName: string;
  phone: string;
  email: string;
  password: string;
  passwordRepeat: string;
};

export type TRecoverPasswordParams = {
  email: string;
};

export type TNewPassword = {
  token: string;
  password: string;
};

export type TCallbackParams = {
  phone: string;
  comment: string;
};

export type TFormData = TBookingFormParams &
  TSigninParams &
  TSignupParams &
  TRecoverPasswordParams &
  TCallbackParams;
