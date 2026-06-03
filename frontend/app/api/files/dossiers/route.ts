import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    let response;
    try {
      response = await fetch(`http://localhost:8080/files/dossiers?_cb=${Date.now()}`, {
        cache: 'no-store',
        headers: { 'X-API-Key': 'biopharma-secret-key-12345' }
      });
    } catch (err) {
      response = await fetch(`http://127.0.0.1:8080/files/dossiers?_cb=${Date.now()}`, {
        cache: 'no-store',
        headers: { 'X-API-Key': 'biopharma-secret-key-12345' }
      });
    }
    if (!response.ok) return NextResponse.json([]);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json([]);
  }
}
