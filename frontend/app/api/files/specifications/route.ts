import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const response = await fetch(`http://127.0.0.1:8080/files/specifications?_cb=${Date.now()}`, {
      cache: 'no-store',
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
