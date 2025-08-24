import mongoose, { Schema, models } from "mongoose";

const CandidateSchema = new Schema(
  {
    name: String,
    email: String,
    whatsapp: String,
    experience: String,
    anything: String,
    file: String,
  },
  { timestamps: true }
);

const Candidate = models.Candidate || mongoose.model("Candidate", CandidateSchema);
export default Candidate;
