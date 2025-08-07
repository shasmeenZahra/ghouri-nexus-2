import { connectDB } from '@/lib/db';
import User from '@/models/Users';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    const users = await User.find(); // ✅ should work now
    return NextResponse.json(users);
  } catch (error) {
    console.error('❌ API Error:', error); // 👈 This will help us debug
    return NextResponse.json({ message: 'Error fetching users' }, { status: 500 });
  }
}
