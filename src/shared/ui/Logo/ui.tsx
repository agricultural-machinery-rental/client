import { useRouter } from 'next/navigation';
import { FC } from 'react';

import { StLogoSVG } from './styled';
import { type TLogo } from './typing';

export const Logo: FC<TLogo> = ({ width, height }) => {
  const router = useRouter();

  return <StLogoSVG width={width} height={height} onClick={() => router.push('/')} />;
};
