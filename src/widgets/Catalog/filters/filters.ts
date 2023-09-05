import { filterName } from '@/shared/model/filterContext';

type TFiltersMap = Record<filterName, Record<'name', string>>;

export const filters: TFiltersMap = {
  category: { name: 'Категория' },
  location: { name: 'Расположение' },
  price: { name: 'Стоимость' },
  mark: { name: 'Марка' },
  model: { name: 'Модель' },
  purpose: { name: 'Тип работ' },
  condition: { name: 'Состояние' },
};
