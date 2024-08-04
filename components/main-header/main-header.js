import Link from 'next/link';
import Image from 'next/image';
import mainLogo from '@/assets/logo.png';
import classes from './main-header.module.css';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image src={mainLogo} alt="Main Logo" priority />
        Next Food
      </Link>
      <nav className={classes.nav}>
        <ul style={{textAlign: "center", listStyle: "none"}}>
          <li>
            <NavLink link='/meals'>Browse Meals</NavLink>
          </li>
          <li>
            <NavLink link='/community'>Foodies Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}