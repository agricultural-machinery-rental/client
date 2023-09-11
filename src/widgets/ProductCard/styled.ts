import { styled } from 'styled-components';

import { StFlex, StHeading3 } from '@/shared/styles/global';
import { theme } from '@/shared/styles/theme';
import { Button } from '@/shared/ui/Button';

export const StSection = styled.section`
  max-width: 1104px;
  margin: 0 auto 80px;
  padding: 40px 10px;
  background: ${theme.colors.bgOpacity6};
`;

export const StProductHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
`;

export const StProductTitle = styled(StHeading3)`
  margin: 0;
  align-self: flex-start;
`;

export const StProductMain = styled.div`
  display: grid;
  grid-template-columns: 536px auto;
  justify-content: space-between;
  margin-bottom: 69px;
  gap: 0 22px;
  position: relative;
`;

export const StProductText = styled.p`
  font-size: 1em;
  line-height: 1.667em;
  margin-bottom: 5px;
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

export const StCharacteristics = styled(StFlex)`
  flex-direction: column;
  row-gap: 14px;
  margin: 48px 0 0;
`;

export const StCharacteristicsLine = styled(StFlex)`
  justify-content: space-between;
  column-gap: 10px;
`;

export const StHeaderLine = styled(StFlex)`
  justify-content: space-between;
`;
