export interface TimeSlot {
  id: string;
  dayOfWeek: string;
  time: string;
  capacity: number;
  booked: number;
  available: boolean;
}

export interface Booking {
  id: string;
  studentName: string;
  email: string;
  subject: string;
  dayOfWeek: string;
  time: string;
  notes?: string;
  createdAt: string;
}

export interface BookingFormData {
  studentName: string;
  email: string;
  subject: string;
  dayOfWeek: string;
  time: string;
  notes?: string;
}

export interface Tutor {
  id: string;
  name: string;
  initials: string;
  ibas: string;
  atar: string;
  bio: string;
  featured?: boolean;
  subjects: TutorSubject[];
  achievements: Achievement[];
  aboutText: string[];
}

export interface TutorSubject {
  name: string;
  level: 'HL' | 'SL' | 'Ab Initio';
  icon: string;
}

export interface Achievement {
  score: string;
  label: string;
}