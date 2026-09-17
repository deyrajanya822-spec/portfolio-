import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'CUSTOMERS', href: '#customers' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROJECTS', href: '#recent-projects' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08080a]/85 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          id="navbar-brand-logo"
          className="group flex items-center gap-2.5 text-white no-underline"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/30 group-hover:scale-105 transition-transform">
            <span className="font-syne text-sm tracking-tighter">RD</span>
          </div>
          <div className="flex flex-col">
            <span className="font-syne font-black text-sm tracking-wider uppercase group-hover:text-pink-400 transition-colors">
              RAJANYA DEY
            </span>
            <span className="text-[10px] text-zinc-400 tracking-widest font-mono uppercase -mt-0.5">
              BRAND STRATEGY & MANAGEMENT
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12" id="desktop-nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs lg:text-sm font-semibold tracking-widest text-zinc-300 hover:text-white uppercase transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-purple-400 after:to-pink-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Status */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Available for freelance</span>
          </div>

          <button
            id="nav-contact-cta"
            onClick={onOpenContact}
            className="px-5 py-2 rounded-full glow-pill text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-1.5 shadow-lg shadow-pink-600/30 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S TALK</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0d] border-b border-zinc-800 px-6 py-6 space-y-4"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-bold tracking-wider text-zinc-300 hover:text-pink-400 uppercase py-2 border-b border-zinc-900"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-full glow-pill text-white text-sm font-bold tracking-wider uppercase text-center shadow-lg"
            >
              CONTACT ME
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
