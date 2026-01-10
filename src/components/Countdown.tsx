'use client';

import { useState, useEffect } from 'react';
import styles from './Countdown.module.css';

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const calculateTimeLeft = (): TimeLeft | null => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        return null;
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className={styles.countdown}>
        <div className={styles.countdownLabel}>Offer ends in:</div>
        <div className={styles.countdownTimer}>
          <div className={styles.timeBlock}>
            <span className={styles.timeValue}>--</span>
            <span className={styles.timeUnit}>days</span>
          </div>
          <span className={styles.separator}>:</span>
          <div className={styles.timeBlock}>
            <span className={styles.timeValue}>--</span>
            <span className={styles.timeUnit}>hrs</span>
          </div>
          <span className={styles.separator}>:</span>
          <div className={styles.timeBlock}>
            <span className={styles.timeValue}>--</span>
            <span className={styles.timeUnit}>min</span>
          </div>
          <span className={styles.separator}>:</span>
          <div className={styles.timeBlock}>
            <span className={styles.timeValue}>--</span>
            <span className={styles.timeUnit}>sec</span>
          </div>
        </div>
      </div>
    );
  }

  if (!timeLeft) {
    return (
      <div className={styles.countdown}>
        <div className={styles.expired}>Offer has ended</div>
      </div>
    );
  }

  return (
    <div className={styles.countdown}>
      <div className={styles.countdownLabel}>Offer ends in:</div>
      <div className={styles.countdownTimer}>
        <div className={styles.timeBlock}>
          <span className={styles.timeValue}>{timeLeft.days.toString().padStart(2, '0')}</span>
          <span className={styles.timeUnit}>days</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.timeBlock}>
          <span className={styles.timeValue}>{timeLeft.hours.toString().padStart(2, '0')}</span>
          <span className={styles.timeUnit}>hrs</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.timeBlock}>
          <span className={styles.timeValue}>{timeLeft.minutes.toString().padStart(2, '0')}</span>
          <span className={styles.timeUnit}>min</span>
        </div>
        <span className={styles.separator}>:</span>
        <div className={styles.timeBlock}>
          <span className={styles.timeValue}>{timeLeft.seconds.toString().padStart(2, '0')}</span>
          <span className={styles.timeUnit}>sec</span>
        </div>
      </div>
    </div>
  );
}
