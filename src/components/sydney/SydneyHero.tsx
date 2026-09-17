import React from 'react';
import { motion } from 'motion/react';
import { WavyLines } from './WavyLines';
import { ArrowDown, Sparkles } from 'lucide-react';
import { SYDNEY_PROFILE } from '../../data/sydneyData';

interface SydneyHeroProps {
  onOpenContact: () => void;
}

export const SydneyHero: React.FC<SydneyHeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-[65vh] md:min-h-[72vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#FAF7F2]">
      {/* Background Organic Red Ribbon Curves */}
      <WavyLines variant="hero" className="-top-12 -left-16 w-[120%] h-[120%] opacity-90" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
        {/* Editorial Title Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A141D]/10 text-[#7A141D] text-xs font-mono uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>General Management • Brand Research • GTM Strategy</span>
            </div>
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-serif tracking-tight text-[#7A141D] font-normal leading-[0.9]">
              <span className="italic font-normal">PORTFOLIO</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:max-w-md pb-2 text-left flex flex-col justify-between"
          >
            <p className="text-base sm:text-lg text-[#5C554D] leading-relaxed font-sans mb-6">
              Market research, strategic problem solving, cross-functional collaboration, and data-driven organizational outcomes.
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-2.5 rounded-full bg-[#7A141D] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#5E0F16] transition-all shadow-sm"
              >
                Get in Touch
              </button>
              <a
                href="#about"
                className="text-xs font-mono uppercase tracking-wider text-[#7A141D] hover:underline flex items-center gap-1.5 py-2.5"
              >
                <span>About &amp; Experience</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
