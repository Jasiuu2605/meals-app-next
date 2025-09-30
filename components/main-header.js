import Link from 'next/link';

import loagoImg from '@/assets/logo.png';

function MainHeader() {
  return (
    <header>
      <Link href='/'>
        <img src={loagoImg.src} alt='A plate with food on it' />
        Next Level food
      </Link>

      <nav>
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
