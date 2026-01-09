import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import styles from '../tutor.module.css';

export const metadata: Metadata = {
  title: 'Patrick Jones',
  description: 'Patrick Jones - Real IB Tutor. IBAS: 45.5, ATAR: 99.95. Near-perfect IB score while competing in golf tournaments.',
};

const ACHIEVEMENTS = [
  { score: '45.5', label: 'IBAS Score' },
  { score: '99.95', label: 'ATAR' },
];

export default function PatrickPage() {
  return (
    <main className={styles.tutorProfile}>
      <div className="container">
        <Link href="/home#tutors" className={styles.backLink}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M12 5l-7 7 7 7" />
          </svg>
          Back to Tutors
        </Link>
        
        <header className={styles.profileHeader}>
          <div className={styles.profileImage}>
            <Image
              src="/images/paddy.jpeg"
              alt="Patrick Jones"
              width={200}
              height={200}
              className={styles.profilePhoto}
            />
          </div>
          <div className={styles.profileInfo}>
            <h1>Patrick Jones</h1>
            <div className={styles.scores}>
              <div className={styles.score}>
                <span className={styles.scoreValue}>45.5</span>
                <span className={styles.scoreLabel}>IBAS</span>
              </div>
              <div className={styles.scoreDivider} aria-hidden="true" />
              <div className={styles.score}>
                <span className={styles.scoreValue}>99.95</span>
                <span className={styles.scoreLabel}>ATAR</span>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>About</h2>
            <p>
              Achieved a near-perfect IB score of 45.5 while competing in weekly golf tournaments throughout the program. I&apos;ve mastered the art of high-stakes performance optimization—whether on the course or in exams. My tutoring focuses on strategic preparation, eliminating unnecessary work, and performing when it matters most.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Best IB Achievements</h2>
            <div className={styles.achievementsGrid}>
              {ACHIEVEMENTS.map((achievement) => (
                <article key={achievement.label} className={styles.achievementCard}>
                  <span className={styles.achievementScore}>{achievement.score}</span>
                  <span className={styles.achievementLabel}>{achievement.label}</span>
                </article>
              ))}
            </div>
            <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
              Contact us for detailed subject breakdowns.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Subject Specialisations</h2>
            <p>Contact us to learn about Patrick&apos;s subject specialisations.</p>
          </section>

          <div className={styles.cta}>
            <Link href="/book" className={styles.ctaButton}>
              Book a Session with Patrick
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}