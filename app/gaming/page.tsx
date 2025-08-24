'use client';

import { useState, useEffect, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Gamepad2 } from 'lucide-react';

export default function Gaming() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [finished, setFinished] = useState(false);

  // 🎯 Target launch date (1st Oct 2025)
  const targetTime = useMemo(() => new Date("2025-10-01T00:00:00").getTime(), []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
        setFinished(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* 🔥 Hero Section with Countdown */}
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
               <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="gradient-text">Gaming Universe</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Experience the future of online gaming with immersive gameplay, global competitions,
            and a vibrant community. 🚀
          </p>
          </div>
          {!finished ? (
            <Card className="bg-slate-800/50 border border-purple-500/30">
              <CardContent className="p-8 text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {[ 
                    { label: "Days", value: timeLeft.days, color: "text-purple-400" },
                    { label: "Hours", value: timeLeft.hours, color: "text-pink-400" },
                    { label: "Minutes", value: timeLeft.minutes, color: "text-cyan-400" },
                    { label: "Seconds", value: timeLeft.seconds, color: "text-emerald-400" },
                  ].map((item, i) => (
                    <div key={i} className="bg-slate-900/50 rounded-xl p-4">
                      <AnimatePresence mode="popLayout">
                        <motion.div
                          key={item.value}
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: 20, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className={`text-4xl font-bold mb-2 ${item.color}`}
                        >
                          {item.value.toString().padStart(2, "0")}
                        </motion.div>
                      </AnimatePresence>
                      <div className="text-gray-400 text-sm uppercase tracking-wide">{item.label}</div>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  <Calendar className="mr-2 h-5 w-5" /> Get Notified
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="p-10 bg-green-900/30 border border-green-500/40 rounded-2xl shadow-xl">
              <h3 className="text-4xl font-bold text-green-400">🚀 We Are Live Now!</h3>
              <p className="text-gray-300 mt-4">Thanks for waiting, the countdown is complete.</p>
              <Button className="mt-6 bg-green-600 hover:bg-green-700 text-white">
                Go to Homepage
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* 🎮 Features Section */}
      <section className="py-20 bg-slate-900/70">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Immersive Gameplay",
              desc: "Dive into next-gen worlds with stunning graphics and smooth performance.",
              icon: <Gamepad2 className="h-10 w-10 text-purple-400" />,
              badge: "Next-Gen"
            },
            {
              title: "Global Competitions",
              desc: "Compete with players worldwide and climb the leaderboards.",
              icon: <Gamepad2 className="h-10 w-10 text-pink-400" />,
              badge: "Esports"
            },
            {
              title: "Community Driven",
              desc: "Join guilds, chat, and grow together in a vibrant ecosystem.",
              icon: <Gamepad2 className="h-10 w-10 text-emerald-400" />,
              badge: "Social"
            },
          ].map((item, i) => (
            <Card key={i} className="bg-slate-800/40 border border-gray-700 hover:scale-105 transition-transform">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-3">{item.desc}</p>
                <Badge>{item.badge}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
