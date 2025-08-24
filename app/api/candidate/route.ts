import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Candidate from "@/models/candidate";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // File ko handle karna
    const file = formData.get("file") as File | null;
    let fileBase64 = "";

    if (file) {
      const arrayBuffer = await file.arrayBuffer();
      fileBase64 = Buffer.from(arrayBuffer).toString("base64");
    }

    // Candidate object
    const newCandidate = {
      name: formData.get("name"),
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp"),
      experience: formData.get("experience"),
      anything: formData.get("anything"),
      file: fileBase64, 
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
