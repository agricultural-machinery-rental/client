import { styled } from 'styled-components';

export const StSwiper = styled.div`
  height: 347px;
  width: 347px;

  .slick-dots li {
    margin: 0;
    &.slick-active button:before {
      opacity: 1;
      color: black;
    }
    button:before {
      font-size: 9px;
      opacity: 0.7;
      color: #595858;
    }
  }
`;
