import type { Metadata } from 'next';
import '@/styles/globals.css';

const BASE_URL = 'https://real-ib.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: '%s | Real IB Tutoring',
    default: 'Real IB Tutoring | Expert International Baccalaureate Tutors Australia',
  },
  description:
    'Real IB Tutoring offers 1-on-1 IB tutoring from tutors who scored 99+ ATARs while competing at national level sport. Expert help with IB English, Geography, Business, Math, Biology, Extended Essays & IAs. Online or in-person across Australia.',
  keywords: [
    'Real IB Tutoring',
    'IB tutoring',
    'International Baccalaureate tutoring',
    'IB tutors Australia',
    'IB tutor Sydney',
    'IB tutor Melbourne',
    'IB English tutor',
    'IB Math tutor',
    'IB Biology tutor',
    'IB Geography tutor',
    'IB Business tutor',
    'Extended Essay help',
    'IB IA help',
    'IB exam preparation',
    'online IB tutoring',
  ],
  authors: [{ name: 'Real IB Tutoring' }],
  creator: 'Real IB Tutoring',
  publisher: 'Real IB Tutoring',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Real IB Tutoring | Expert IB Tutors by 99+ ATAR Athletes',
    description:
      'Real IB Tutoring: Study smarter, not harder. Learn efficient IB strategies from tutors who balanced national-level sport with top academic results. Expert International Baccalaureate tutoring across Australia.',
    type: 'website',
    url: BASE_URL,
    siteName: 'Real IB Tutoring',
    locale: 'en_AU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real IB Tutoring | Expert International Baccalaureate Tutors',
    description:
      '1-on-1 IB tutoring from 99+ ATAR athletes. Expert help with all IB subjects. Online or in-person across Australia.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}