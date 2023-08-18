import React, { useRef } from 'react';

import { usePriceRange } from './hook';
import {
  StWrapSlider,
  StSliderProgress,
  StWrapRange,
  StRangeInput,
  StWrapPrice,
  StPriceInput,
} from './styled';

const range = {
  min: 1000,
  max: 20000,
  step: 1000,
};

export const PriceFieldContent = () => {
  const refProgress = useRef<HTMLInputElement>(null);
  const { valueMin, valueMax, changeMin, changeMax } = usePriceRange(refProgress.current, range);

  return (
    <>
      <StWrapSlider>
        <StSliderProgress ref={refProgress} />
      </StWrapSlider>
      <StWrapRange>
        <StRangeInput type='range' {...range} value={valueMin} onChange={changeMin} />
        <StRangeInput type='range' {...range} value={valueMax} onChange={changeMax} />
      </StWrapRange>
      <StWrapPrice>
        <StPriceInput type='text' value={valueMin} onChange={changeMin} />
        <span>&mdash;</span>
        <StPriceInput type='text' value={valueMax} onChange={changeMax} />
      </StWrapPrice>
    </>
  );
};
