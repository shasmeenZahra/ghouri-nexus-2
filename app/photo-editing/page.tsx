'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Camera,
  Image,
  Brush,
  Sparkles,
  Users,
  Star,
  Palette,
  
} from 'lucide-react';
import Link from 'next/link';
export default function PhotoEditing() {
  const editingFeatures = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "AI Enhancements",
      description: "Smart auto-fix and enhancement tools powered by AI"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Creative Filters",
      description: "Wide range of unique filters to style your photos"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "Work with clients and teams in real-time"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "High-Quality Output",
      description: "Export high-res images for print and digital"
    }
  ];

  const editingServices = [
    {
      title: "Portrait Retouching",
      genre: "Beauty & Skin",
      description: "Enhance facial features and remove blemishes for a flawless look",
      features: ["Skin Smoothing", "Teeth Whitening", "Makeup Enhancement"],
      status: "Available"
    },
    {
      title: "Product Photo Cleanup",
      genre: "eCommerce",
      description: "Perfect for online stores — clear backgrounds and sharp detail",
      features: ["Background Removal", "Lighting Fix", "Shadow Effects"],
      status: "In Demand"
    },
    {
      title: "Vintage Photo Restoration",
      genre: "Heritage",
      description: "Bring your old, damaged photos back to life",
      features: ["Colorization", "Scratch Removal", "Detail Recovery"],
      status: "Special Request"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>

        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-30"
            poster="https://images.pexels.com/photos/1767435/pexels-photo-1767435.jpeg?auto=compress&cs=tinysrgb&w=1200"
          >
            <source src="https://videos.pexels.com/video-files/1956979/1956979-hd_1280_720_30fps.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Floating Lights */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-float">
            <div className="mb-6">
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4">
                <Camera className="mr-2 h-4 w-4" />
                Photo Editing
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text neon-text">Photo Editing Studio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Where creativity meets technology to transform your memories into masterpieces
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              We offer cutting-edge editing tools and professional services to make your photos shine.
            </p>

            <Button size="lg" className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg">
              <Image className="mr-2 h-5 w-5" />
             <Link href='/portfolio' className="text-white group-hover:text-gray-200">
              View Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Makes Our Services <span className="gradient-text">Stand Out</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our editing process is detailed, artistic, and tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {editingFeatures.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-purple-500/50 transition-all duration-300 card-glow group">
                <CardContent className="p-6 text-center">
                  <div className="text-purple-400 mb-4 group-hover:text-purple-300 transition-colors flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Photo Editing Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose from a variety of services tailored to meet your editing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {editingServices.map((service, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 card-glow group">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                      {service.genre}
                    </Badge>
                    <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
                      {service.status}
                    </Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-12 border border-purple-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated on Our <span className="gradient-text">Editing Services</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get exclusive tips, tutorials, and service announcements straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-slate-800/50 border border-slate-600 rounded-md px-4 py-3 text-white placeholder-gray-400"
              />
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
