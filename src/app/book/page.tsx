'use client';

import { useEffect } from 'react';
import styles from './book.module.css';

export default function BookPage() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <main className={styles.bookingContainer}>
      <header className={styles.header}>
        <h1>Book a Session</h1>
        <p>Select a time that works best for you</p>
      </header>

      <div className={styles.calendlyWrapper}>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/leontitmuss5/30min?hide_gdpr_banner=1&background_color=0e0e0e&text_color=fafafa&primary_color=f5c842"
          style={{
            minWidth: '320px',
            height: '700px',
            width: '100%',
          }}
        />
      </div>
    </main>
  );
}
