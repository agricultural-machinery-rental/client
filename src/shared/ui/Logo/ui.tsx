import Link from 'next/link';
import { FC } from 'react';

import LogoPNG from './assets/logo.png';
import { StLogoPNG } from './styled';

export const Logo: FC = () => {
  return (
    <Link href='/'>
      <StLogoPNG src={LogoPNG} alt='Логотип' />
    </Link>
  );
};
