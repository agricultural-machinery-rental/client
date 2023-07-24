import { styled } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import type { TFlexProps, TNextLink } from './typing';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Open-Sans, Helvetica, Sans-Serif, serif;
  }
  
  #root,
  html,
  body,
  .App {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  html {
    font-size: 16px;
  }
`;

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
