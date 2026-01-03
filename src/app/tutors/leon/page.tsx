import Link from 'next/link';
import { Metadata } from 'next';
import styles from '../tutor.module.css';

export const metadata: Metadata = {
  title: 'Leon Titmuss',
  description: 'Leon Titmuss - Real IB Tutor. IBAS: 42.75, ATAR: 98.8. Competed with Sydney Swans Academy U18s.',
};

const SUBJECT_SCORES = [
  { score: '7', label: 'Biology SL' },
  { score: '7', label: 'Geography HL' },
  { score: '7', label: 'Sports, Health and Exercise Science HL' },
  { score: 'A', label: 'Sports, Health and Exercise Science EE (29/34)' },
];

const ASSESSMENT_ACCOLADES = [
  { score: '19/20', label: 'English Language and Literature HL Essay' },
  { score: '18/20', label: 'Mathematics AA SL IA' },
  { score: '27/30', label: 'Biology Paper 1' },
  { score: '24/26', label: 'Geography HL Paper 3' },
  { score: '21/25', label: 'Geography HL IA' },
  { score: '21/24', label: 'Sports, Health and Exercise Science HL IA' },
];

const SUBJECTS = [
  { icon: '📖', name: 'English Language & Literature HL' },
  { icon: '⚽', name: 'Sports, Health & Exercise Science HL' },
  { icon: '🔬', name: 'Biology SL' },
  { icon: '🇪🇸', name: 'Spanish Ab Initio' },
  { icon: '🌍', name: 'Geography HL' },
  { icon: '📊', name: 'Mathematics AA SL' },
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
              During my two years completing the IB, I competed with the Sydney Swans Academy U18s National Team. This required a commitment of over 12 hours of training each week, along with regular interstate travel for competition. Alongside this, I continued to pursue interests that mattered to me, including DJing at events and sprint training, where I won multiple AAGPS events throughout Years 11 and 12.
            </p>
            <p>
              Balancing elite sport with the academic intensity of the IB was challenging, and at times overwhelming. Many evenings involved returning home at 8pm after training, knowing I still had hours of work ahead. These moments forced me to reflect on how I studied and to move away from inefficient habits. I learned to prioritise focus, structure my time carefully, and make the most of every study session rather than relying on long hours.
            </p>
            <p>
              In 2026, I will commence a Bachelor of Design in Architecture at the University of Sydney—an outcome made possible by these skills I developed during the IB that allowed me to achieve strong results while continuing to enjoy both my studies and my passions.
            </p>
            <p>
              I am motivated to support students facing similar challenges, helping them maintain balance, pursue their interests, and excel academically.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Subject Scores</h2>
            <div className={styles.achievementsGrid}>
              {SUBJECT_SCORES.map((item) => (
                <article key={item.label} className={styles.achievementCard}>
                  <span className={styles.achievementScore}>{item.score}</span>
                  <span className={styles.achievementLabel}>{item.label}</span>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>Individual Assessment Accolades</h2>
            <div className={styles.achievementsGrid}>
              {ASSESSMENT_ACCOLADES.map((item) => (
                <article key={item.label} className={styles.achievementCard}>
                  <span className={styles.achievementScore}>{item.score}</span>
                  <span className={styles.achievementLabel}>{item.label}</span>
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
