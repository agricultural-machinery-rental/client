'use client';

import { createContext, useContext, useState } from 'react';

import { priceRange } from '@/shared/catalog';
import { useCategoryByUrl } from '@/shared/hooks';
import { TLayout } from '@/shared/types';

import type { TPriceFilter, TCatalogFilters } from './typing';

const defaultPrices: TPriceFilter = {
  min: priceRange.min,
  max: priceRange.max,
};

const defaultState: TCatalogFilters = {
  filters: {
    category: null,
    price: defaultPrices,
  },
};

export const CatalogFilters = createContext<TCatalogFilters>(defaultState);

export const FiltersProvider: TLayout = ({ children }) => {
  const [price, setPriceRange] = useState<TPriceFilter>(defaultPrices);
  const category = useCategoryByUrl();

  const resetFilters = () => {
    setPriceRange(defaultPrices);
  };

  const value = {
    filters: {
      category,
      price,
    },
    setPriceRange,
    resetFilters,
  };

  return <CatalogFilters.Provider value={value}>{children}</CatalogFilters.Provider>;
};

export const useCatalogFilters = () => {
  return useContext(CatalogFilters);
};
