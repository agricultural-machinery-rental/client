import React, { useState } from 'react';

import { useCatalogFilters } from '@/shared/model/filterContext';

/**
 * React hook for the price range slider component
 * @param range Record<'min' | 'max' | 'step', number>
 * @returns inputValueMin, inputValueMax, changeInputMin, changeInputMax, changeRangeMin, changeRangeMax, changeMin, changeMax
 */
export const usePriceRange = (range: Record<'min' | 'max' | 'step', number>) => {
  const { filters, setPriceRange } = useCatalogFilters();

  const [inputValueMin, setInputValueMin] = useState(range.min);
  const [inputValueMax, setInputValueMax] = useState(range.max);

  const changeRangeMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const number = parseInt(value);

    if (number > inputValueMax - range.step) return;

    setInputValueMin(number);
    if (setPriceRange) setPriceRange({ min: number, max: inputValueMax });
  };

  const changeRangeMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const number = parseInt(value);

    if (number < inputValueMin + range.step) return;

    setInputValueMax(number);
    if (setPriceRange) setPriceRange({ min: inputValueMin, max: number });
  };

  const changeInputMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setInputValueMin(value);
  };

  const changeInputMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setInputValueMax(value);
  };

  const changeMin = () => {
    let number = inputValueMin;

    if (Number.isNaN(number)) return;

    if (number > filters.price.max - range.step) {
      number = filters.price.max - range.step;
    }

    if (number < range.min) {
      number = range.min;
    }

    const value = Math.round(number / range.step) * range.step;

    setInputValueMin(value);
    if (setPriceRange) setPriceRange({ min: value, max: filters.price.max });
  };

  const changeMax = () => {
    let number = inputValueMax;

    if (Number.isNaN(number)) return;

    if (number < filters.price.min + range.step) {
      number = filters.price.min + range.step;
    }

    if (number > range.max) {
      number = range.max;
    }

    const value = Math.round(number / range.step) * range.step;

    setInputValueMax(value);
    if (setPriceRange) setPriceRange({ min: filters.price.min, max: value });
  };

  return {
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
