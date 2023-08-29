import { UseFormRegisterReturn, UseFormSetValue, UseFormWatch } from 'react-hook-form';

export type TReactHookFormInputElement = {
  name?: keyof TFormData;
  register?: UseFormRegisterReturn;
  watch?: UseFormWatch<TFormData>;
  setValue?: UseFormSetValue<TFormData>;
};

export type TKindOfField = 'input' | 'textarea' | 'checkbox' | 'daterange' | 'passwordInput';

export type TValidation = {
  value: RegExp;
  message: string;
};

export type TBookingFormParams = {
  daterange: Date[];
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
  birthday?: string;
  companyName?: string;
  companyTIN?: string;
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

export type TChangePassword = {
  oldPassword: string;
  newPassword: string;
  passwordRepeat: string;
};

export type TFormData = TBookingFormParams &
  TSigninParams &
  TSignupParams &
  TRecoverPasswordParams &
  TNewPassword &
  TCallbackParams &
  TChangePassword;
