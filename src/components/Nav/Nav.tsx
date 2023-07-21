'use client';

/* Core */
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <Link href='/about'>О нас</Link>

      <Link href='/signin'>Вход</Link>
    </nav>
  );
};
