import React, { useState, useEffect } from 'react';
import { Mail, Phone, ArrowUpRight, Menu, X } from 'lucide-react';
import { SYDNEY_PROFILE } from '../../data/sydneyData';

interface SydneyNavbarProps {
  onOpenContact: () => void;
}

export const SydneyNavbar: React.FC<SydneyNavbarProps> = ({ onOpenContact }) => {
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
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md shadow-sm border-b border-[#E8DFD5]/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <a
          href="#"
          className="group flex items-center gap-2 text-[#1F1D1A] transition-opacity hover:opacity-85"
        >
          <span className="font-serif italic font-bold text-2xl tracking-tight text-[#7A141D]">
            Rajanya Dey
          </span>
          <span className="hidden sm:inline-block text-xs uppercase tracking-widest text-[#7D756C] font-mono border-l border-[#D6CCC2] pl-2.5">
            Portfolio
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#4A453E] hover:text-[#7A141D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#7A141D] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7A141D] hover:bg-[#600F17] text-white text-xs font-semibold tracking-wider uppercase shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#1F1D1A] hover:bg-[#F0EAE1] transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DFD5] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif text-[#2B2723] hover:text-[#7A141D] py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E8DFD5] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-3 rounded-full bg-[#7A141D] text-white text-xs font-semibold tracking-wider uppercase text-center flex items-center justify-center gap-2"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-between text-xs text-[#7D756C] pt-1">
              <span>{SYDNEY_PROFILE.phone}</span>
              <span>{SYDNEY_PROFILE.email}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
