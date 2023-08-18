import React, { useState } from 'react';

/**
 * React hook for the price range slider component
 * @param progress HTMLDivElement of the range bar
 * @param range Record<'min' | 'max' | 'step', number>
 * @returns valueMin, valueMax, changeMin, changeMax
 */
export const usePriceRange = (
  progress: HTMLDivElement | null,
  range: Record<'min' | 'max' | 'step', number>,
) => {
  const [rangeValueMin, setRangeValueMin] = useState(range.min);
  const [rangeValueMax, setRangeValueMax] = useState(range.max);
  const [inputValueMin, setInputValueMin] = useState(`${range.min}`);
  const [inputValueMax, setInputValueMax] = useState(`${range.max}`);

  const setProgress = (selector: 'min' | 'max', value: number) => {
    const min = Math.max(selector === 'min' ? value : rangeValueMin, range.min);
    const max = Math.min(selector === 'max' ? value : rangeValueMax, range.max);
    if (min >= range.min && max - min >= range.step && max <= range.max) {
      if (progress) {
        if (selector === 'min') {
          progress.style.left = (min / range.max) * 100 - 4 + '%';
        } else {
          progress.style.right = 104 - (max / range.max) * 100 + '%';
        }
      }
    }
  };

  const changeInputMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValueMin(value);
  };

  const changeInputMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValueMax(value);
  };

  const changeRangeMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const number = parseInt(value);

    if (number > rangeValueMax - range.step) return;

    setRangeValueMin(number);
    setInputValueMin(value);
    setProgress('min', number);
  };

  const changeRangeMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const number = parseInt(value);

    if (number < rangeValueMin + range.step) return;

    setRangeValueMax(number);
    setInputValueMax(value);
    setProgress('max', number);
  };

  const changeMin = () => {
    let number = parseInt(inputValueMin);

    if (Number.isNaN(number)) return;

    if (number > rangeValueMax - range.step) {
      number = rangeValueMax - range.step;
    }

    if (number < range.min) {
      number = range.min;
    }

    const value = Math.round(number / range.step) * range.step;

    setRangeValueMin(value);
    setInputValueMin(`${value}`);
    setProgress('min', value);
  };

  const changeMax = () => {
    let number = parseInt(inputValueMax);

    if (Number.isNaN(number)) return;

    if (number < rangeValueMin + range.step) {
      number = rangeValueMin + range.step;
    }

    if (number > range.max) {
      number = range.max;
    }

    const value = Math.round(number / range.step) * range.step;

    setRangeValueMax(value);
    setInputValueMax(`${value}`);
    setProgress('max', value);
  };

  return {
    rangeValueMin,
    rangeValueMax,
    inputValueMin,
    inputValueMax,
    changeInputMin,
    changeInputMax,
    changeRangeMin,
    changeRangeMax,
    changeMin,
    changeMax,
  };
};
