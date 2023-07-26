'use client';
import Link from 'next/link';
import { styled } from 'styled-components';
import type { TFlexProps, TNextLink } from './typing';

export const StFlex = styled.div<TFlexProps>(props => {
  const { $flexDirection, $justifyContent, $alignItems, $gap } = props;

  return {
    display: 'flex',
    flexDirection: $flexDirection || 'row',
    justifyContent: $justifyContent || 'unset',
    alignItems: $alignItems || 'unset',
    gap: $gap ? `${$gap}px` : 0,
  };
});

export const StContainer = styled.div`
  width: 1104px;
`;

export const StHeading3 = styled.h3`
  font-size: 2rem;
  line-height: 2.5rem;
  text-align: center;
  margin: 0 auto;
`;

export const StNextLink = styled(Link)<TNextLink>`
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  justify-content: ${({ $justifyContent }) => ($justifyContent ? $justifyContent : 'flex-start')};

  &&:hover {
    text-decoration: underline;
  }
`;

export const StNextSpan = styled.span<TNextLink>`
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  justify-content: ${({ $justifyContent }) => ($justifyContent ? $justifyContent : 'flex-start')};

  &&:hover {
    text-decoration: underline;
  }
`;
