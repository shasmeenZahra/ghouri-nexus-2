import { connectDB } from "@/lib/db";
import User from '@/models/Users';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB(); 
    const users = await User.find();
    return NextResponse.json(users); 
  } catch (error) {
    console.error('❌ API Error:', error); 
    return NextResponse.json(
      { message: 'Error fetching users' },
      { status: 500 }
    ); // ✅ Sends error message with status 500
  }
}
