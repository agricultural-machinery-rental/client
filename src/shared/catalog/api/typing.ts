import { StaticImageData } from 'next/image';

export type TCatalogItemCharacteristics = {
  itemWeight?: number;
  bucketVolume?: number;
  diggingDepth?: number;
  trackWidth?: number;
};

export type TCatalogItem = {
  name: string;
  photo: StaticImageData;
  prices: {
    perHour?: number;
    perShift?: number;
  };
  characteristics: TCatalogItemCharacteristics;
  itemDimensions?: number[];
};
