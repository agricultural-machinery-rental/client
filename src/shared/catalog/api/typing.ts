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

export enum catalogItemCategory {
  tractor = 'tractor',
  harvester = 'harvester',
  seeding = 'seeding',
  motor_tractor = 'motor_tractor',
  trailer = 'trailer',
  plow = 'plow',
  loader = 'loader',
  attachment = 'attachment',
}

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
