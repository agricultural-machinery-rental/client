import { JSX } from 'react';

type TUnits = {
  label: string;
  unit?: JSX.Element;
};

export const catalogItemCharacteristicsUnits: Record<string, TUnits> = {
  year_of_manufacture: { label: 'Год выпуска', unit: <>г</> },
  mileage: { label: 'Пробег', unit: <>км</> },
  powerHp: { label: 'Мощность', unit: <>лс</> },
  payloadCapacity: { label: 'Грузоподъемность', unit: <>кг</> },
  location: { label: 'Местоположение' },
  countryOfOrigin: { label: 'Страна производства' }, // machinery.mark.country_of_origin
  deliveryDistance: { label: 'Радиус доставки', unit: <>км</> }, // delivery_distance_km
  attachmentsAvailable: { label: 'Навесное оборудование' }, // attachments_available
  workType: { label: 'Виды работ' }, // work_type
};
