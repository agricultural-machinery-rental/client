import { styled } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import Link from 'next/link';
import type { TFlexProps, TNextLink } from './typing';

export const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding: 0;
    vertical-align: baseline;
    font-size: 1rem;
    line-height: 1.15;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: Open-Sans, Helvetica, Sans-Serif, serif;
    font-size: 24px;
    background: #fff;
    cursor: default;
  }

  #root,
  html,
  body,
  .App {
    width: 100%;
    height: 100%;
    overflow: auto;
  }

  ol, ul, menu {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  img, svg {
    max-inline-size: 100%;
    max-block-size: 100%;
  }

  input, textarea {
    -webkit-user-select: auto;
  }

  button, input, select, textarea {
    font-family: inherit;
  }

  button, input {
    overflow: visible;
  }

  button, select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  textarea {
    white-space: revert;
  }

  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }

  :where(pre) {
    all: revert;
  }

  ::placeholder {
    color: unset;
  }

  ::marker {
    content: initial;
  }

  :where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
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
