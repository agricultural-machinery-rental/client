import { styled } from 'styled-components';
import { StContainer } from '@/styles/global';

export const StContainerInner = styled(StContainer)`
  display: flex;
  text-align: center;
  flex-direction: column;
  padding: 46px 0 41px;
  gap: 65px;
  margin: 0 auto;
`;

export const StTitle = styled.h3`
  font-family: Archivo;
  font-size: 1.333em;
  font-weight: 700;
  line-height: 40px;
`;

export const StList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 346px);
  grid-template-rows: repeat(2, 280px);
  gap: 48px 32px;
`;
