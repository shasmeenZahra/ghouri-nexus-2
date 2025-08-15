'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Globe,
  Users
} from 'lucide-react';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      description: "Send us an email",
      value: "ghourinexus@gmail.com",
      link: "mailto:ghourinexus@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      description: "Call us directly",
      value: "+92 XXX XXXXXXX",
      link: "tel:+92XXXXXXXXX"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      description: "Our headquarters",
      value: "Pakistan",
      link: "#"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      description: "We're available",
      value: "Mon - Fri: 9AM - 6PM",
      link: "#"
    }
  ];

  const reasons = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "We work with clients worldwide, delivering excellence across time zones"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Dedicated Team",
      description: "Expert developers and designers committed to your project's success"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Ongoing support and maintenance for all our projects"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    toast({
      title: "Error",
      description: "Please fill in all fields",
      variant: "destructive"
    });
    return;
  }

  setIsSubmitting(true);

  try {
    
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you within 24 hours."
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again.",
      variant: "destructive"
    });
  } finally {
    setIsSubmitting(false);
  };

    try {
     
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Contact form submission:', formData);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you within 24 hours."
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
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
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to start your project? Have a question? We'd love to hear from you. 
              Let's discuss how we can help bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-10 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 card-glow group">
                <CardContent className="p-6 text-center">
                  <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors flex justify-center">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">{info.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{info.description}</p>
                  <a 
                    href={info.link} 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  >
                    {info.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Send Us a <span className="gradient-text">Message</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

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
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="bg-slate-700/50 border-slate-600 text-white"
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="bg-slate-700/50 border-slate-600 text-white min-h-[150px]"
                        placeholder="Tell us about your project or question..."
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Why Choose Us */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Why <span className="gradient-text">Choose Us</span>?
              </h2>
              <p className="text-gray-400 mb-8">
                We're committed to delivering exceptional results and building long-term relationships with our clients.
              </p>

              <div className="space-y-6">
                {reasons.map((reason, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="text-cyan-400 mt-1">
                          {reason.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2 text-white">{reason.title}</h3>
                          <p className="text-gray-400">{reason.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Company Email Display */}
              <Card className="mt-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Direct Contact</h3>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-cyan-400" />
                    <div>
                      <p className="text-gray-300">Email us directly at:</p>
                      <a 
                        href="mailto:ghourinexus@gmail.com" 
                        className="text-cyan-400 hover:text-cyan-300 font-medium text-lg"
                      >
                        ghourinexus@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-400">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary depending on complexity. Simple websites take 1-2 weeks, while complex e-commerce stores or web applications can take 4-8 weeks. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes! We offer comprehensive post-launch support including bug fixes, updates, and maintenance. We also provide training so you can manage your website independently."
              },
              {
                question: "Can you work with existing designs or do you create from scratch?",
                answer: "We can do both! We're happy to work with your existing designs or brand guidelines, or we can create completely new designs from scratch based on your requirements."
              },
              {
                question: "What's included in your Shopify store development?",
                answer: "Our Shopify services include theme selection/customization, product setup, payment gateway integration, shipping configuration, SEO optimization, and training on how to manage your store."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}