import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const backendUrl = process.env.BACKEND_URL || 'http://127.0.0.1:8080';
    const response = await fetch(`${backendUrl}/dossiers`, {
      headers: {
        'X-API-Key': 'biopharma-secret-key-12345'
      }
    });
    
    console.log("Backend status:", response.status);
    const data = await response.json();
    console.log("Backend data:", data);
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
