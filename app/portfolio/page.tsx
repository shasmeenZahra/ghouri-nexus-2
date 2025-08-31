"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Code, Filter, Search, Globe, ShoppingCart } from "lucide-react";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
    {
      id: 1,
      title: "Fashion E-commerce Store",
      category: "shopify",
      type: "Shopify Store",
      description: "Modern fashion e-commerce store with custom theme, filtering, and checkout.",
      image: "https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
      features: ["Custom Theme", "Product Filtering", "Responsive", "Payment Integration"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 2,
      title: "Restaurant Booking System",
      category: "website",
      type: "Web Development",
      description: "Full restaurant website with booking, menu and reviews.",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "MongoDB", "Tailwind"],
      features: ["Online Booking", "Admin Dashboard"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 3,
      title: "UI/UX Dashboard",
      category: "uiux",
      type: "UI/UX Design",
      description: "Creative dashboard with modern UX patterns and user flow.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Figma", "Adobe XD"],
      features: ["Wireframes", "Prototypes", "User Testing"],
      liveUrl: "#",
      codeUrl: "#",
    },
    {
      id: 4,
      title: "Photo Retouch & Editing",
      category: "photo",
      type: "Photo Editing",
      description: "Professional photo retouching and creative edits for clients.",
      image: "https://images.pexels.com/photos/457713/pexels-photo-457713.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Photoshop", "Lightroom"],
      features: ["Retouch", "Color Grading", "Manipulation"],
      liveUrl: "#",
      codeUrl: "#",
    },
  ];

  const categories = [
    { value: "all", label: "All Projects" },
    { value: "website", label: "Web Development" },
    { value: "shopify", label: "Shopify Store" },
    { value: "uiux", label: "UI/UX Design" },
    { value: "photo", label: "Photo Editing" },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "all" || project.category === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-16 text-center">
        <h1 className="text-5xl font-bold">
          Our <span className="gradient-text">Portfolio</span>
        </h1>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Explore our categories: websites, Shopify stores, creative design & editing.
        </p>
      </section>

      {/* Highlighted Categories Section */}
      <section className="py-12 bg-slate-900/40">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {categories
            .filter((cat) => cat.value !== "all")
            .map((cat) => (
              <div
                key={cat.value}
                className="p-6 rounded-xl border border-slate-700 bg-slate-800/50 text-center hover:border-cyan-500 transition cursor-pointer"
                onClick={() => setFilter(cat.value)}
              >
                <h3 className="text-xl font-semibold text-white">{cat.label}</h3>
                <p className="text-gray-400 mt-2 text-sm">
                  {projects.filter((p) => p.category === cat.value).length} Projects
                </p>
              </div>
            ))}
        </div>
      </section>

      {/* Filter + Search */}
      <section className="py-8 bg-slate-900/20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={filter === category.value ? "default" : "outline"}
                className={`${
                  filter === category.value
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
                    : "border-slate-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400"
                }`}
                onClick={() => setFilter(category.value)}
              >
                <Filter className="mr-2 h-4 w-4" />
                {category.label}
              </Button>
            ))}
          </div>

          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-800 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length === 0 ? (
            <p className="text-center text-gray-400 col-span-3">No projects found.</p>
          ) : (
            filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-500 transition"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-2">{project.type}</Badge>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">{project.description}</p>
                  <div className="flex space-x-3 mt-4">
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                      <ExternalLink className="h-3 w-3 mr-1" /> Live
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      <Code className="h-3 w-3 mr-1" /> Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
