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
    category: 'harvester',
    photo: harvester_1,
    prices: {
      perHour: 2500,
      get perShift(): number {
        return this.perHour! * 8;
      },
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
    category: 'tractor',
    photo: tractor_2,
    prices: {
      perHour: 1800,
      get perShift(): number {
        return this.perHour! * 8;
      },
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
    category: 'tractor',
    photo: tractor_2,
    prices: {
      perHour: 2000,
      get perShift(): number {
        return this.perHour! * 8;
      },
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
    category: 'seeding',
    photo: harvester_1,
    prices: {
      perHour: 2400,
      get perShift(): number {
        return this.perHour! * 8;
      },
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
    category: 'motor_tractor',
    photo: tractor_2,
    prices: {
      perHour: 500,
      get perShift(): number {
        return this.perHour! * 8;
      },
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
    category: 'trailer',
    photo: tractor_2,
    prices: {
      perHour: 400,
      get perShift(): number {
        return this.perHour! * 8;
      },
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
    category: 'plow',
    photo: tractor_2,
    prices: {
      perHour: 800,
      get perShift(): number {
        return this.perHour! * 8;
      },
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
    category: 'loader',
    photo: tractor_2,
    prices: {
      perHour: 1600,
      get perShift(): number {
        return this.perHour! * 8;
      },
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
    category: 'attachment',
    photo: tractor_2,
    prices: {
      perHour: 1800,
      get perShift(): number {
        return this.perHour! * 8;
      },
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
