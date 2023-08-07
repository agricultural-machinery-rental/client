import { UseFormRegisterReturn, UseFormSetValue, UseFormWatch } from 'react-hook-form';

import { FormFieldNames } from './constants';

export type TReactHookFormInputElement = {
  name?: FormFieldNames;
  register?: UseFormRegisterReturn<FormFieldNames>;
  watch?: UseFormWatch<Record<string, string>>;
  setValue?: UseFormSetValue<Record<string, string>>;
};

export type TKindOfField = 'input' | 'textarea' | 'checkbox' | 'daterange';

export type TValidation = {
  value: RegExp;
  message: string;
};
