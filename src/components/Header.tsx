'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

interface NavLink {
  href: string;
  label: string;
}

interface HeaderProps {
  variant?: 'default' | 'internal';
}

const mainNavLinks: NavLink[] = [
  { href: '/home#home', label: 'Home' },
  { href: '/home#tutors', label: 'Tutors' },
  { href: '/home#subjects', label: 'Subjects' },
  { href: '/home#pricing', label: 'Pricing' },
  { href: '/home#contact', label: 'Contact' },
];

export default function Header({ variant = 'default' }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={styles.navbar} role="banner">
      <nav className={styles.navContainer} aria-label="Main navigation">
        <Link href="/home" className={styles.logo}>
          <Image
            src="/images/Real-10.png"
            alt="Real IB - Home"
            width={120}
            height={60}
            className={styles.logoImg}
            priority
          />
        </Link>
        
        <ul 
          className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}
          role="menubar"
        >
          {mainNavLinks.map(link => (
            <li key={link.href} role="none">
              <Link
                href={link.href}
                className={styles.navLink}
                role="menuitem"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={styles.navToggle}
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className={styles.toggleBar} aria-hidden="true" />
          <span className={styles.toggleBar} aria-hidden="true" />
          <span className={styles.toggleBar} aria-hidden="true" />
        </button>
      </nav>
    </header>
  );
}