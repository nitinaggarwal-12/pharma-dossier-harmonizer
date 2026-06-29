import { NextResponse } from 'next/server';
import { execSync } from 'child_process';

export async function POST() {
  try {
    const backendUrl = process.env.BACKEND_URL || 'http://127.0.0.1:8080';
    const response = await fetch(`${backendUrl}/validate`, {
      method: 'POST',
      headers: {
        'X-API-Key': 'biopharma-secret-key-12345'
      }
    });
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
