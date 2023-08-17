import React, { useRef, useState } from 'react';

import {
  StWrapSlider,
  StSliderProgress,
  StWrapRange,
  StRangeInput,
  StWrapPrice,
  StPriceInput,
} from './styled';

const Range = {
  min: 1000,
  max: 20000,
  step: 1000,
};

export const PriceFieldContent = () => {
  const [rangeMin, setRangeMin] = useState(1000);
  const [rangeMax, setRangeMax] = useState(20000);
  const [valueMin, setValueMin] = useState(1000);
  const [valueMax, setValueMax] = useState(20000);
  const refProgress = useRef<HTMLInputElement>(null);

  const setProgress = (selector: 'min' | 'max', value: number) => {
    const min = Math.max(selector === 'min' ? value : valueMin, Range.min);
    const max = Math.min(selector === 'max' ? value : valueMax, Range.max);
    if (min >= Range.min && max - min >= Range.step && max <= Range.max) {
      const progress = refProgress.current;
      if (progress) {
        if (selector === 'min') {
          progress.style.left = (min / Range.max) * 96 + '%';
        } else {
          progress.style.right = 104 - (max / Range.max) * 100 + '%';
        }
      }
    }
  };
  const changeMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setRangeMin(value);
    setValueMin(value);
    setProgress('min', value);
  };
  const changeMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setRangeMax(value);
    setValueMax(value);
    setProgress('max', value);
  };

  return (
    <>
      <StWrapSlider>
        <StSliderProgress ref={refProgress} />
      </StWrapSlider>
      <StWrapRange>
        <StRangeInput
          type='range'
          min={Range.min}
          max={Range.max}
          step={Range.step}
          value={rangeMin}
          onChange={changeMin}
        />
        <StRangeInput
          type='range'
          min={Range.min}
          max={Range.max}
          step={Range.step}
          value={rangeMax}
          onChange={changeMax}
        />
      </StWrapRange>
      <StWrapPrice>
        <StPriceInput type='text' value={valueMin} onChange={changeMin} />
        <span>&mdash;</span>
        <StPriceInput type='text' value={valueMax} onChange={changeMax} />
      </StWrapPrice>
    </>
  );
};
