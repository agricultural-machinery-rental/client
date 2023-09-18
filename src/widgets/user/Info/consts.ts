import { TUserDto } from '@/shared/model/typing';

export const profileLabels: Partial<Record<keyof TUserDto, string>> = {
  last_name: 'Фамилия',
  first_name: 'Имя',
  patronymic: 'Отчество',
  birthday: 'Дата рождения',
  phone_number: 'Телефон',
  email: 'e-mail',
  organization_name: 'Название организации',
  inn: 'ИНН организации',
};

export const nameFields: (keyof typeof profileLabels)[] = ['first_name', 'last_name', 'patronymic'];
export const restFields: (keyof typeof profileLabels)[] = [
  'email',
  'phone_number',
  'organization_name',
  'inn',
  'birthday',
];
