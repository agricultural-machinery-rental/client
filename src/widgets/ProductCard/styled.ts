import { styled } from 'styled-components';

import { StHeading3 } from '@/shared/styles/global';
import { theme } from '@/shared/styles/theme';
import { Button } from '@/shared/ui/Button';

export const StSection = styled.section`
  max-width: 1104px;
  margin: 0 auto 80px;
  padding: 40px 0;
  background: ${theme.colors.bgOpacity6};
`;

export const StProductHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 26px;
`;

export const StProductTitle = styled(StHeading3)`
  margin: 0;
  align-self: flex-start;
  margin-bottom: 67px;
`;

export const StStarButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const StProductMain = styled.div`
  display: grid;
  grid-template-columns: 536px auto;
  justify-content: space-between;
  margin-bottom: 69px;
  gap: 0 42px;
  position: relative;
`;

export const StProductText = styled.p`
  font-size: 0.75em;
  line-height: 1.667em;
  margin-bottom: 5px;
`;

export const StProductList = styled.ul`
  padding-left: 35px;
  margin-bottom: 95px;
  list-style: disc;
  font-size: 0.75em;

  & li {
    line-height: 1.667em;
  }
`;

export const StProductItemInfo = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
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

export const StButton = styled(Button)`
  margin-top: 10px;
  height: 80px;
  width: 347px;
`;
