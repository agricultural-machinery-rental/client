import { JSX } from 'react';

import harvester_1 from './assets/harvester_1.jpg';
import { TCatalogItem, TCatalogItemCharacteristics } from './typing';

type TUnits = {
  label: string;
  unit?: JSX.Element;
};

export const catalogItemCharacteristicsUnits: Record<keyof TCatalogItemCharacteristics, TUnits> = {
  yearOfManufacture: { label: 'Год выпуска', unit: <>г</> }, //year_of_manufacture
  mileage: { label: 'Пробег', unit: <>км</> }, //mileage
  powerHp: { label: 'Мощность', unit: <>лс</> }, //power_hp
  payloadCapacity: { label: 'Грузоподъемность', unit: <>кг</> }, //payload_capacity_kg
  location: { label: 'Местоположение' }, //location.title
  countryOfOrigin: { label: 'Страна производства' }, // machinery.mark.country_of_origin
  deliveryDistance: { label: 'Радиус доставки', unit: <>км</> }, // delivery_distance_km
  attachmentsAvailable: { label: 'Навесное оборудование' }, // attachments_available
  workType: { label: 'Виды работ' }, // work_type
};

// Temporary preview item
export const temporatyItem: TCatalogItem = {
  id: 1,
  brand: 'John Deere', // machinery.mark.brand
  name: '8370R', // machinery.name
  // machinery.description
  description:
    'Высокопроизводительный комбайн, подходящий для крупномасштабной уборки урожая. Оснащен передовой технологией эффективной обработки',
  category: 'harvester',
  photo: harvester_1,
  prices: {
    perHour: 2500, // price_per_hour
    get perShift(): number {
      // price_per_shift
      return this.perHour! * 8;
    },
  },
  characteristics: {
    yearOfManufacture: 2018,
    mileage: 500,
    powerHp: 450,
    payloadCapacity: 9000,
    location: 'Тула',
  },
  additionalCharacteristics: {
    countryOfOrigin: 'Россия',
    deliveryDistance: 10,
    attachmentsAvailable: true,
    workType: 'Посев',
  },
};

export const temporatyItemData: TCatalogItem[] = [
  {
    id: 1,
    brand: 'John Deere', // machinery.mark.brand
    name: '8370R', // machinery.name
    // machinery.description
    description:
      'Высокопроизводительный комбайн, подходящий для крупномасштабной уборки урожая. Оснащен передовой технологией эффективной обработки',
    category: 'harvester',
    photo: harvester_1,
    prices: {
      perHour: 2500, // price_per_hour
      get perShift(): number {
        // price_per_shift
        return this.perHour! * 8;
      },
    },
    characteristics: {
      yearOfManufacture: 2018,
      mileage: 500,
      powerHp: 450,
      payloadCapacity: 9000,
      location: 'Тула',
    },
    additionalCharacteristics: {
      countryOfOrigin: 'Россия',
      deliveryDistance: 10,
      attachmentsAvailable: true,
      workType: 'посев',
    },
  },
  {
    id: 1,
    brand: 'John Deere', // machinery.mark.brand
    name: '8370R', // machinery.name
    // machinery.description
    description:
      'Высокопроизводительный комбайн, подходящий для крупномасштабной уборки урожая. Оснащен передовой технологией эффективной обработки',
    category: 'harvester',
    photo: harvester_1,
    prices: {
      perHour: 2500, // price_per_hour
      get perShift(): number {
        // price_per_shift
        return this.perHour! * 8;
      },
    },
    characteristics: {
      yearOfManufacture: 2018,
      mileage: 500,
      powerHp: 450,
      payloadCapacity: 9000,
      location: 'Тула',
    },
    additionalCharacteristics: {
      countryOfOrigin: 'Россия',
      deliveryDistance: 10,
      attachmentsAvailable: true,
      workType: 'посев',
    },
  },
  {
    id: 1,
    brand: 'John Deere', // machinery.mark.brand
    name: '8370R', // machinery.name
    // machinery.description
    description:
      'Высокопроизводительный комбайн, подходящий для крупномасштабной уборки урожая. Оснащен передовой технологией эффективной обработки',
    category: 'harvester',
    photo: harvester_1,
    prices: {
      perHour: 2500, // price_per_hour
      get perShift(): number {
        // price_per_shift
        return this.perHour! * 8;
      },
    },
    characteristics: {
      yearOfManufacture: 2018,
      mileage: 500,
      powerHp: 450,
      payloadCapacity: 9000,
      location: 'Тула',
    },
    additionalCharacteristics: {
      countryOfOrigin: 'Россия',
      deliveryDistance: 10,
      attachmentsAvailable: true,
      workType: 'посев',
    },
  },
];
