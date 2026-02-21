import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({ drafts: [] });
}

export async function POST(request: NextRequest) {
  const payload = await request.json();
  return NextResponse.json({ ok: true, draft: payload });
}
