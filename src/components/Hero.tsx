import React from 'react';
import { motion } from 'motion/react';
import { InteractiveAvatar } from './InteractiveAvatar';
import { Sparkles, ArrowDown, MoveRight } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] sm:min-h-screen pt-28 sm:pt-32 pb-16 flex flex-col justify-center items-center overflow-hidden bg-[#08080a]"
    >
      {/* Background Studio Lighting & Grids */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle radial ambient spotlight */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] bg-gradient-to-b from-purple-900/15 via-pink-600/10 to-transparent rounded-full blur-[140px]" />
        
        {/* Geometric subtle grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* TOP HUGE DISPLAY TITLE: "HI, I'M RAJANYA" */}
        <div className="w-full text-center relative select-none">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            id="hero-main-title"
            className="font-syne font-black text-[13vw] sm:text-[12.5vw] md:text-[11vw] lg:text-[10rem] leading-[0.82] tracking-tighter text-white uppercase text-center drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
          >
            HI, I'M RAJANYA
          </motion.h1>
        </div>

        {/* 3-COLUMN COMPOSITION: Left Text | Center 3D Interactive Avatar | Right CTA Button */}
        <div className="w-full mt-4 sm:mt-6 md:mt-2 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Subtitle & Role */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-4 text-center md:text-left order-2 md:order-1 flex flex-col items-center md:items-start"
          >
            <div className="max-w-xs sm:max-w-sm">
              <p className="font-syne font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-200 uppercase tracking-tight leading-snug">
                A BRAND STRATEGIST & CREATIVE THINKER CRAFTING MEMORABLE BRAND NARRATIVES 💡
              </p>
              <div className="mt-3 flex flex-col gap-1.5 text-xs font-mono text-zinc-400">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                  <span className="text-zinc-300 font-semibold">MARKET RESEARCH &amp; BRAND STRATEGIST</span>
                </div>
                <span className="text-[11px] text-zinc-400">BRAND STRATEGY • MARKET RESEARCH • CAMPAIGN DIRECTION</span>
              </div>
            </div>
          </motion.div>

          {/* Center Column: 3D Interactive Character Head */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
            className="md:col-span-4 flex justify-center order-1 md:order-2 -mt-6 sm:-mt-10 md:mt-0 z-20"
          >
            <InteractiveAvatar onInteract={onOpenContact} />
          </motion.div>

          {/* Right Column: Gradient Glow "CONTACT ME" Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-4 flex justify-center md:justify-end order-3"
          >
            <button
              id="hero-contact-button"
              onClick={onOpenContact}
              className="group relative px-8 sm:px-10 py-4 sm:py-5 rounded-full glow-pill text-white font-syne font-black text-sm sm:text-base tracking-widest uppercase transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl flex items-center gap-3 cursor-pointer overflow-hidden border border-white/20"
            >
              {/* Inner light glint shimmer */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              <span className="relative z-10 flex items-center gap-2">
                <span>CONTACT ME</span>
                <MoveRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </span>
            </button>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 sm:mt-16 flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
          onClick={() => {
            document.getElementById('customers')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">EXPLORE PORTFOLIO</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-pink-400" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
