'use client';

import Link from 'next/link';
import { Image } from "lucide-react";
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import {
  Globe,
  Palette,
  ShoppingCart,
  Code,
  Zap,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export default function Services() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const services = [
<<<<<<< HEAD
  {
    icon: <Globe className="h-12 w-12" />,
    title: "Front-End Web Development",
    description: "Modern, responsive websites built with cutting-edge technologies",
    features: [
      "Responsive Web Design",
      "UI/UX Development",
      "HTML, CSS, JavaScript",
      "Bootstrap Framework",
      "React.js & Next.js",
      "Tailwind CSS",
      "API Integrations"
    ],
    color: "cyan"
  },
  {
    icon: <ShoppingCart className="h-12 w-12" />,
    title: "Shopify Store Development",
    description: "Complete e-commerce solutions with custom themes and functionality",
    features: [
      "Custom Theme Development",
      "Free Theme Setup",
      "Premium Theme Integration",
      "Theme Customization",
      "App Integration",
      "Payment Gateway Setup",
      "SEO Optimization"
    ],
    color: "purple"
  },
  {
    icon: <Palette className="h-12 w-12" />,
    title: "UI/UX Design",
    description: "Beautiful, user-friendly interfaces that convert visitors into customers",
    features: [
      "User Interface Design",
      "User Experience Research",
      "Wireframing & Prototyping",
      "Design Systems",
      "Mobile App Design",
      "Brand Identity",
      "Usability Testing"
    ],
    color: "emerald"
  },
  {
    icon: <Image className="h-12 w-12" />,
    title: "Photo Editing",
    description: "Advanced tools to edit, enhance, and manipulate images efficiently",
    features: [
      "Crop & Resize",
      "Filters & Effects",
      "Color Correction",
      "Retouching Tools",
      "Layer Management",
      "Export in Multiple Formats",
      "Cross-platform Support"
    ],
    color: "orange"
  },
  {
    icon: <Code className="h-12 w-12" />,
    title: "Video Creation",
    description: "Create professional-quality videos for social media, ads, or presentations",
    features: [
      "Video Editing",
      "Animations & Transitions",
      "Audio & Music Integration",
      "Color Grading",
      "Text & Captions",
      "Export in Multiple Formats",
      "Storyboarding & Planning"
    ],
    color: "pink"
  },
  {
    icon: <Zap className="h-12 w-12" />,
    title: "Finding & Fixing Bugs",
    description: "Debugging and troubleshooting for applications and websites",
    features: [
      "Code Review",
      "Bug Detection",
      "Performance Optimization",
      "Error Logging & Reporting",
      "Compatibility Testing",
      "Automated Testing",
      "Maintenance & Updates"
    ],
    color: "teal"
  }
 ];
=======
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Front-End Web Development",
      description: "Modern, responsive websites built with cutting-edge technologies",
      features: [
        "Responsive Web Design",
        "UI/UX Development",
        "HTML, CSS, JavaScript",
        "Bootstrap Framework",
        "React.js & Next.js",
        "Tailwind CSS",
        "API Integrations"
      ],
      color: "cyan"
    },
    {
      icon: <ShoppingCart className="h-12 w-12" />,
      title: "Shopify Store Development",
      description: "Complete e-commerce solutions with custom themes and functionality",
      features: [
        "Custom Theme Development",
        "Free Theme Setup",
        "Premium Theme Integration",
        "Theme Customization",
        "App Integration",
        "Payment Gateway Setup",
        "SEO Optimization"
      ],
      color: "purple"
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly interfaces that convert visitors into customers",
      features: [
        "User Interface Design",
        "User Experience Research",
        "Wireframing & Prototyping",
        "Design Systems",
        "Mobile App Design",
        "Brand Identity",
        "Usability Testing"
      ],
      color: "emerald"
    },
    {
      icon: <Image className="h-12 w-12" />,
      title: "Photo Editing",
      description: "Advanced tools to edit, enhance, and manipulate images efficiently",
      features: [
        "Crop & Resize",
        "Filters & Effects",
        "Color Correction",
        "Retouching Tools",
        "Layer Management",
        "Export in Multiple Formats",
        "Cross-platform Support"
      ],
      color: "orange"
    },
    {
      icon: <Code className="h-12 w-12" />,
      title: "Video Creation",
      description: "Create professional-quality videos for social media, ads, or presentations",
      features: [
        "Video Editing",
        "Animations & Transitions",
        "Audio & Music Integration",
        "Color Grading",
        "Text & Captions",
        "Export in Multiple Formats",
        "Storyboarding & Planning"
      ],
      color: "pink"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Finding & Fixing Bugs",
      description: "Debugging and troubleshooting for applications and websites",
      features: [
        "Code Review",
        "Bug Detection",
        "Performance Optimization",
        "Error Logging & Reporting",
        "Compatibility Testing",
        "Automated Testing",
        "Maintenance & Updates"
      ],
      color: "teal"
    }
  ];
>>>>>>> 413427f (edit ke baad update kiya)

  const technologies = [
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "TypeScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "Shopify", category: "E-commerce" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    console.log('Service inquiry:', formData);
    
    toast({
      title: "Inquiry Sent!",
      description: "We'll get back to you within 24 hours."
    });

    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: "border-cyan-500/30 hover:border-cyan-500/50 text-cyan-400",
      purple: "border-purple-500/30 hover:border-purple-500/50 text-purple-400",
      emerald: "border-emerald-500/30 hover:border-emerald-500/50 text-emerald-400",
      orange: "border-orange-500/30 hover:border-orange-500/50 text-orange-400",
      pink: "border-pink-500/30 hover:border-pink-500/50 text-pink-400",
      teal: "border-teal-500/30 hover:border-teal-500/50 text-teal-400"
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  const getTextColor = (color: string) => {
    switch (color) {
      case "cyan": return "text-cyan-400";
      case "purple": return "text-purple-400";
      case "emerald": return "text-emerald-400";
      case "orange": return "text-orange-400";
      case "pink": return "text-pink-400";
      case "teal": return "text-teal-400";
      default: return "text-cyan-400";
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From stunning websites to innovative games, we deliver digital solutions 
              that drive results and engage users.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`bg-slate-800/50 border-slate-700 ${getColorClasses(service.color)} transition-all duration-300 card-glow group`}>
                <CardContent className="p-8">
                  <div className={`${getTextColor(service.color)} mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-6 text-lg">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className={`h-5 w-5 ${getTextColor(service.color)}`} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/get-started">
                    <Button
                      className={`w-full group ${
                        service.color === 'cyan'
                          ? 'bg-cyan-500 hover:bg-cyan-600'
                          : service.color === 'purple'
                          ? 'bg-purple-500 hover:bg-purple-600'
                          : service.color === 'emerald'
                          ? 'bg-emerald-500 hover:bg-emerald-600'
                          : service.color === 'orange'
                          ? 'bg-orange-500 hover:bg-orange-600'
                          : service.color === 'pink'
                          ? 'bg-pink-500 hover:bg-pink-600'
                          : 'bg-teal-500 hover:bg-teal-600'
                      } text-white`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technologies We <span className="gradient-text">Master</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We use cutting-edge technologies to build robust, scalable, and modern solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-slate-800/50 text-cyan-400 border-slate-700 hover:border-cyan-500/50 px-4 py-2 text-sm">
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
