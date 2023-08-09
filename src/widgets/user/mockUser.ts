import { profileFieldNames } from './InfoEdit/config';

export type UserType = {
  [profileFieldNames.lastName]: string;
  [profileFieldNames.firstName]: string;
  [profileFieldNames.middleName]: string;
  [profileFieldNames.birthday]?: string;
  [profileFieldNames.phone]: string;
  [profileFieldNames.email]: string;
  [profileFieldNames.companyName]?: string;
  [profileFieldNames.companyTIN]?: string;
};

export const mockUser: UserType = {
  lastName: 'Юркина',
  firstName: 'Ольга',
  middleName: 'Владимировна',
  birthday: undefined,
  phone: '+7 928 123 56 78',
  email: 'Mozart-fan@yandex.ru',
  companyName: undefined,
  companyTIN: undefined,
};
