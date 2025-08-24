import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Candidate from "@/models/candidate";

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();
    console.log("📩 Received Candidate:", body);

    const newCandidate = new Candidate(body);
    await newCandidate.save();

    return NextResponse.json({ message: "Candidate saved successfully!" });
  } catch (error) {
    console.error("❌ Error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
