import { StaticImageData } from 'next/image';

export type TCatalogItemCharacteristics = {
  itemWeight?: number;
  bucketVolume?: number;
  diggingDepth?: number;
  trackWidth?: number;
};

export type TCatalogItem = {
  name: string;
  category: keyof typeof catalogItemCategory;
  photo: StaticImageData;
  prices: {
    perHour?: number;
    perShift?: number;
  };
  characteristics: TCatalogItemCharacteristics;
  itemDimensions?: number[];
};

export enum catalogItemCategory {
  'tractor',
  'harvester',
  'seeding',
  'motor_tractor',
  'trailer',
  'plow',
  'loader',
  'attachment',
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
