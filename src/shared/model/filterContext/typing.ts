import { Dispatch, SetStateAction } from 'react';

import type { PartialRecord, Overwrite } from '@/shared/types';

import { filterName } from './consts';

export type TPriceFilter = Record<'min' | 'max', number>;

type TFiltersGeneralType = PartialRecord<filterName, unknown>;

export type TFilters = Overwrite<
  TFiltersGeneralType,
  {
    [filterName.category]: string | null;
    [filterName.price]: TPriceFilter;
  }
>;

export type TCatalogFilters = {
  filters: TFilters;
  setPriceRange?: Dispatch<SetStateAction<{ min: number; max: number }>>;
  resetFilters?: () => void;
};
