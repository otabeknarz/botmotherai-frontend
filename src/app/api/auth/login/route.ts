import { login } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.formData();
  const success = await login(formData);

  if (success) {
    return NextResponse.json({ message: 'Logged in successfully' });
  }

  return NextResponse.json(
    { message: 'Invalid credentials' },
    { status: 401 }
  );
} 