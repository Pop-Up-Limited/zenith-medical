"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAVIGATION, COMPANY_NAME } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50 group">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src="/logo.svg"
                alt="Zenith Medical Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
                priority
              />
            </div>
            <span
              className={cn(
                "font-bold text-xl tracking-wide transition-colors",
                isScrolled ? "text-slate-900" : "text-white"
              )}
            >
              {COMPANY_NAME}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-500",
                  isScrolled ? "text-slate-700" : "text-white/90 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Utilities */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className={cn(
                "p-2 rounded-full transition-colors",
                isScrolled
                  ? "hover:bg-slate-100 text-slate-700"
                  : "hover:bg-white/10 text-white"
              )}
            >
              <Search size={20} />
            </button>
            <div className="relative group">
              <button
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors",
                  isScrolled ? "text-slate-700" : "text-white"
                )}
              >
                <Globe size={18} />
                <span>CN</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-slate-900" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-slate-900" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-4 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-slate-900 border-b border-slate-100 pb-4"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
