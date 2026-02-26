import { NextResponse } from 'next/server';

// Omega Master backend URL (configurable via env)
const OMEGA_API_URL = process.env.NEXT_PUBLIC_OMEGA_API_URL || 'http://localhost:8000';

export async function GET() {
  try {
    const response = await fetch(`${OMEGA_API_URL}/telemetry`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch telemetry');
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Telemetry fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch telemetry' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const response = await fetch(`${OMEGA_API_URL}/telemetry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    
    if (!response.ok) {
      throw new Error('Failed to post telemetry');
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Telemetry post error:', error);
    return NextResponse.json(
      { error: 'Failed to post telemetry' },
      { status: 500 }
    );
  }
}
