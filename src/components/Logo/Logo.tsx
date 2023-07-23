import { FC } from 'react';
import { useRouter } from 'next/navigation';

import { StLogoSVG } from './styled';
import type { TLogoProps } from './typing';

export const Logo: FC<TLogoProps> = ({ width, height }) => {
  const router = useRouter();

  return <StLogoSVG width={width} height={height} onClick={() => router.push('/')} />;
};
