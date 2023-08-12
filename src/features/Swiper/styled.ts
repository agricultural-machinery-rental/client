import { styled } from 'styled-components';

export const StSwiper = styled.div`
  height: 479px;
  width: 536px;

  .slick-dots li {
    margin: 0 8px 25px;
    &.slick-active button:before {
      opacity: 1;
      color: black;
    }
    button:before {
      font-size: 0.666rem;
      opacity: 0.7;
      color: #595858;
    }
  }
`;
