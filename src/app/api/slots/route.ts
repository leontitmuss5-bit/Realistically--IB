import { NextResponse } from 'next/server';
import { getAvailableSlots } from '@/lib/storage';

export async function GET() {
  try {
    const slots = getAvailableSlots();
    return NextResponse.json(slots);
  } catch (error) {
    console.error('Error fetching slots:', error);
    return NextResponse.json(
      { message: 'Failed to fetch available slots' },
      { status: 500 }
    );
  }
}