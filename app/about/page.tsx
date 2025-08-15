'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  Target,
  Lightbulb,
  Award,
  Code,
  Gamepad2,
  Rocket,
  Heart
} from 'lucide-react';

export default function About() {
  const team = [
    {
      name: "Haniya Khan",
      role: "Content Writer & Co-Founder",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Creative content strategist with expertise in digital marketing and brand storytelling."
    },
    {
      name: "Tech Lead",
      role: "Lead Developer & Founder",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Full-stack developer with 5+ years of experience in modern web technologies."
    },
    {
      name: "Design Lead",
      role: "UI/UX Designer",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Creative designer specializing in user experience and modern interface design."
    },
    {
      name: "Game Developer",
      role: "Game Development Lead",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Passionate game developer creating engaging and innovative gaming experiences."
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Quality",
      description: "Every project receives our full attention to detail and commitment to excellence"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "We work closely with clients to understand and exceed their expectations"
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Growth",
      description: "We help businesses scale and succeed in the digital landscape"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Ghouri Nexus</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We are a dynamic company that bridges the gap between professional software development 
              and innovative gaming solutions, creating digital experiences that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Ghouri Nexus was born from a vision to create a unique company that excels in both 
                professional software development and creative gaming solutions. We recognized that 
                the digital world needed a company that could deliver enterprise-level web solutions 
                while also understanding the entertainment and engagement aspects of digital experiences.
              </p>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Our dual expertise allows us to bring a unique perspective to every project - combining 
                the precision and reliability of professional software development with the creativity 
                and user engagement principles learned from game development.
              </p>
              <div className="flex space-x-4">
                <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                  <Code className="mr-2 h-4 w-4" />
                  Software House
                </Badge>
                <Badge variant="secondary" className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                  <Gamepad2 className="mr-2 h-4 w-4" />
                  Gaming Company
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              <Card className="relative bg-slate-800/50 border-slate-700">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">2023</div>
                      <div className="text-gray-400">Founded</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                      <div className="text-gray-400">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-emerald-400 mb-2">30+</div>
                      <div className="text-gray-400">Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                      <div className="text-gray-400">Satisfaction</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do and every solution we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 card-glow group">
                <CardContent className="p-6 text-center">
                  <div className="text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The talented individuals behind Ghouri Nexus who make everything possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 card-glow group overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30 card-glow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-cyan-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To deliver exceptional digital solutions that combine the reliability and professionalism 
                  of enterprise software development with the creativity and user engagement of gaming. 
                  We strive to help businesses succeed in the digital landscape while creating entertaining 
                  experiences that bring joy to users.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 card-glow">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Lightbulb className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To become a leading digital agency recognized for our unique dual expertise, setting 
                  new standards in both professional web development and gaming innovation. We envision 
                  a future where every digital experience we create drives business success and user delight.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}