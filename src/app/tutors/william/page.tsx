import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import styles from '../tutor.module.css';

export const metadata: Metadata = {
  title: 'William Hardy',
  description: 'William Hardy - Real IB Tutor. IBAS: 43.75, ATAR: 99.35. Cricket NSW Academy member.',
};

const SUBJECT_SCORES = [
  { score: '7', label: 'English L&L' },
  { score: '7', label: 'Math AA SL' },
  { score: '7', label: 'Sport Science HL' },
  { score: '7', label: 'Business HL' },
  { score: '7', label: 'Geography SL' },
  { score: 'A', label: 'Business Extended Essay (30/34)' },
  { score: 'A', label: 'TOK (26/30)' },
];

const IA_ACHIEVEMENTS = [
  { score: '39/40', label: 'English IO' },
  { score: '9/10', label: 'TOK Essay' },
  { score: '23/25', label: 'Geography IA' },
  { score: '23/25', label: 'Business IA' },
  { score: '25/28', label: 'Latin IA' },
  { score: '22/24', label: 'Sport Science IA' },
  { score: '17/20', label: 'Math IA' },
];

const SUBJECTS = [
  { icon: '📖', name: 'English Language & Literature HL' },
  { icon: '∫', name: 'Mathematics AA SL' },
  { icon: '⚽', name: 'Sports, Health & Exercise Science HL' },
  { icon: '💼', name: 'Business & Management HL' },
  { icon: '🌍', name: 'Geography SL' },
  { icon: '🏛️', name: 'Latin SL' },
];

export default function WilliamPage() {
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
              src="/images/will.jpeg"
              alt="William Hardy"
              width={200}
              height={200}
              className={styles.profilePhoto}
            />
          </div>
          <div className={styles.profileInfo}>
            <h1>William Hardy</h1>
            <div className={styles.scores}>
              <div className={styles.score}>
                <span className={styles.scoreValue}>43.75</span>
                <span className={styles.scoreLabel}>IBAS</span>
              </div>
              <div className={styles.scoreDivider} aria-hidden="true" />
              <div className={styles.score}>
                <span className={styles.scoreValue}>99.35</span>
                <span className={styles.scoreLabel}>ATAR</span>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>About</h2>
            <p>
              Will has been a member of the Cricket NSW Academy from 2023-2025, competing at National carnivals and playing 1st grade in Sydney throughout the IB program. In 2026, William will commence a Bachelor of Commerce and Laws at the University of Sydney, while residing at St Paul&apos;s College.
            </p>
            <p>
              Reflecting on his IB journey, he attributes his achievements to a sustained and rigorous work ethic, asserting that irrepressible determination, strategic prioritisation, and a disciplined work–life equilibrium enable the prosperity of routines that underpin long-term success. Will further maintains that efficient achievement is facilitated by deliberately leveraging the guidance, experience, and knowledge of teachers and past IB scholars, which profoundly shaped his own approach to success.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Subject Scores</h2>
            <div className={styles.achievementsGrid}>
              {SUBJECT_SCORES.map((achievement) => (
                <article key={achievement.label} className={styles.achievementCard}>
                  <span className={styles.achievementScore}>{achievement.score}</span>
                  <span className={styles.achievementLabel}>{achievement.label}</span>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Individual Assessment Accolades</h2>
            <div className={styles.achievementsGrid}>
              {IA_ACHIEVEMENTS.map((achievement) => (
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
              Book a Session with William
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