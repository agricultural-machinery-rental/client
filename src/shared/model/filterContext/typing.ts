import { Dispatch, SetStateAction } from 'react';

import { filterName } from './consts';

export type TPriceFilter = Record<'min' | 'max', number>;

export type TFilters = {
  [filterName.category]: string | null;
  [filterName.price]: TPriceFilter;
  [filterName.location]?: unknown;
  [filterName.mark]?: unknown;
  [filterName.model]?: unknown;
  [filterName.condition]?: unknown;
  [filterName.purpose]?: unknown;
};

export type TCatalogFilters = {
  filters: TFilters;
  setPriceRange?: Dispatch<SetStateAction<{ min: number; max: number }>>;
  resetFilters?: () => void;
};
