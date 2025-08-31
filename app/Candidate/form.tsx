"use client";
import { useState } from "react";

export default function CandidateForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget); // ✅ yehi sahi tareeqa hai

    try {
      const res = await fetch("/api/admin/users/candidate", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error("❌ Error submitting form:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
<<<<<<< HEAD
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-slate-800 rounded-xl">
      <input type="text" name="name" placeholder="Full Name" className="w-full p-2 rounded bg-slate-700 text-white" required />
      <input type="email" name="email" placeholder="Email" className="w-full p-2 rounded bg-slate-700 text-white" required />
      <input type="text" name="whatsapp" placeholder="WhatsApp Number" className="w-full p-2 rounded bg-slate-700 text-white" required />
      <input type="text" name="experience" placeholder="Experience" className="w-full p-2 rounded bg-slate-700 text-white" />
      <textarea name="anything" placeholder="Anything else..." className="w-full p-2 rounded bg-slate-700 text-white" />
      <input type="file" name="file" className="w-full p-2 rounded bg-slate-700 text-white" />

      <button type="submit" disabled={loading} className="px-4 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700">
=======
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 bg-slate-800 rounded-xl"
    >
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        className="w-full p-2 rounded bg-slate-700 text-white"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full p-2 rounded bg-slate-700 text-white"
        required
      />
      <input
        type="text"
        name="whatsapp"
        placeholder="WhatsApp Number"
        className="w-full p-2 rounded bg-slate-700 text-white"
        required
      />


      <input
        type="url"
        name="portfolio"
        placeholder="Portfolio Link (e.g. Behance, GitHub, Dribbble)"
        className="w-full p-2 rounded bg-slate-700 text-white"
      />

      <input
        type="text"
        name="experience"
        placeholder="Experience"
        className="w-full p-2 rounded bg-slate-700 text-white"
      />
      <textarea
        name="anything"
        placeholder="Anything else..."
        className="w-full p-2 rounded bg-slate-700 text-white"
      />
      <input
        type="file"
        name="file"
        className="w-full p-2 rounded bg-slate-700 text-white"
      />

      <button
        type="submit"
        disabled={loading}
        className="px-4 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700"
      >
>>>>>>> 413427f (edit ke baad update kiya)
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
