'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  ExternalLink,
  Github,
  ShoppingCart,
  Globe,
  Smartphone,
  Code,
  Filter,
  Search
} from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: "Fashion E-commerce Store",
      category: "shopify",
      type: "Shopify Store",
      description: "Modern fashion e-commerce store with custom theme, advanced filtering, and seamless checkout experience.",
      image: "https://images.pexels.com/photos/972995/pexels-photo-972995.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify", "Liquid", "CSS", "JavaScript"],
      features: ["Custom Theme", "Product Filtering", "Mobile Responsive", "Payment Integration"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Restaurant Booking System",
      category: "website",
      type: "Web Application",
      description: "Full-featured restaurant website with online booking system, menu display, and customer reviews.",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Next.js", "Tailwind CSS", "MongoDB"],
      features: ["Online Booking", "Menu Management", "Customer Reviews", "Admin Dashboard"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Tech Gadgets Shop",
      category: "shopify",
      type: "Shopify Store",
      description: "Electronics and gadgets store with advanced product comparison and tech specifications display.",
      image: "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify", "Liquid", "JavaScript", "CSS"],
      features: ["Product Comparison", "Spec Display", "Customer Reviews", "Wishlist"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "Digital Marketing Agency",
      category: "website",
      type: "Business Website",
      description: "Professional marketing agency website with service showcase, portfolio, and client testimonials.",
      image: "https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: ["Portfolio Gallery", "Client Testimonials", "Contact Forms", "SEO Optimized"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 5,
      title: "Fitness Equipment Store",
      category: "shopify",
      type: "Shopify Store",
      description: "Complete fitness equipment e-commerce solution with workout guides and equipment recommendations.",
      image: "https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify Plus", "Liquid", "JavaScript", "CSS3"],
      features: ["Product Bundles", "Workout Guides", "Size Calculator", "Subscription Service"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 6,
      title: "Real Estate Platform",
      category: "website",
      type: "Web Application",
      description: "Comprehensive real estate platform with property listings, virtual tours, and agent management.",
      image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "PostgreSQL", "Google Maps API"],
      features: ["Property Search", "Virtual Tours", "Agent Profiles", "Mortgage Calculator"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 7,
      title: "Organic Skincare Shop",
      category: "shopify",
      type: "Shopify Store",
      description: "Beautiful organic skincare store with ingredient information and personalized product recommendations.",
      image: "https://images.pexels.com/photos/3737629/pexels-photo-3737629.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Shopify", "Liquid", "Vue.js", "CSS3"],
      features: ["Ingredient Database", "Skin Quiz", "Subscription Box", "Beauty Blog"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      id: 8,
      title: "Educational Course Platform",
      category: "website",
      type: "Learning Management System",
      description: "Interactive online learning platform with course management, progress tracking, and certification.",
      image: "https://images.pexels.com/photos/5940721/pexels-photo-5940721.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "TypeScript", "Prisma", "Stripe"],
      features: ["Course Management", "Progress Tracking", "Certificates", "Discussion Forums"],
      liveUrl: "#",
      codeUrl: "#"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects', count: projects.length },
    { value: 'website', label: 'Websites', count: projects.filter(p => p.category === 'website').length },
    { value: 'shopify', label: 'Shopify Stores', count: projects.filter(p => p.category === 'shopify').length }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our collection of successful projects - from stunning websites to 
              powerful e-commerce solutions that drive results.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-10 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={filter === category.value ? "default" : "outline"}
                  className={`${
                    filter === category.value
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'border-slate-600 text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400'
                  }`}
                  onClick={() => setFilter(category.value)}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  {category.label} ({category.count})
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-400">No projects found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 card-glow group overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                        {project.type}
                      </Badge>
                      <div className="flex space-x-2">
                        {project.category === 'shopify' ? (
                          <ShoppingCart className="h-4 w-4 text-purple-400" />
                        ) : (
                          <Globe className="h-4 w-4 text-emerald-400" />
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="border-slate-600 text-gray-300 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-1 mb-6">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          <span className="text-gray-300 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Button size="sm" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-xs">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline" className="border-slate-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 text-xs">
                        <Code className="mr-1 h-3 w-3" />
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Next Project</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. 
              Every great project starts with a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4">
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}