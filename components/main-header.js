import Link from 'next/link';
import Image from 'next/image';

import classes from './main-header.module.css';

import loagoImg from '@/assets/logo.png';

function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href='/'>
        <Image src={loagoImg} priority alt='A plate with food on it' />
        Next Level food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href='/meals'>Browse Meals</Link>
          </li>
          <li>
            <Link href='/community'>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
