import { styled } from 'styled-components';

export const StSwiper = styled.div`
  height: 347px;
  width: 347px;

  & .slick-dots li {
    margin: 0;
  }

  & .slick-dots li.slick-active button:before {
    opacity: 1;
    color: black;
  }

  & .slick-dots li button:before {
    font-size: 9px;
    opacity: 0.7;
    color: #595858;
  }
`;
