"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type CandidateForm = {
  name: string;
  email: string;
  whatsapp: string;
  experience: string;
  anything: string;
  file: File | null;
  portfolio: string; // ✅ added portfolio here
};

export default function CandidatePage() {
  // ✅ state with portfolio
  const [form, setForm] = useState<CandidateForm>({
    name: "",
    email: "",
    whatsapp: "",
    experience: "",
    anything: "",
    file: null,
    portfolio: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setForm({
        ...form,
        file: (e.target as HTMLInputElement).files?.[0] || null,
      });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("whatsapp", form.whatsapp);
    formData.append("experience", form.experience);
    formData.append("anything", form.anything);
    formData.append("portfolio", form.portfolio); // ✅ added portfolio to backend
    if (form.file) {
      formData.append("file", form.file);
    }

    const res = await fetch("/api/candidate", {
      method: "POST",
      body: formData,
    });

    const result = await res.json();
    alert(result.message);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Apply as a <span className="gradient-text">Candidate</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Fill out the application form below and join our growing team.
        </p>
      </section>

      {/* Candidate Form */}
      <main className="flex-grow flex items-center justify-center px-4 pb-20">
        <Card className="w-full max-w-2xl bg-slate-800/50 border-slate-700 card-glow">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-white">
              Candidate <span className="gradient-text">Form</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <Input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="bg-slate-700/50 border-slate-600 text-white"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="bg-slate-700/50 border-slate-600 text-white"
                  required
                />
              </div>

              {/* WhatsApp */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  WhatsApp *
                </label>
                <Input
                  type="text"
                  name="whatsapp"
                  value={form.whatsapp}
                  onChange={handleChange}
                  className="bg-slate-700/50 border-slate-600 text-white"
                  required
                />
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  CV/Resume Upload *
                </label>
                <Input
                  type="file"
                  name="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  className="bg-slate-700/50 border-slate-600 text-white"
                  required
                />
              </div>

              {/* Portfolio */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Portfolio
                </label>
                <Input
                  type="url"
                  name="portfolio"
                  value={form.portfolio}
                  onChange={handleChange}
                  placeholder="Portfolio Link (Behance, GitHub, Dribbble, etc.)"
                  className="bg-slate-700/50 border-slate-600 text-white"
                  required
                />
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Job Experience
                </label>
                <Textarea
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  className="bg-slate-700/50 border-slate-600 text-white"
                  rows={3}
                />
              </div>

              {/* Anything */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Write Anything
                </label>
                <Textarea
                  name="anything"
                  value={form.anything}
                  onChange={handleChange}
                  className="bg-slate-700/50 border-slate-600 text-white"
                  rows={3}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
              >
                Submit Application
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
