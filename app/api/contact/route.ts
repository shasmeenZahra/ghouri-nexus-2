import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_NAME!;

export async function POST(req: Request) {
  try {
    console.log("📡 Connecting to MongoDB...");

    const client = await MongoClient.connect(uri);
    console.log("✅ MongoDB connected");

    const db = client.db(dbName);
    const collection = db.collection("contacts");

    const body = await req.json();

    await collection.insertOne({
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      createdAt: new Date()
    });

    console.log("📥 Contact saved:", body);

    return NextResponse.json({ message: "Contact saved successfully" });
  } catch (error) {
    console.error("❌ Error saving contact:", error);
    return NextResponse.json({ message: "Error saving contact" }, { status: 500 });
  }
}
