import { UseFormRegisterReturn, UseFormSetValue, UseFormWatch } from 'react-hook-form';

export type TReactHookFormInputElement = {
  name?: string;
  register?: UseFormRegisterReturn;
  watch?: UseFormWatch<Record<string, string>>;
  setValue?: UseFormSetValue<Record<string, string>>;
};

export type TKindOfField = 'input' | 'textarea' | 'checkbox' | 'daterange' | 'passwordInput';

export type TValidation = {
  value: RegExp;
  message: string;
};
