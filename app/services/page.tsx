'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import {
  Globe,
  Palette,
  ShoppingCart,
  Code,
  Smartphone,
  Database,
  Search,
  Zap,
  CheckCircle,
  ArrowRight,
  Gamepad2
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
      icon: <Gamepad2 className="h-12 w-12" />,
      title: "Game Development",
      description: "Engaging games designed for entertainment and user engagement",
      features: [
        "Web-based Games",
        "Mobile Games",
        "Game Design",
        "Interactive Experiences",
        "Game Testing",
        "Performance Optimization",
        "Cross-platform Development"
      ],
      color: "orange"
    }
  ];

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

    // Here you would typically send the data to your backend
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
      orange: "border-orange-500/30 hover:border-orange-500/50 text-orange-400"
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20">
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
                  <div className={`${service.color === 'cyan' ? 'text-cyan-400' : service.color === 'purple' ? 'text-purple-400' : service.color === 'emerald' ? 'text-emerald-400' : 'text-orange-400'} mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-gray-400 mb-6 text-lg">{service.description}</p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className={`h-5 w-5 ${service.color === 'cyan' ? 'text-cyan-400' : service.color === 'purple' ? 'text-purple-400' : service.color === 'emerald' ? 'text-emerald-400' : 'text-orange-400'}`} />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className={`w-full group ${service.color === 'cyan' ? 'bg-cyan-500 hover:bg-cyan-600' : service.color === 'purple' ? 'bg-purple-500 hover:bg-purple-600' : service.color === 'emerald' ? 'bg-emerald-500 hover:bg-emerald-600' : 'bg-orange-500 hover:bg-orange-600'} text-white`}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
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

      {/* Contact Form */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Request a <span className="gradient-text">Quote</span>
            </h2>
            <p className="text-xl text-gray-400">
              Tell us about your project and we'll get back to you with a custom solution
            </p>
          </div>

          <Card className="bg-slate-800/50 border-slate-700 card-glow">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-slate-700/50 border-slate-600 text-white"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-slate-700/50 border-slate-600 text-white"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-slate-700/50 border border-slate-600 text-white rounded-md px-3 py-2"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Front-End Web Development</option>
                    <option value="shopify">Shopify Store Development</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="game-development">Game Development</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-slate-700/50 border-slate-600 text-white min-h-[120px]"
                    placeholder="Tell us about your project requirements..."
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white">
                  <Zap className="mr-2 h-5 w-5" />
                  Send Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}