import { TCategoryItemContainer } from '@/entities/Product/CategoryItemContainer';

import { catalogItemCategory } from '@/shared/catalog';

import photo_1 from './assets/foto-1.png';
import photo_2 from './assets/foto-2.png';
import photo_3 from './assets/foto-3.png';
import photo_4 from './assets/foto-4.png';
import photo_5 from './assets/foto-5.png';
import photo_6 from './assets/foto-6.png';
import photo_7 from './assets/foto-7.png';
import photo_8 from './assets/foto-8.png';

export const CategoryItemData: TCategoryItemContainer[] = [
  {
    image: photo_1,
    title: 'Тракторы',
    category: catalogItemCategory.tractor,
  },
  {
    image: photo_2,
    title: 'Комбайны',
    category: catalogItemCategory.harvester,
  },
  {
    image: photo_3,
    title: 'Посевная техника',
    category: catalogItemCategory.seeding,
  },
  {
    image: photo_4,
    title: 'Мототракторы',
    category: catalogItemCategory.motor_tractor,
  },
  {
    image: photo_5,
    title: 'Прицепы',
    category: catalogItemCategory.trailer,
  },
  {
    image: photo_6,
    title: 'Плуги',
    category: catalogItemCategory.plow,
  },
  {
    image: photo_7,
    title: 'Погрузчики',
    category: catalogItemCategory.loader,
  },
  {
    image: photo_8,
    title: 'Навесное оборудование',
    category: catalogItemCategory.attachment,
  },
];
