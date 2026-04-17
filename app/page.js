"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({});

  const targetDate = new Date("2026-06-01T00:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) return;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden px-4">

      {/* 🔥 Glow Background Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-30 top-[-100px] left-[-100px] animate-pulse"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-600 rounded-full blur-[150px] opacity-30 bottom-[-100px] right-[-100px] animate-pulse"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl"
      >
        {/* Logo */}
        <h2 className="tracking-widest text-gray-300 mb-4 text-2xl md:text-4xl">
          pumpkidztv
        </h2>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          We’re Launching Soon 🚀
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 mb-10">
          Get ready for something amazing. We’re working hard behind the scenes.
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div
              key={unit}
              className="bg-white/10 backdrop-blur-lg px-6 py-4 rounded-xl border border-white/20"
            >
              <p className="text-2xl font-bold">
                {timeLeft[unit] || "0"}
              </p>
              <p className="text-xs text-gray-400 uppercase">{unit}</p>
            </div>
          ))}
        </div>

        {/* Email */}
        <form className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 flex-1"
          />
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition font-semibold">
            Notify Me
          </button>
        </form>
      </motion.div>
    </div>
  );
}