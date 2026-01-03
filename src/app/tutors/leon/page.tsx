import Link from 'next/link';
import { Metadata } from 'next';
import styles from '../tutor.module.css';

export const metadata: Metadata = {
  title: 'Leon Titmuss',
  description: 'Leon Titmuss - Real IB Tutor. IBAS: 42.75, ATAR: 98.8. Competed with Sydney Swans Academy U18s.',
};

const ACHIEVEMENTS = [
  { score: '18/20', label: 'Mathematics IA' },
  { score: '7', label: 'Biology SL' },
  { score: '7', label: 'Geography HL' },
  { score: '7', label: 'Sports, Health & Exercise Science HL' },
  { score: '19/20', label: 'English Language & Literature HL Essay' },
];

const SUBJECTS = [
  { icon: '📖', name: 'English Language & Literature HL' },
  { icon: '⚽', name: 'Sports, Health & Exercise Science HL' },
  { icon: '🔬', name: 'Biology SL' },
  { icon: '🇪🇸', name: 'Spanish Ab Initio' },
  { icon: '🌍', name: 'Geography HL' },
  { icon: '📊', name: 'Mathematics AI SL' },
];

export default function LeonPage() {
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
            <div className={styles.placeholder}>LT</div>
          </div>
          <div className={styles.profileInfo}>
            <h1>Leon Titmuss</h1>
            <div className={styles.scores}>
              <div className={styles.score}>
                <span className={styles.scoreValue}>42.75</span>
                <span className={styles.scoreLabel}>IBAS</span>
              </div>
              <div className={styles.scoreDivider} aria-hidden="true" />
              <div className={styles.score}>
                <span className={styles.scoreValue}>98.8</span>
                <span className={styles.scoreLabel}>ATAR</span>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>About</h2>
            <p>
              Competed with Sydney Swans Academy U18s National Team throughout the entire IB program. I know firsthand what it&apos;s like to balance elite sport with demanding academics. My approach focuses on maximizing efficiency—getting the best results without sacrificing your athletic commitments or burning out.
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
          </section>

          <section className={styles.section}>
            <h2>Subject Specialisations</h2>
            <div className={styles.subjectsList}>
              {SUBJECTS.map((subject) => (
                <span key={subject.name} className={styles.subjectBadge}>
                  <span className={styles.badgeIcon} aria-hidden="true">{subject.icon}</span>
                  {subject.name}
                </span>
              ))}
            </div>
          </section>

          <div className={styles.cta}>
            <Link href="/book" className={styles.ctaButton}>
              Book a Session with Leon
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