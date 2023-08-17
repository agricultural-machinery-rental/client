import React, { useRef, useState } from 'react';

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
  const [valueMin, setValueMin] = useState(1000);
  const [valueMax, setValueMax] = useState(20000);
  const refProgress = useRef<HTMLInputElement>(null);

  const setProgress = (selector: 'min' | 'max', value: number) => {
    const min = Math.max(selector === 'min' ? value : valueMin, range.min);
    const max = Math.min(selector === 'max' ? value : valueMax, range.max);
    if (min >= range.min && max - min >= range.step && max <= range.max) {
      const progress = refProgress.current;
      if (progress) {
        if (selector === 'min') {
          progress.style.left = (min / range.max) * 96 + '%';
        } else {
          progress.style.right = 104 - (max / range.max) * 100 + '%';
        }
      }
    }
  };
  const changeMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (event.target.type === 'range' && value > valueMax - range.step) return;
    setValueMin(value);
    setProgress('min', value);
  };
  const changeMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (event.target.type === 'range' && value < valueMin + range.step) return;
    setValueMax(value);
    setProgress('max', value);
  };

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
