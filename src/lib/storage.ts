/**
 * File-based storage for bookings and time slots.
 * In production, replace with a proper database (PostgreSQL, MongoDB, etc.)
 */

import fs from 'fs';
import path from 'path';
import { Booking, TimeSlot } from '@/types';

const DATA_DIR = path.join(process.cwd(), 'data');
const BOOKINGS_FILE = path.join(DATA_DIR, 'bookings.json');
const SLOTS_FILE = path.join(DATA_DIR, 'slots.json');

/**
 * Ensure data directory and files exist
 */
function ensureDataFiles(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (!fs.existsSync(BOOKINGS_FILE)) {
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify([], null, 2));
  }

  if (!fs.existsSync(SLOTS_FILE)) {
    const defaultSlots = generateDefaultSlots();
    fs.writeFileSync(SLOTS_FILE, JSON.stringify(defaultSlots, null, 2));
  }
}

/**
 * Generate default time slots for each day of the week.
 * Weekdays: 4pm-7pm (hourly)
 * Weekends: 10am-5pm (hourly)
 * Each slot has a capacity of 3 bookings.
 */
function generateDefaultSlots(): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  
  const weekdayTimes = ['16:00', '17:00', '18:00', '19:00'];
  const weekendTimes = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
  
  daysOfWeek.forEach(day => {
    const isWeekend = day === 'saturday' || day === 'sunday';
    const times = isWeekend ? weekendTimes : weekdayTimes;
    
    times.forEach(time => {
      slots.push({
        id: `${day}-${time}`,
        dayOfWeek: day,
        time,
        capacity: 3,
        booked: 0,
        available: true,
      });
    });
  });
  
  return slots;
}

/**
 * Read all bookings from storage
 */
export function getBookings(): Booking[] {
  ensureDataFiles();
  try {
    const data = fs.readFileSync(BOOKINGS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading bookings:', error);
    return [];
  }
}

/**
 * Save a new booking
 */
export function saveBooking(booking: Booking): void {
  ensureDataFiles();
  const bookings = getBookings();
  bookings.push(booking);
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
}

/**
 * Read all time slots from storage
 */
export function getSlots(): TimeSlot[] {
  ensureDataFiles();
  try {
    const data = fs.readFileSync(SLOTS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading slots:', error);
    return [];
  }
}

/**
 * Update slot booking count
 */
export function incrementSlotBooking(dayOfWeek: string, time: string): boolean {
  ensureDataFiles();
  try {
    const slots = getSlots();
    const slot = slots.find(s => s.dayOfWeek === dayOfWeek && s.time === time);
    
    if (!slot) {
      return false;
    }
    
    if (slot.booked >= slot.capacity) {
      return false;
    }
    
    slot.booked += 1;
    
    if (slot.booked >= slot.capacity) {
      slot.available = false;
    }
    
    fs.writeFileSync(SLOTS_FILE, JSON.stringify(slots, null, 2));
    return true;
  } catch (error) {
    console.error('Error updating slot:', error);
    return false;
  }
}

/**
 * Check if a slot is available
 */
export function isSlotAvailable(dayOfWeek: string, time: string): boolean {
  const slots = getSlots();
  const slot = slots.find(s => s.dayOfWeek === dayOfWeek && s.time === time);
  return slot ? (slot.available && slot.booked < slot.capacity) : false;
}

/**
 * Get available slots (filtered by capacity)
 */
export function getAvailableSlots(): TimeSlot[] {
  const slots = getSlots();
  return slots.filter(slot => slot.available && slot.booked < slot.capacity);
}