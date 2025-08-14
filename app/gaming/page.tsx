'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Play,
  Gamepad2,
  Clock,
  Zap,
  Trophy,
  Users,
  Star,
  Calendar
} from 'lucide-react';

export default function Gaming() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown to a future date (you can modify this)
  const targetDate = new Date('2025-06-01T00:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const upcomingGames = [
    {
      title: "Neon Quest",
      genre: "Adventure/RPG",
      description: "An immersive cyberpunk adventure with stunning visuals and engaging gameplay",
      features: ["Single Player Campaign", "Multiple Endings", "Character Customization"],
      status: "In Development"
    },
    {
      title: "Code Warriors",
      genre: "Strategy/Educational",
      description: "Learn programming concepts while battling in an epic strategy game",
      features: ["Educational Content", "Multiplayer Battles", "Progressive Learning"],
      status: "Concept Phase"
    },
    {
      title: "Pixel Paradise",
      genre: "Casual/Puzzle",
      description: "A relaxing puzzle game with beautiful pixel art and soothing music",
      features: ["Relaxing Gameplay", "Beautiful Art", "Daily Challenges"],
      status: "Pre-Production"
    }
  ];

  const gameFeatures = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "High Performance",
      description: "Optimized for smooth gameplay across all devices"
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Engaging Mechanics",
      description: "Innovative gameplay mechanics that keep players coming back"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Focused",
      description: "Built with community feedback and social features in mind"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Premium Quality",
      description: "High-quality graphics, sound, and overall gaming experience"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            className="w-full h-full object-cover opacity-30"
            poster="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1200"
          >
            <source src="https://videos.pexels.com/video-files/2278095/2278095-uhd_2560_1440_30fps.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl animate-bounce"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-float">
            <div className="mb-6">
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30 mb-4">
                <Gamepad2 className="mr-2 h-4 w-4" />
                Gaming Division
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text neon-text">Gaming Universe</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Where creativity meets technology to create unforgettable gaming experiences
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Our games are designed for pure entertainment, pushing the boundaries of 
              what's possible in interactive digital experiences.
            </p>

            <Button size="lg" className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Trailer
              <Play className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Coming Soon Countdown */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Coming Soon</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our first game releases are just around the corner. Get ready for an amazing gaming experience!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30 card-glow">
              <CardContent className="p-8 text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                      {timeLeft.days.toString().padStart(2, '0')}
                    </div>
                    <div className="text-gray-400 text-sm uppercase tracking-wide">Days</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">
                      {timeLeft.hours.toString().padStart(2, '0')}
                    </div>
                    <div className="text-gray-400 text-sm uppercase tracking-wide">Hours</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                      {timeLeft.minutes.toString().padStart(2, '0')}
                    </div>
                    <div className="text-gray-400 text-sm uppercase tracking-wide">Minutes</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
                      {timeLeft.seconds.toString().padStart(2, '0')}
                    </div>
                    <div className="text-gray-400 text-sm uppercase tracking-wide">Seconds</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                    <Calendar className="mr-2 h-5 w-5" />
                    Get Notified
                  </Button>
                  <Button size="lg" variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white">
                    Join Beta Testing
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Game Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Makes Our Games <span className="gradient-text">Special</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Every game we create is crafted with attention to detail and passion for gaming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gameFeatures.map((feature, index) => (
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

      {/* Upcoming Games */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Games in <span className="gradient-text">Development</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get a sneak peek at what we're working on behind the scenes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingGames.map((game, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 card-glow group">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                      {game.genre}
                    </Badge>
                    <Badge variant="outline" className="border-cyan-500/50 text-cyan-400">
                      {game.status}
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{game.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {game.features.map((feature, idx) => (
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
              Stay Updated on Our <span className="gradient-text">Gaming Journey</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Be the first to know about game releases, beta testing opportunities, and exclusive content
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