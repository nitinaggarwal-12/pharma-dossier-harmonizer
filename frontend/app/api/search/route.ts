import { NextResponse } from 'next/server';
import { execSync } from 'child_process';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q');
    const region = searchParams.get('region');
    
    const backendUrl = process.env.BACKEND_URL || 'http://127.0.0.1:8080';
    const url = new URL(`${backendUrl}/search`);
    if (q) url.searchParams.append('q', q);
    if (region) url.searchParams.append('region', region);
    
    const response = await fetch(url.toString(), {
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
