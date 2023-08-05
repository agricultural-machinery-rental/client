import { styled } from 'styled-components';

import { StHeading3 } from '@/shared/styles/global';

export const StSection = styled.section`
  max-width: 1104px;
  margin: 0 auto 80px;
`;

export const StProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 63px;
`;

export const StProductTitle = styled(StHeading3)`
  margin: 0;
`;

export const StStarButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const StProductMain = styled.div`
  display: grid;
  grid-template-columns: 725px auto;
  justify-content: space-between;
  margin-bottom: 45px;
`;

export const StProductText = styled.p`
  margin-bottom: 30px;
`;

export const StProductList = styled.ul`
  padding-left: 35px;
  margin-bottom: 90px;
  list-style: disc;
`;

export const StProductPrice = styled.span`
  font-weight: 700;
  line-height: 1.333em;
`;

// TODO Стили и кнопка добавлены временно, пока не готова общая
export const StBookingButton = styled.button`
  width: 348px;
  height: 80px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  background: #d9d9d9;
`;
