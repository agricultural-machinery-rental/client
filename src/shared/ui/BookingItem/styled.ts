import { styled } from 'styled-components';

import { theme } from '@/shared/styles/theme';
const itemHeight = theme.sizesHeight.bookingItem;

export const StBookingItem = styled.article`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: ${itemHeight};
  border-radius: ${theme.borderRadius.catalogItem};
  overflow: hidden;
  background: ${theme.colors.white};
`;

export const StImage = styled.div`
  position: relative;
  height: ${itemHeight};
  width: ${itemHeight};
`;

export const StDescriptionBlock = styled.div`
  position: relative;
  flex: 1;
  padding: 28px 40px 12px 40px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const StTitle = styled.h3`
  font-size: 0.75rem;
  font-weight: 700;
`;

export const StDates = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
`;

export const StCategory = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
`;

export const StComment = styled.p`
  font-size: 0.66rem;
  padding-top: 4px;
  line-height: 1rem;
`;
