'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import classes from './nav-link.module.css';

function NavLink({ href, children }) {
  const pathname = usePathname();
  return (
    <Link
      className={
        pathname.startsWith(href)
          ? `${classes.active} ${classes.link}`
          : classes.link
      }
      href={href}
    >
      {children}
    </Link>
  );
}

export default NavLink;
