export type TUser = {
  lastName: string;
  firstName: string;
  middleName: string;
  birthday?: string;
  phone: string;
  email: string;
  companyName?: string;
  companyTIN?: string;
};

export const mockUser: TUser = {
  lastName: 'Юркина',
  firstName: 'Ольга',
  middleName: 'Владимировна',
  birthday: undefined,
  phone: '+7 928 123 56 78',
  email: 'Mozart-fan@yandex.ru',
  companyName: undefined,
  companyTIN: undefined,
};
