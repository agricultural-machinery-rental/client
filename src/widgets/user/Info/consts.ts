enum profileFieldNames {
  lastName = 'lastName',
  firstName = 'firstName',
  middleName = 'middleName',
  birthday = 'birthday',
  phone = 'phone',
  email = 'email',
  companyName = 'companyName',
  companyTIN = 'companyTIN',
}

export const profileLabels: Record<string, string> = {
  [profileFieldNames.firstName]: 'Имя',
  [profileFieldNames.lastName]: 'Фамилия',
  [profileFieldNames.middleName]: 'Отчество',
  [profileFieldNames.birthday]: 'Дата рождения',
  [profileFieldNames.phone]: 'Телефон',
  [profileFieldNames.email]: 'e-mail',
  [profileFieldNames.companyName]: 'Название организации',
  [profileFieldNames.companyTIN]: 'ИНН организации',
};

export const nameFields: string[] = [
  profileFieldNames.firstName,
  profileFieldNames.lastName,
  profileFieldNames.middleName,
];
