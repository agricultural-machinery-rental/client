import React, { useRef, useEffect, useMemo } from 'react';

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

  const filtersPrice = { ...filters.price, step: priceRange.step };

  const {
    inputValueMin,
    inputValueMax,
    changeMin,
    changeMax,
    changeInputMin,
    changeInputMax,
    changeRangeMin,
    changeRangeMax,
  } = usePriceRange(priceRange);

  const rangeLength = useMemo(
    () => priceRange.max - priceRange.min,
    [priceRange.max, priceRange.min],
  );

  useEffect(() => {
    if (!refProgress.current) return;

    const progress = refProgress.current;

    const min = (filters.price.min - priceRange.min) / rangeLength;
    const max = (priceRange.max - filters.price.max) / rangeLength;

    progress.style.left = Math.round(min * 100) + '%';
    progress.style.right = Math.round(max * 100) + '%';
  }, [filters.price, priceRange, rangeLength]);

  return (
    <>
      <StWrapSlider>
        <StSliderProgress ref={refProgress} />
      </StWrapSlider>
      <StWrapRange>
        <StRangeInput
          type='range'
          {...priceRange}
          value={filtersPrice.min}
          onChange={changeRangeMin}
        />
        <StRangeInput
          type='range'
          {...priceRange}
          value={filtersPrice.max}
          onChange={changeRangeMax}
        />
      </StWrapRange>
      <StWrapPrice>
        <StPriceInput
          type='text'
          value={inputValueMin}
          onChange={changeInputMin}
          onBlur={changeMin}
        />
        <span>&mdash;</span>
        <StPriceInput
          type='text'
          value={inputValueMax}
          onChange={changeInputMax}
          onBlur={changeMax}
        />
      </StWrapPrice>
    </>
  );
};
