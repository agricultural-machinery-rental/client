import Link from 'next/link';
import Image from 'next/image';
//import { Nav } from "../Nav/Nav";

import logo from '../../assets/images/logo.jpg';
import { Nav } from '../Nav/Nav';

export const Header = () => {
  return (
    <header>
      <Link href='/'>
        <Image src={logo} alt='logo' width={100} height={100} />
      </Link>

      <h1>Хэдер</h1>

      <Nav />
    </header>
  );
};
