import { styled } from 'styled-components';

export const StContainer = styled.div`
  width: 346px;
  margin: 0 auto; // TODO не понадобится при слиянии с профильной навигацией

  & .fieldset {
    gap: 18px;
  }
`;

export const StFooterWrapper = styled.div`
  margin: 40px 0 0;
`;
