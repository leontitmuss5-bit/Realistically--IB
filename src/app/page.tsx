import Image from 'next/image';
import Link from 'next/link';
import styles from './landing.module.css';

export default function LandingPage() {
  return (
    <main className={styles.landingContainer}>
      <div className={styles.ambientGlow} aria-hidden="true" />
      <Image
        src="/images/Real-11.png"
        alt="Real IB - Elite IB Tutoring"
        width={550}
        height={550}
        className={styles.landingLogo}
        priority
      />
      <Link href="/home" className={styles.landingButton}>
        Enter
      </Link>
    </main>
  );
}