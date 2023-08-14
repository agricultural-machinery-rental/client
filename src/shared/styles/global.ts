'use client';
import Link from 'next/link';
import { styled, css } from 'styled-components';

import { theme } from './theme';
import type { TFlex, TNextLink, TTextBox } from './typing';

export const StFlex = styled.div<TFlex>(props => {
  const { $flexDirection, $justifyContent, $alignItems, $gap, $flexWrap } = props;

  return {
    display: 'flex',
    flexDirection: $flexDirection || 'row',
    justifyContent: $justifyContent || 'unset',
    alignItems: $alignItems || 'unset',
    gap: $gap ? `${$gap}px` : 0,
    flexWrap: $flexWrap ? `${$flexWrap}` : 'nowrap',
  };
});

export const StContainer = styled.div`
  max-width: 1104px;
  margin: 0 auto;
`;

export const StHeading1 = styled.h1`
  font-size: 2em;
  line-height: 1.167em;
  text-align: center;
  margin-bottom: 56px;
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
  font-size: 0.66rem;
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
  font-size: 0.6rem;
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  justify-content: ${({ $justifyContent }) => ($justifyContent ? $justifyContent : 'flex-start')};

  &&:hover {
    text-decoration: underline;
  }
`;

export const StyledLinkWithLine = css`
  position: relative;
  color: ${theme.colorsText.secondary};
  padding: 0 8px;

  &:after {
    position: absolute;
    transform: scaleX(0);
    display: block;
    content: '';
    height: 1px;
    width: 100%;
    top: 100%;
    background: ${theme.colorsText.secondary};
    transition: transform 250ms ease-in-out;
    left: 0;
  }

  &&:hover {
    text-decoration: none;
  }

  &&.active:after,
  &&:hover:after {
    transform: scaleX(1);
  }
`;

export const StTextBox = styled.p<TTextBox>(props => {
  const { $textAlign, $fontWeight, $fontSize, $lineHeight } = props;

  return {
    textAlign: $textAlign || 'left',
    fontWeight: $fontWeight || 'normal',
    fontSize: $fontSize ? `${$fontSize}rem` : 'medium',
    lineHeight: $lineHeight ? `${$lineHeight}rem` : 'normal',
  };
});
