import { JSX } from 'react';

import photo from './assets/photo.jpg';
import { TCatalogItem, TCatalogItemCharacteristics } from './typing';

type TUnits = {
  label: string;
  unit?: JSX.Element;
};

export const catalogItemCharacteristicsUnits: Record<keyof TCatalogItemCharacteristics, TUnits> = {
  itemWeight: { label: 'Общая масса', unit: <>кг</> },
  bucketVolume: {
    label: 'Объём ковша',
    unit: (
      <>
        м<sup>3</sup>
      </>
    ),
  },
  diggingDepth: { label: 'Глубина копания', unit: <>мм</> },
  trackWidth: { label: 'Ширина гусеницы', unit: <>мм</> },
};

export const itemData: TCatalogItem = {
  name: 'Гусеничный трактор Марка Модель',
  photo,
  prices: {
    perHour: 1600,
    perShift: 12800,
  },
  characteristics: {
    itemWeight: 7800,
    bucketVolume: 0.3,
    diggingDepth: 4150,
    trackWidth: 450,
  },
  itemDimensions: [6080, 2260, 2640],
};
