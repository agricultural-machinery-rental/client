import { type TFavoriteItem } from '@/entities/FavoriteItem';

import photo from '@/shared/photos/photo.jpg';

export const favorites: TFavoriteItem[] = [
  {
    photo: photo.src,
    name: 'Трактор R-40',
    category: 'Экскаваторы',
    comment:
      'Грузоподъемность 3 тонны, количество цилиндров Х, Мощность - Y, другая характеристика - Z',
  },
  {
    photo: photo.src,
    name: 'Плуг Название',
    category: 'Навесное оборудование',
    comment: 'Длина плеча - Х, еще характеристика - Y',
  },
];
