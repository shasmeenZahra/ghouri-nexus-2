'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Code,
  Gamepad2,
  Smartphone,
  Globe,
  Palette,
  ShoppingCart,
  Users,
  Star,
  ArrowRight,
  Play,
  Zap,
  Target,
  Award
} from 'lucide-react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly interfaces that convert visitors into customers"
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Shopify Stores",
      description: "Custom e-commerce solutions with premium themes and functionality"
    },
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      title: "Game Development",
      description: "Engaging games designed for entertainment and user engagement"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <Target className="h-6 w-6" /> },
    { number: "30+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "100%", label: "Satisfaction Rate", icon: <Star className="h-6 w-6" /> },
    { number: "24/7", label: "Support Available", icon: <Award className="h-6 w-6" /> }
  ];

  const testimonials = [
    {
      name: "Ahmed Khan",
      role: "E-commerce Owner",
      content: "Ghouri Nexus transformed our online presence with a stunning Shopify store. Sales increased by 200%!",
      rating: 5
    },
    {
      name: "Sarah Ahmed",
      role: "Startup Founder",
      content: "Their UI/UX design skills are exceptional. Our app's user engagement improved dramatically.",
      rating: 5
    },
    {
      name: "Muhammad Ali",
      role: "Business Owner",
      content: "Professional service, timely delivery, and ongoing support. Highly recommended!",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-float">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className=" text-white">Ghouri Nexus</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Where <span className="text-cyan-400 font-semibold">Software Development</span> meets{' '}
              <span className="text-purple-400 font-semibold">Gaming Innovation</span>
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              We create stunning websites, e-commerce solutions, and engaging games that captivate users and drive results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/services">
                <Button size="lg" className="group glow-effect bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg">
                  <Code className="mr-2 h-5 w-5" />
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/gaming">
                <Button size="lg" variant="outline" className="group border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg">
                  <Gamepad2 className="mr-2 h-5 w-5" />
                  View Games
                  <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Our Expertise</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Combining technical excellence with creative innovation to deliver exceptional digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 card-glow group">
                <CardContent className="p-6 text-center">
                  <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors flex justify-center">
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

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-cyan-400 mb-2 flex justify-center group-hover:text-cyan-300 transition-colors">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 animate-glow">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Satisfied Clients</span>
            </h2>
            <p className="text-xl text-gray-400">
              Don't just take our word for it - see what our clients say
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-300 mb-6 italic">
                  "{testimonials[currentSlide].content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-white text-lg">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-cyan-400">
                    {testimonials[currentSlide].role}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Digital Presence?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4">
                  <Zap className="mr-2 h-5 w-5" />
                  Start Your Project
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}