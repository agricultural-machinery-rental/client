import { UseFormRegisterReturn, UseFormSetValue, UseFormWatch } from 'react-hook-form';

export type TReactHookFormInputElement = {
  name?: keyof TFormData;
  register?: UseFormRegisterReturn;
  watch?: UseFormWatch<TFormData>;
  setValue?: UseFormSetValue<TFormData>;
  forceDefaultValue?: unknown;
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
  email_or_phone: string;
  password: string;
};

export type TSignupParams = {
  last_name: string;
  first_name: string;
  phone_number: string;
  email: string;
  password: string;
  passwordRepeat: string;
};

export type TProfileParams = {
  last_name: string;
  first_name: string;
  patronymic: string;
  birthday: string;
  phone_number: string;
  email: string;
  organization_name: string;
  inn: string;
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
  TChangePassword &
  TProfileParams;
