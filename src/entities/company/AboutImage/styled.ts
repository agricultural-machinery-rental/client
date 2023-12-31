import Image from 'next/image';
import { styled } from 'styled-components';

export const StAboutImageWrap = styled.div`
  max-height: 100%;
  overflow: hidden;
  width: 100%;
`;
export const StAboutImageItem = styled(Image)`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
