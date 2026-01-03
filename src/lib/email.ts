/**
 * Email utility for sending booking notifications.
 * Configure with your email service (SendGrid, Resend, Nodemailer, etc.)
 */

import { Booking } from '@/types';

const EMAIL_TO = process.env.BOOKING_EMAIL || 'contactrealib@gmail.com';

const DAY_LABELS: Record<string, string> = {
  monday: 'Monday',
  tuesday: 'Tuesday',
  wednesday: 'Wednesday',
  thursday: 'Thursday',
  friday: 'Friday',
  saturday: 'Saturday',
  sunday: 'Sunday',
};

function formatDayOfWeek(dayOfWeek: string): string {
  return DAY_LABELS[dayOfWeek] || dayOfWeek;
}

/**
 * Format booking data into a structured plain-text email
 */
export function formatBookingEmail(booking: Booking): string {
  const dayLabel = formatDayOfWeek(booking.dayOfWeek);
  
  return `
NEW BOOKING REQUEST - Real IB

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

STUDENT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${booking.studentName}
Email: ${booking.email}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SESSION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Subject: ${booking.subject}
Day: ${dayLabel}
Time: ${booking.time}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

NOTES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${booking.notes || 'No additional notes provided.'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BOOKING METADATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Booking ID: ${booking.id}
Submitted: ${new Date(booking.createdAt).toLocaleString('en-AU', {
  dateStyle: 'full',
  timeStyle: 'short'
})}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `.trim();
}

/**
 * Format booking email as HTML
 */
export function formatBookingEmailHTML(booking: Booking): string {
  const dayLabel = formatDayOfWeek(booking.dayOfWeek);
  
  return `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .header { background: #000; color: #fff; padding: 20px; text-align: center; }
    .content { padding: 20px; }
    .section { margin: 20px 0; padding: 15px; border-left: 3px solid #000; }
    .label { font-weight: bold; color: #000; }
    .footer { background: #f5f5f5; padding: 15px; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="header">
    <h1>NEW BOOKING REQUEST - Real IB</h1>
  </div>
  <div class="content">
    <div class="section">
      <h2>Student Information</h2>
      <p><span class="label">Name:</span> ${booking.studentName}</p>
      <p><span class="label">Email:</span> ${booking.email}</p>
    </div>
    <div class="section">
      <h2>Session Details</h2>
      <p><span class="label">Subject:</span> ${booking.subject}</p>
      <p><span class="label">Day:</span> ${dayLabel}</p>
      <p><span class="label">Time:</span> ${booking.time}</p>
    </div>
    <div class="section">
      <h2>Notes</h2>
      <p>${booking.notes || 'No additional notes provided.'}</p>
    </div>
  </div>
  <div class="footer">
    <p><strong>Booking ID:</strong> ${booking.id}</p>
    <p><strong>Submitted:</strong> ${new Date(booking.createdAt).toLocaleString('en-AU', {
      dateStyle: 'full',
      timeStyle: 'short'
    })}</p>
  </div>
</body>
</html>
  `.trim();
}

/**
 * Send booking email.
 * 
 * NOTE: This is a placeholder. Integrate with an email service:
 * - SendGrid: https://sendgrid.com/
 * - Resend: https://resend.com/
 * - Nodemailer: https://nodemailer.com/
 */
export async function sendBookingEmail(booking: Booking): Promise<boolean> {
  // TODO: Implement actual email sending
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('BOOKING EMAIL (would be sent to:', EMAIL_TO, ')');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(formatBookingEmail(booking));
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  
  return true;
}