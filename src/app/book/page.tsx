'use client';

import { useState, useEffect } from 'react';
import { TimeSlot, BookingFormData } from '@/types';
import styles from './book.module.css';

const SUBJECTS = [
  'English Language & Literature',
  'Business Management',
  'Geography',
  'Sports Science (SEHS)',
  'Biology',
  'Mathematics: Applications & Interpretation',
  'Spanish ab initio',
  'Latin',
  'English IO Coaching',
  'TOK Essay & Exhibition',
  'Extended Essay (EE)',
  'CAS Support',
];

const DAY_LABELS: Record<string, string> = {
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  sunday: 'Sunday',
};

function formatTime(time: string): string {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
}

export default function BookPage() {
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [studentName, setStudentName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    fetchSlots();
  }, []);

  async function fetchSlots() {
    try {
      const response = await fetch('/api/slots');
      if (!response.ok) throw new Error('Failed to fetch slots');
      const data = await response.json();
      setSlots(data);
    } catch (err) {
      setError('Failed to load available slots. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  const availableDays = [...new Set(slots.map(s => s.dayOfWeek))];
  const timesForDay = slots
    .filter(s => s.dayOfWeek === selectedDay)
    .sort((a, b) => a.time.localeCompare(b.time));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const bookingData: BookingFormData = {
      studentName,
      email,
      subject: selectedSubject,
      dayOfWeek: selectedDay,
      time: selectedTime,
      notes: notes || undefined,
    };

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to submit booking');
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to submit booking');
    } finally {
      setSubmitting(false);
    }
  }

  function resetBooking() {
    setSuccess(false);
    setSelectedSubject('');
    setSelectedDay('');
    setSelectedTime('');
    setStudentName('');
    setEmail('');
    setNotes('');
    fetchSlots();
  }

  if (success) {
    return (
      <main className={styles.bookingContainer}>
        <div className={styles.successMessage} role="alert">
          <h2>Booking Request Submitted!</h2>
          <p>Your booking request has been received. We&apos;ll confirm your session via email shortly.</p>
          <button onClick={resetBooking} className={styles.button}>
            Book Another Session
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.bookingContainer}>
      <header className={styles.header}>
        <h1>Book a Session</h1>
        <p>Select your subject and preferred weekly time slot</p>
      </header>

      {loading ? (
        <div className={styles.loading} role="status" aria-live="polite">
          Loading available slots...
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Step 1: Subject */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Choose Your Subject</h2>
            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Subject *</label>
              <select
                id="subject"
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                required
                className={styles.select}
              >
                <option value="">Select a subject</option>
                {SUBJECTS.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </section>

          {/* Step 2: Day */}
          {selectedSubject && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Choose Your Preferred Day</h2>
              <div className={styles.dayGrid} role="radiogroup" aria-label="Select day of week">
                {Object.entries(DAY_LABELS).map(([dayKey, dayLabel]) => {
                  const isAvailable = availableDays.includes(dayKey);
                  return (
                    <button
                      key={dayKey}
                      type="button"
                      onClick={() => {
                        if (isAvailable) {
                          setSelectedDay(dayKey);
                          setSelectedTime('');
                        }
                      }}
                      className={`${styles.dayButton} ${selectedDay === dayKey ? styles.selected : ''} ${!isAvailable ? styles.unavailable : ''}`}
                      disabled={!isAvailable}
                      aria-pressed={selectedDay === dayKey}
                    >
                      {dayLabel}
                      {!isAvailable && <span className={styles.badge}>Full</span>}
                    </button>
                  );
                })}
              </div>
            </section>
          )}

          {/* Step 3: Time */}
          {selectedDay && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>3. Choose Your Preferred Time</h2>
              <div className={styles.timeGrid} role="radiogroup" aria-label="Select time slot">
                {timesForDay.length === 0 ? (
                  <p className={styles.noSlots}>No available slots for this day.</p>
                ) : (
                  timesForDay.map(slot => {
                    const spotsLeft = slot.capacity - slot.booked;
                    return (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => setSelectedTime(slot.time)}
                        className={`${styles.timeButton} ${selectedTime === slot.time ? styles.selected : ''}`}
                        aria-pressed={selectedTime === slot.time}
                      >
                        {formatTime(slot.time)}
                        <span className={styles.spots}>{spotsLeft} left</span>
                      </button>
                    );
                  })
                )}
              </div>
            </section>
          )}

          {/* Step 4: Details */}
          {selectedTime && (
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>4. Your Details</h2>

              {error && (
                <div className={styles.error} role="alert">
                  {error}
                </div>
              )}

              <div className={styles.formGrid}>
                <div className={styles.formGroup}>
                  <label htmlFor="studentName" className={styles.label}>Full Name *</label>
                  <input
                    type="text"
                    id="studentName"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email *</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.formGroupFull}>
                  <label htmlFor="notes" className={styles.label}>Notes (optional)</label>
                  <textarea
                    id="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Any specific topics you'd like to focus on or concerns you have..."
                    rows={4}
                    className={styles.textarea}
                  />
                </div>
              </div>

              <div className={styles.summary}>
                <h3>Booking Summary</h3>
                <p><strong>Subject:</strong> {selectedSubject}</p>
                <p><strong>Day:</strong> {DAY_LABELS[selectedDay]}</p>
                <p><strong>Time:</strong> {formatTime(selectedTime)}</p>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className={styles.submitButton}
              >
                {submitting ? 'Submitting...' : 'Submit Booking Request'}
              </button>
            </section>
          )}
        </form>
      )}
    </main>
  );
}