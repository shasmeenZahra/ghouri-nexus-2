import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Candidate from "@/models/candidate";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const newCandidate = {
      name: formData.get("name"),
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp"),
      experience: formData.get("experience"),
      anything: formData.get("anything"),
      file: formData.get("file")?.toString() || "",
    };

    await connectDB();
    const savedCandidate = await Candidate.create(newCandidate);

    console.log("📥 Candidate saved:", savedCandidate);

    return NextResponse.json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error("❌ Error saving candidate:", error);
    return NextResponse.json(
      { message: "Error submitting form" },
      { status: 500 }
    );
  }
}
