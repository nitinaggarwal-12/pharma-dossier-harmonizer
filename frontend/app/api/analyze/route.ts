import { NextResponse } from 'next/server';
import { execSync } from 'child_process';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const response = await fetch('http://localhost:8080/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': 'biopharma-secret-key-12345'
      },
      body: JSON.stringify(body)
    });
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
