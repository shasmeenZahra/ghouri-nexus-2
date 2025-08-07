'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Backend API ya MongoDB integration yahan hoga
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        onChange={handleChange}
        className="w-full p-3 border rounded-md bg-slate-800 text-white"
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        onChange={handleChange}
        className="w-full p-3 border rounded-md bg-slate-800 text-white"
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        onChange={handleChange}
        rows={4}
        className="w-full p-3 border rounded-md bg-slate-800 text-white"
        required
      />
      <button type="submit" className="bg-cyan-500 text-white px-6 py-3 rounded hover:bg-cyan-600">
        Submit
      </button>
    </form>
  );
}
