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
  const [valueMin, setValueMin] = useState(1000);
  const [valueMax, setValueMax] = useState(20000);

  const setProgress = (selector: 'min' | 'max', value: number) => {
    const min = Math.max(selector === 'min' ? value : valueMin, range.min);
    const max = Math.min(selector === 'max' ? value : valueMax, range.max);
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

  const changeMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || 0;
    if (event.target.type === 'range' && value > valueMax - range.step) return;
    setValueMin(value);
    setProgress('min', value);
  };

  const changeMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || 0;
    if (event.target.type === 'range' && value < valueMin + range.step) return;
    setValueMax(value);
    setProgress('max', value);
  };

  return { valueMin, valueMax, changeMin, changeMax };
};
