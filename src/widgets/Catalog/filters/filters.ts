type TFiltersMap = {
  [key: string]: Record<string, string>;
};

export const filters: TFiltersMap = {
  category: { name: 'Категория' },
  location: { name: 'Расположение' },
  price: { name: 'Стоимость' },
  mark: { name: 'Марка' },
  model: { name: 'Модель' },
  purpose: { name: 'Тип работ' },
  condition: { name: 'Состояние' },
};
