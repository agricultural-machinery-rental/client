import React, { useRef } from 'react';

import { priceRange } from '@/shared/catalog';

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
  const { valueMin, valueMax, changeMin, changeMax } = usePriceRange(
    refProgress.current,
    priceRange,
  );

  return (
    <>
      <StWrapSlider>
        <StSliderProgress ref={refProgress} />
      </StWrapSlider>
      <StWrapRange>
        <StRangeInput type='range' {...priceRange} value={valueMin} onChange={changeMin} />
        <StRangeInput type='range' {...priceRange} value={valueMax} onChange={changeMax} />
      </StWrapRange>
      <StWrapPrice>
        <StPriceInput type='text' value={valueMin} onChange={changeMin} />
        <span>&mdash;</span>
        <StPriceInput type='text' value={valueMax} onChange={changeMax} />
      </StWrapPrice>
    </>
  );
};
