import { FC } from 'react';
import { useRouter } from 'next/navigation';

import { StLogoSVG, type TLogoProps } from './';

export const Logo: FC<TLogoProps> = ({ width, height }) => {
  const router = useRouter();

  return <StLogoSVG width={width} height={height} onClick={() => router.push('/')} />;
};
