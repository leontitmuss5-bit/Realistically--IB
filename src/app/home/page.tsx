import Link from 'next/link';
import Image from 'next/image';
import styles from './home.module.css';

const HERO_IMAGES = [
  '/images/507AE7AF-2266-46AE-88A7-3072F4CB2712.jpeg',
  '/images/B35D30C9-E139-4087-AFA0-91BCF4DB49F6.jpeg',
  '/images/hardy1.jpeg',
  '/images/hardy2.jpeg',
  '/images/hardy3.jpeg',
  '/images/6F20185C-1861-4A87-A75C-DC63CC2C73F1_1_105_c.jpeg',
  '/images/DA41DB0A-A496-4D11-9525-A15AD3885193_1_105_c.jpeg',
  '/images/study2.jpg',
  '/images/study1.jpeg',
  '/images/librarymodern.jpg',
  '/images/cricket2.png',
];

const VALUE_CARDS = [
  {
    icon: '/images/icons8-lightning-96.png',
    title: 'Efficiency First',
    description:
      'As athletes, we trained 20+ hours weekly. We learned to extract maximum results from minimum study time.',
  },
  {
    icon: '/images/icons8-goal-80.png',
    title: 'Strategic Approach',
    description:
      "Forget busy-work. We teach you exactly what markers want and how to deliver it consistently.",
  },
  {
    icon: '/images/icons8-mental-80.png',
    title: 'Mental Performance',
    description:
      "Competition taught us pressure management. We'll help you perform when it counts most.",
  },
  {
    icon: '/images/icons8-writing-100.png',
    title: 'EE & IA Support',
    description:
      'Specialised guidance for Extended Essays and Internal Assessments. We know what examiners want.',
  },
];

const TUTORS = [
  {
    id: 'leon',
    name: 'Leon Titmuss',
    initials: 'LT',
    ibas: '42.75',
    atar: '98.8',
    bio: 'Competed with Sydney Swans Academy U18s National Team throughout IB. Specializes in balancing elite sport and study.',
  },
  {
    id: 'patrick',
    name: 'Patrick Jones',
    initials: 'PJ',
    ibas: '45.5',
    atar: '99.95',
    bio: 'Near-perfect IB score while competing in weekly golf tournaments. Expert in high-stakes performance optimization.',
  },
  {
    id: 'william',
    name: 'William Hardy',
    initials: 'WH',
    ibas: '43.5',
    atar: '99.3',
    bio: 'Competed at national level cricket during IB. Master of time management and strategic exam preparation.',
  },
];

const SUBJECTS = [
  { icon: '📖', level: 'HL', name: 'English Language & Literature', description: 'Literary analysis, Paper 1 & 2 mastery, IO preparation' },
  { icon: '🌍', level: 'SL/HL', name: 'Geography', description: 'Case studies, fieldwork, essay techniques' },
  { icon: '💼', level: 'HL', name: 'Business & Management', description: 'Strategic analysis, case study responses, IA guidance' },
  { icon: '⚽', level: 'HL', name: 'Sports, Health & Exercise Science', description: 'Physiology, biomechanics, practical applications' },
  { icon: '📊', level: 'AI SL', name: 'Mathematics AI', description: 'Applications focus, statistics, modeling' },
  { icon: '∫', level: 'AA SL', name: 'Mathematics AA', description: 'Analysis approach, calculus, pure mathematics' },
  { icon: '🏛️', level: 'SL', name: 'Latin', description: 'Translation, literature, classical understanding' },
  { icon: '🇪🇸', level: 'Ab Initio', name: 'Spanish', description: 'Beginner to proficient, oral & written skills' },
  { icon: '🔬', level: 'SL', name: 'Biology', description: 'Core concepts, data analysis, practical skills' },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        {HERO_IMAGES.map((src, i) => (
          <div
            key={i}
            className={`${styles.heroBgAnimated} ${styles[`heroBg${i + 1}`]}`}
            style={{ backgroundImage: `url(${src})` }}
            aria-hidden="true"
          />
        ))}
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} aria-hidden="true" />
              Elite Performance. Maximum Results.
            </div>
            <h1>
              <span className={styles.realGradient}>Real</span> Methods,<br />
              <span className={styles.realGradient}>Real</span> Results.
            </h1>
            <p className={styles.heroSubtitle}>
              Real IB is a tutoring service offering the benefit of our real recent experience achieving top marks in the International Baccalaureate programme.
            </p>
            <p className={styles.heroSubtitle}>
              We are united by our common belief that achieving success through the IB shouldn&apos;t preclude following other interests—each of us completed the programme while continuing our elite sporting passions. Our realisation was that the IB enables this if its structures and aims are understood. The approach of &apos;studying smarter, not harder&apos; is one we hope to pass on through our tutoring sessions demonstrating that studying success can be part of a balanced life.
            </p>
            <p className={styles.heroSignature}>
              Will, Leon and Paddy.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>99+</span>
                <span className={styles.statLabel}>Average ATAR</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>44+</span>
                <span className={styles.statLabel}>Average IBAS</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>Elite Tutors</span>
              </div>
            </div>
            <Link href="#tutors" className={styles.ctaButton}>
              Meet Our Tutors
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
        <div className={styles.scrollIndicator} aria-hidden="true">
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.aboutSection} aria-labelledby="about-heading">
        <div className="container">
          <header className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Our Story</span>
            <h2 id="about-heading">
              About<br />
              <span className={styles.realGradient}>Real</span> IB
            </h2>
          </header>
          <div className={styles.aboutContent}>
            <p>
              During our own IB journeys, we quickly realised how different the program was from the HSC our friends were studying. The IB has its own philosophy, logic, and approach to learning. It was one that isn&apos;t always intuitive at first.
            </p>
            <p>
              Balancing the demands of the IB with already full schedules pushed us to develop our own study methods. We focused on streamlining the our learning processes, making our study time more effective, and, importantly, more enjoyable.
            </p>
            <p>
              When those methods began to pay off, we decided to startup Real IB Tutoring. We created it to support students in the same position we once were by providing the tools, strategies, and guidance they need to excel in the IB, without having to sacrifice the things they love. We know that the cliche &quot;Study Smarter, Not Harder&quot; is one that every student wants but struggles to achieve, our ultimate goal is to simplify that process.
            </p>
          </div>
        </div>
      </section>

      {/* Value Section */}
      <section className={styles.valueSection} aria-labelledby="value-heading">
        <h2 id="value-heading" className="sr-only">Our Value Proposition</h2>
        <div className="container">
          <div className={styles.valueGrid}>
            {VALUE_CARDS.map((card) => (
              <article key={card.title} className={styles.valueCard}>
                <div className={styles.valueIcon} aria-hidden="true">
                  <Image src={card.icon} alt="" width={40} height={40} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Tutors Section */}
      <section id="tutors" className={styles.tutorsSection} aria-labelledby="tutors-heading">
        <div className="container">
          <header className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Our Team</span>
            <h2 id="tutors-heading">
              Meet Your<br />
              <span className={styles.gradientText}>Tutors</span>
            </h2>
            <p>Three athletes who mastered the IB while competing at national level.</p>
          </header>
          <div className={styles.tutorsGrid}>
            {TUTORS.map((tutor) => (
              <Link
                key={tutor.id}
                href={`/tutors/${tutor.id}`}
                className={styles.tutorCardLink}
              >
                <article className={styles.tutorCard}>
                  <div className={styles.tutorImage}>
                    <div className={styles.tutorPlaceholder}>{tutor.initials}</div>
                  </div>
                  <div className={styles.tutorInfo}>
                    <h3>{tutor.name}</h3>
                    <div className={styles.tutorScores}>
                      <div className={styles.score}>
                        <span className={styles.scoreValue}>{tutor.ibas}</span>
                        <span className={styles.scoreLabel}>IBAS</span>
                      </div>
                      <div className={styles.scoreDivider} aria-hidden="true" />
                      <div className={styles.score}>
                        <span className={styles.scoreValue}>{tutor.atar}</span>
                        <span className={styles.scoreLabel}>ATAR</span>
                      </div>
                    </div>
                    <p className={styles.tutorBio}>{tutor.bio}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section id="subjects" className={styles.subjectsSection} aria-labelledby="subjects-heading">
        <div className="container">
          <header className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Expertise</span>
            <h2 id="subjects-heading">
              Subject<br />
              <span className={styles.gradientText}>Specialisations</span>
            </h2>
            <p>Comprehensive coverage across the IB curriculum.</p>
          </header>
          <div className={styles.subjectsGrid}>
            {SUBJECTS.map((subject) => (
              <article key={subject.name} className={styles.subjectCard}>
                <div className={styles.subjectIcon} aria-hidden="true">{subject.icon}</div>
                <span className={styles.subjectLevel}>{subject.level}</span>
                <h4>{subject.name}</h4>
                <p>{subject.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className={styles.pricingSection} aria-labelledby="pricing-heading">
        <div className="container">
          <header className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Pricing & Programs</span>
            <h2 id="pricing-heading">Choose Your Path</h2>
            <p>Flexible options designed to fit your schedule and goals</p>
          </header>
          
          <div className={styles.pricingGrid}>
            {/* Casual 1-on-1 Tutoring */}
            <article className={styles.pricingCard}>
              <header className={styles.pricingHeader}>
                <h3>Casual 1-on-1 Tutoring</h3>
                <div className={styles.pricingAmount}>
                  <span className={styles.priceValue}>$65</span>
                  <span className={styles.pricePeriod}>/ hour</span>
                </div>
              </header>
              <div className={styles.pricingDivider} aria-hidden="true" />
              <p className={styles.pricingDescription}>
                Flexible, one-off or as-needed IB tutoring sessions tailored to your subject and level.
              </p>
              <Link href="/book" className={styles.pricingButton}>
                Book Now
              </Link>
            </article>

            {/* IB Term Accelerator */}
            <article className={`${styles.pricingCard} ${styles.featured}`}>
              <span className={styles.recommendedBadge}>Most Popular</span>
              <header className={styles.pricingHeader}>
                <h3>IB Term Accelerator</h3>
                <div className={styles.pricingAmount}>
                  <span className={styles.priceValue}>$500</span>
                  <span className={styles.pricePeriod}>/ term</span>
                </div>
                <span className={styles.priceEquivalent}>Equivalent of $50 per session</span>
              </header>
              <div className={styles.pricingDivider} aria-hidden="true" />
              <p className={styles.pricingTagline}>Our most popular option for consistent improvement.</p>
              <ul className={styles.pricingFeatures}>
                <li>10 weeks</li>
                <li>1× 60-minute session per week</li>
                <li>Personalised study planning</li>
                <li>Exam-focused strategy and feedback</li>
              </ul>
              <Link href="/book" className={styles.pricingButton}>
                Book Now
              </Link>
            </article>
          </div>

          <p className={styles.pricingNote}>Limited spots available to ensure quality tutoring.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.ctaSection} aria-labelledby="contact-heading">
        <div className="container">
          <div className={styles.ctaContent}>
            <h2 id="contact-heading">Ready to Excel?</h2>
            <p>Join our students who achieve top IB scores while living balanced lives.</p>
            <Link href="/book" className={styles.ctaButton}>
              Get Started Today
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}