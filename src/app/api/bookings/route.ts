import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { saveBooking, isSlotAvailable, incrementSlotBooking } from '@/lib/storage';
import { sendBookingEmail } from '@/lib/email';
import { Booking, BookingFormData } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body: BookingFormData = await request.json();
    
    const { studentName, email, subject, dayOfWeek, time, notes } = body;

    // Validate required fields
    if (!studentName || !email || !subject || !dayOfWeek || !time) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if slot is still available
    if (!isSlotAvailable(dayOfWeek, time)) {
      return NextResponse.json(
        { message: 'This time slot is no longer available. Please select another.' },
        { status: 409 }
      );
    }

    // Increment slot booking count
    const slotUpdated = incrementSlotBooking(dayOfWeek, time);
    if (!slotUpdated) {
      return NextResponse.json(
        { message: 'Failed to reserve time slot. Please try again.' },
        { status: 500 }
      );
    }

    // Create booking
    const booking: Booking = {
      id: uuidv4(),
      studentName,
      email,
      subject,
      dayOfWeek,
      time,
      notes,
      createdAt: new Date().toISOString(),
    };

    // Save booking
    saveBooking(booking);

    // Send email notification
    await sendBookingEmail(booking);

    return NextResponse.json(
      { message: 'Booking submitted successfully', booking },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { message: 'Failed to create booking' },
      { status: 500 }
    );
  }
}