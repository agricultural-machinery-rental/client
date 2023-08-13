import { styled } from 'styled-components';

export const StSwiper = styled.div`
  height: 476px;
  width: 536px;

  .slick-dots li {
    margin: 0 8px 25px;
    &.slick-active button:before {
      color: #ff9900;
    }
    button:before {
      font-size: 0.666rem;
      opacity: 1;
      color: #ffffff;
    }
  }
`;
