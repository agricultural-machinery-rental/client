import { TUserDto } from '@/shared/model/typing';

export type TSigninRequestData = {
  email_or_phone: string;
  password: string;
};

export type TSignupRequestData = {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  password: string;
};

export type TUserResponseData = TUserDto & {
  role: string;
};

export type TSigninResponseData = {
  refresh: string;
  access: string;
};

export type TSignupResponseData = TUserDto;

export type TRefreshTokenResponseData = {
  access: string;
};
