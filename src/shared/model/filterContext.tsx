'use client';
import { createContext, useContext, useState, Dispatch, SetStateAction } from 'react';

import { priceRange } from '@/shared/catalog';
import { useCategoryByUrl } from '@/shared/hooks';

import { TLayout } from '../types';

type TCatalogFilters = {
  filters?: Record<string, null | string | Record<string, number>>;
  setPriceRange?: Dispatch<SetStateAction<{ min: number; max: number }>>;
};

export const CatalogFilters = createContext<TCatalogFilters>({});

export const FiltersProvider: TLayout = ({ children }) => {
  const [price, setPriceRange] = useState({ min: priceRange.min, max: priceRange.max });
  const category = useCategoryByUrl();
  const value = {
    filters: {
      category,
      price,
    },
    setPriceRange,
  };

  return <CatalogFilters.Provider value={value}>{children}</CatalogFilters.Provider>;
};

export const useCatalogFilters = () => {
  return useContext(CatalogFilters);
};
