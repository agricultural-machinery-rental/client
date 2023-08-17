import { JSX } from 'react';

import harvester_1 from './assets/harvester_1.jpg';
import tractor_2 from './assets/tractor_2.png';
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

// Temporary preview item
export const temporatyItemData: TCatalogItem[] = [
  {
    name: 'Комбайн Марка Модель',
    class: 'harvester',
    photo: harvester_1,
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
  },
  {
    name: 'Гусеничный трактор Марка Модель 1',
    class: 'tractor',
    photo: tractor_2,
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
  },
  {
    name: 'Гусеничный трактор Марка Модель 2',
    class: 'tractor',
    photo: tractor_2,
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
  },
  {
    name: 'Посевная техника Марка Модель',
    class: 'seeding',
    photo: harvester_1,
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
  },
  {
    name: 'Мототрактор Марка Модель',
    class: 'motor_tractor',
    photo: tractor_2,
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
  },
  {
    name: 'Прицеп Марка Модель',
    class: 'trailer',
    photo: tractor_2,
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
  },
  {
    name: 'Плуг Марка Модель',
    class: 'plow',
    photo: tractor_2,
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
  },
  {
    name: 'Погрузчик Марка Модель',
    class: 'loader',
    photo: tractor_2,
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
  },
  {
    name: 'Навесное оборудование Марка Модель',
    class: 'attachment',
    photo: tractor_2,
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
  },
];
