import { StaticImageData } from 'next/image';

export type TCatalogItemCharacteristics = {
  itemWeight?: number;
  bucketVolume?: number;
  diggingDepth?: number;
  trackWidth?: number;
};

export type TCatalogItem = {
  name: string;
  class: TCatalogItemClass;
  photo: StaticImageData;
  prices: {
    perHour?: number;
    perShift?: number;
  };
  characteristics: TCatalogItemCharacteristics;
  itemDimensions?: number[];
};

export type TCatalogItemClass =
  | 'tractor'
  | 'harvester'
  | 'seeding'
  | 'motor_tractor'
  | 'trailer'
  | 'plow'
  | 'loader'
  | 'attachment';

export const CatalogItemClassName: Record<TCatalogItemClass, string> = {
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
