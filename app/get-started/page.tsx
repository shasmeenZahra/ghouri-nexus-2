'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    subject: '',
    message: '',
    service: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', whatsapp: '', subject: '', message: '', service: '' });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Server error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="py-20 bg-slate-900/30"> 
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              send a <span className="gradient-text">Message</span>
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

                {/* ✅ WhatsApp Field */}
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-2">
                    WhatsApp Number *
                  </label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    className="bg-slate-700/50 border-slate-600 text-white"
                    placeholder="+92 300 1234567"
                    required
                  />
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
                    <option value="photo-edit">Photo Edit</option>
                    <option value="video-creation">Video Creation</option>
                    <option value="bug-fixing">Finding and fixing bugs</option>
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
                  Send a Message
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
