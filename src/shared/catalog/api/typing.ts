import { StaticImageData } from 'next/image';

export type TCatalogItemCharacteristics = {
  yearOfManufacture?: number;
  mileage?: number;
  powerHp?: number;
  payloadCapacity?: number;
  location?: string;
  countryOfOrigin?: string;
  deliveryDistance?: number;
  attachmentsAvailable?: boolean;
  workType?: string;
};

export type TCatalogItemAdditionalCharacteristics = {
  countryOfOrigin?: string;
  deliveryDistance?: number;
  attachmentsAvailable?: boolean;
  workType?: string;
};

export type TCatalogItem = {
  id: number;
  brand: string;
  name: string;
  description: string;
  category: keyof typeof catalogItemCategory;
  photo: StaticImageData;
  prices: {
    perHour?: number;
    perShift?: number;
  };
  characteristics: TCatalogItemCharacteristics;
  additionalCharacteristics: TCatalogItemAdditionalCharacteristics;
};

export const catalogItemCategory = {
  tractor: 1,
  harvester: 2,
  seeding: 3,
  motor_tractor: 4,
  trailer: 5,
  plow: 6,
  loader: 7,
  attachment: 8,
};

export const CatalogItemCategoryName: Record<keyof typeof catalogItemCategory, string> = {
  // null: 'Вся техника',
  tractor: 'Тракторы',
  harvester: 'Комбайны',
  seeding: 'Посевная техника',
  motor_tractor: 'Мототракторы',
  trailer: 'Прицепы',
  plow: 'Плуги',
  loader: 'Погрузчики',
  attachment: 'Навесное оборудование',
};
