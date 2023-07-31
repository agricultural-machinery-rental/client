'use client';
import Link from 'next/link';
import { styled } from 'styled-components';
import type { TFlexProps, TNextLink, TTextBoxProps } from './typing';

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

export const StHeading2 = styled.h2`
  font-size: 2em;
  line-height: 1.167em;
`;

export const StHeading3 = styled.h3`
  font-size: 1.333em;
  line-height: 1.25em;
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

export const StTextBox = styled.p<TTextBoxProps>(props => {
  const { $textAlign, $fontWeight, $fontSize, $lineHeight } = props;

  return {
    textAlign: $textAlign || 'left',
    fontWeight: $fontWeight || 'normal',
    fontSize: $fontSize ? `${$fontSize}rem` : 'medium',
    lineHeight: $lineHeight ? `${$lineHeight}rem` : 'normal',
  };
});
