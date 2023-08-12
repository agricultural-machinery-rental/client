import { styled } from 'styled-components';

import { StHeading3 } from '@/shared/styles/global';

export const StSection = styled.section`
  max-width: 1104px;
  margin: 0 auto 80px;
`;

export const StProductHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;
`;

export const StProductTitle = styled(StHeading3)`
  margin: 0;
  align-self: flex-start;
`;

export const StStarButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  margin-right: 20px;
`;

export const StProductMain = styled.div`
  display: grid;
  grid-template-columns: 536px auto;
  justify-content: space-between;
  margin-bottom: 77px;
  gap: 0 42px;
`;

export const StProductText = styled.p`
  margin-bottom: 40px;
`;

export const StProductList = styled.ul`
  padding-left: 35px;
  margin-bottom: 55px;
  list-style: disc;
`;

export const StProductItemInfo = styled.li`
  display: flex;
  justify-content: space-between;
`;

export const StProductFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StProductFooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  margin-right: 100px;

  & + div {
    margin-right: 50px;
  }
`;

export const StProductPrice = styled.span`
  font-weight: 700;
  font-size: 1.333em;
  line-height: 1.666em;
`;
