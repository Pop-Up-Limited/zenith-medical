"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import Link from "next/link";

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.hero.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-900">
      <AnimatePresence mode="wait">
        {IMAGES.hero.map((slide, idx) => {
          if (idx !== current) return null;
          
          return (
            <motion.div
              key={idx}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* Background image - 直接使用img标签确保加载 */}
              <img
                src={slide.src}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: "center" }}
                onError={(e) => {
                  // 如果加载失败，使用渐变背景
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              
              {/* Overlay gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/50 to-transparent" />
            </motion.div>
          );
        })}
      </AnimatePresence>

      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${current}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                  {IMAGES.hero[current].title}
                </h1>
                <p className="text-xl md:text-2xl text-slate-200 mb-10 font-light max-w-2xl leading-relaxed">
                  {IMAGES.hero[current].subtitle}
                </p>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full transition-all hover:gap-4 font-medium shadow-lg"
                >
                  探索更多 <ArrowRight size={20} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-20">
        <div className="container mx-auto px-4 md:px-6 flex gap-3">
          {IMAGES.hero.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1 transition-all duration-300 rounded-full ${
                idx === current ? "w-12 bg-blue-500" : "w-4 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
