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
  const {
    rangeValueMin,
    rangeValueMax,
    inputValueMin,
    inputValueMax,
    changeMin,
    changeMax,
    changeInputMin,
    changeInputMax,
    changeRangeMin,
    changeRangeMax,
  } = usePriceRange(refProgress.current, range);

  return (
    <>
      <StWrapSlider>
        <StSliderProgress ref={refProgress} />
      </StWrapSlider>
      <StWrapRange>
        <StRangeInput type='range' {...range} value={rangeValueMin} onChange={changeRangeMin} />
        <StRangeInput type='range' {...range} value={rangeValueMax} onChange={changeRangeMax} />
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
