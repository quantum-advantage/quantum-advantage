import { NextResponse } from 'next/server';

const OMEGA_API_URL = process.env.NEXT_PUBLIC_OMEGA_API_URL || 'http://localhost:8000';

export async function GET() {
  try {
    const response = await fetch(`${OMEGA_API_URL}/agents/status`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch agent status');
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Agent status fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch agent status' },
      { status: 500 }
    );
  }
}
