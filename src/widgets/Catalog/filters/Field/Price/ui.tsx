import React, { useRef } from 'react';

import { priceRange } from '@/shared/catalog';
import { useCatalogFilters } from '@/shared/model/filterContext';

import { usePriceRange } from './hook';
import {
  StWrapSlider,
  StSliderProgress,
  StWrapRange,
  StRangeInput,
  StWrapPrice,
  StPriceInput,
} from './styled';

export const PriceFieldContent = () => {
  const refProgress = useRef<HTMLInputElement>(null);
  const { filters } = useCatalogFilters();
  const filtersPrice = filters?.price
    ? (filters.price as Record<'min' | 'max', number>)
    : priceRange;
  const { changeMin, changeMax, changeRange } = usePriceRange(refProgress.current, priceRange);
  changeRange(filtersPrice);

  return (
    <>
      <StWrapSlider>
        <StSliderProgress ref={refProgress} />
      </StWrapSlider>
      <StWrapRange>
        <StRangeInput type='range' {...priceRange} value={filtersPrice.min} onChange={changeMin} />
        <StRangeInput type='range' {...priceRange} value={filtersPrice.max} onChange={changeMax} />
      </StWrapRange>
      <StWrapPrice>
        <StPriceInput type='text' value={filtersPrice.min} onChange={changeMin} />
        <span>&mdash;</span>
        <StPriceInput type='text' value={filtersPrice.max} onChange={changeMax} />
      </StWrapPrice>
    </>
  );
};
