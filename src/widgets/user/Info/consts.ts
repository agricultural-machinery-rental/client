import { type TUser } from '@/shared/api/mockUser';

export const profileLabels: Record<keyof TUser, string> = {
  lastName: 'Фамилия',
  firstName: 'Имя',
  middleName: 'Отчество',
  birthday: 'Дата рождения',
  phone: 'Телефон',
  email: 'e-mail',
  companyName: 'Название организации',
  companyTIN: 'ИНН организации',
};

export const nameFields: (keyof TUser)[] = ['firstName', 'lastName', 'middleName'];
