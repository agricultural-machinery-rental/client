import { styled } from 'styled-components';

import { theme } from '@/shared/styles/theme';

export const StWrapSlider = styled.div`
  margin-top: 1rem;
  height: 5px;
  position: relative;
  background: #ddd;
  border-radius: 5px;
`;
export const StSliderProgress = styled.div`
  height: 100%;
  left: 5px;
  right: 5px;
  position: absolute;
  border-radius: 5px;
  background: ${theme.colors.borderSecond};
`;
export const StWrapRange = styled.div`
  position: relative;
`;
export const StRangeInput = styled.input`
  position: absolute;
  width: 100%;
  height: 5px;
  top: -5px;
  background: none;
  pointer-events: none;
  appearance: none;
  &::-webkit-slider-thumb {
    height: 17px;
    width: 17px;
    border-radius: 50%;
    border-style: solid;
    border-color: ${theme.colors.borderSecond};
    border-width: 1px;
    background: ${theme.colors.bgElPrimary};
    pointer-events: auto;
    appearance: none;
    -webkit-appearance: none;
  }
  &::-moz-range-thumb {
    height: 17px;
    width: 17px;
    border: none;
    border-radius: 50%;
    border-style: solid;
    border-color: ${theme.colors.borderSecond};
    border-width: 1px;
    background: ${theme.colors.bgElPrimary};
    pointer-events: auto;
    appearance: none;
    -webkit-appearance: none;
  }
`;
export const StWrapPrice = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  align-items: center;
  font-size: 0.66rem;
`;
export const StPriceInput = styled.input`
  width: 40%;
  height: 1.5rem;
  outline: none;
  border-radius: 5px;
  text-align: center;
  border: 1px solid ${theme.colors.borderFirst};
`;
