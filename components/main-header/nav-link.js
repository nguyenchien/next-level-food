'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from './nav-link.module.css';

export default function NavLink({link, children}) {
  const path = usePathname();
  return(
    <Link href={link} className={path.startsWith(link) ? classes.active : classes.link}>{children}</Link>
  )
}