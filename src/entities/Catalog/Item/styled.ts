'use client';
import { styled } from 'styled-components';

import { StFlex, StNextLink } from '@/shared/styles/global';
import { theme } from '@/shared/styles/theme';
import { Button } from '@/shared/ui/Button';

export const StItem = styled.article`
  display: flex;
  flex-direction: row;
  min-width: 820px;
  padding: ${theme.padding.catalogItem};
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.catalogItem};
  box-shadow: 0 4px 4px 0 ${theme.colors.boxShadow};
  column-gap: 52px;
`;

export const StDescriptionBlock = styled.div`
  flex-grow: 1;
`;

export const StTitle = styled(StNextLink)`
  margin: 18px 0 12px;

  & h3 {
    font-family: 'Open Sans', serif;
    font-size: 1rem;
    font-weight: 700;
  }
`;

export const StDescriptionText = styled(StFlex)`
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.66em;
`;

export const StCharacteristics = styled(StFlex)`
  flex-direction: column;
  row-gap: 14px;
  margin: 26px 8px 0;
`;

export const StCharacteristicsLine = styled(StFlex)`
  justify-content: space-between;
  column-gap: 10px;
`;

export const StPriceLabel = styled('span')`
  margin-top: 10px;
`;

export const StPriceNumber = styled('span')`
  font-family: 'Open Sans', serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0;
  text-align: left;
`;

export const StButton = styled(Button)`
  margin-top: 10px;
  height: 56px;
  width: 252px;
  font-size: 0.5rem;
`;
