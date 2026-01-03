import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.footerContent}>
          <Link href="/home" className={styles.logo}>
            <Image
              src="/images/Real-11.png"
              alt="Real IB"
              width={120}
              height={120}
              className={styles.logoImg}
            />
          </Link>
          <p className={styles.copyright}>
            © {currentYear} Real IB. Smarter tutoring for ambitious students.
          </p>
        </div>
      </div>
    </footer>
  );
}