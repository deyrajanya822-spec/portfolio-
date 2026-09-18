import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';

export const Footer: React.FC = () => {
  const [activeGlyph, setActiveGlyph] = useState<number | null>(null);

  const handleGlyphClick = (index: number, e: React.MouseEvent) => {
    setActiveGlyph(index);
    setTimeout(() => setActiveGlyph(null), 600);

    const colors = [
      ['#d8b4fe', '#c084fc'], // Lilac
      ['#a3e635', '#84cc16'], // Lime
      ['#ffffff', '#f4f4f5'], // White
      ['#a855f7', '#7e22ce'], // Purple
      ['#ffffff', '#cbd5e1'], // White
      ['#fb923c', '#ea580c'], // Orange
      ['#ffffff', '#94a3b8'], // White
      ['#ec4899', '#db2777'], // Pink
    ];

    confetti({
      particleCount: 15,
      spread: 40,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      },
      colors: colors[index] || ['#ffffff']
    });
  };

  return (
    <footer id="main-footer" className="px-4 sm:px-6 lg:px-8 pb-12 bg-[#08080a]">
      {/* Dark Footer Card with Rounded Top Corners matching Screenshot 9 */}
      <div className="max-w-7xl mx-auto rounded-3xl sm:rounded-[2.5rem] bg-[#0c0c10] border border-zinc-800/80 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
        
        {/* Top Info Grid: Outline Brand Title & Social / Contact Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 sm:mb-20">
          
          {/* Left: Outlined Display Brand Name "RAJANYA DEY" */}
          <div className="lg:col-span-6 space-y-2">
            <h2 className="font-syne font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter uppercase text-white drop-shadow-md">
              RAJANYA<br />DEY
            </h2>
            <p className="text-xs font-mono text-zinc-400 max-w-sm pt-2">
              Brand Strategist & Creative Thinker. Shaping data-driven positioning, consumer narratives & marketing strategy.
            </p>
          </div>

          {/* Right Columns: SOCIAL & CONTACT */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            {/* SOCIAL Column */}
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                NETWORKS & MEDIA
              </span>
              <ul className="space-y-2 text-sm sm:text-base font-syne font-bold text-zinc-200">
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-pink-400 transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-purple-400 transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    Behance
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-pink-400 transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-emerald-400 transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    Contact &amp; Connect
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACT Column */}
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase">
                DIRECT CONTACT
              </span>
              <div className="space-y-2 text-sm sm:text-base font-outfit text-zinc-300">
                <p className="font-syne font-bold text-white hover:text-pink-400 transition-colors cursor-pointer">
                  deyrajanya822@gmail.com
                </p>
                <p className="text-zinc-400 font-mono text-xs">
                  India
                </p>
                <p className="text-zinc-400 text-xs leading-relaxed pt-1">
                  General Management &amp; Market Research Specialist
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM VIBRANT PLAYFUL GEOMETRIC GLYPH RIBBON (SCREENSHOT 9) */}
        <div className="pt-8 border-t border-zinc-800/80">
          <div className="flex items-center justify-between gap-3 sm:gap-6 overflow-x-auto py-4 px-2 no-scrollbar">
            
            {/* 1. Light lilac soft 4-petal flower */}
            <motion.div
              onClick={(e) => handleGlyphClick(0, e)}
              whileHover={{ scale: 1.25, rotate: 45 }}
              whileTap={{ scale: 0.85 }}
              className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 cursor-pointer"
              title="Soft Lilac Flower"
            >
              <svg viewBox="0 0 60 60" className="w-full h-full">
                <path
                  d="M 30 5 C 42 5, 55 18, 55 30 C 55 42, 42 55, 30 55 C 18 55, 5 42, 5 30 C 5 18, 18 5, 30 5 Z"
                  fill="#d8b4fe"
                />
                <circle cx="30" cy="18" r="10" fill="#d8b4fe" />
                <circle cx="42" cy="30" r="10" fill="#d8b4fe" />
                <circle cx="30" cy="42" r="10" fill="#d8b4fe" />
                <circle cx="18" cy="30" r="10" fill="#d8b4fe" />
                <circle cx="30" cy="30" r="6" fill="#c084fc" />
              </svg>
            </motion.div>

            {/* 2. Lime green 4-dot circle cluster */}
            <motion.div
              onClick={(e) => handleGlyphClick(1, e)}
              whileHover={{ scale: 1.25, rotate: 90 }}
              whileTap={{ scale: 0.85 }}
              className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 cursor-pointer grid grid-cols-2 gap-1.5 p-1"
              title="Lime Green Dots"
            >
              <div className="rounded-full bg-[#a3e635] shadow-[0_0_10px_rgba(163,230,53,0.5)]" />
              <div className="rounded-full bg-[#a3e635] shadow-[0_0_10px_rgba(163,230,53,0.5)]" />
              <div className="rounded-full bg-[#a3e635] shadow-[0_0_10px_rgba(163,230,53,0.5)]" />
              <div className="rounded-full bg-[#a3e635] shadow-[0_0_10px_rgba(163,230,53,0.5)]" />
            </motion.div>

            {/* 3. White/cream ribbon 'J' / hook arc */}
            <motion.div
              onClick={(e) => handleGlyphClick(2, e)}
              whileHover={{ scale: 1.25, rotate: -20 }}
              whileTap={{ scale: 0.85 }}
              className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 cursor-pointer"
              title="Cream Ribbon Arc"
            >
              <svg viewBox="0 0 60 60" className="w-full h-full">
                <path
                  d="M 45 10 L 45 35 C 45 48, 25 55, 12 45 C 5 38, 10 25, 20 25 C 28 25, 30 35, 30 35 L 30 10 Z"
                  fill="#f1f5f9"
                />
              </svg>
            </motion.div>

            {/* 4. Purple solid circle */}
            <motion.div
              onClick={(e) => handleGlyphClick(3, e)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.85 }}
              className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 cursor-pointer rounded-full bg-[#a855f7] shadow-[0_0_15px_rgba(168,85,247,0.6)]"
              title="Purple Orb"
            />

            {/* 5. White stylized geometric 'Z' / chevron fold */}
            <motion.div
              onClick={(e) => handleGlyphClick(4, e)}
              whileHover={{ scale: 1.25, rotate: 180 }}
              whileTap={{ scale: 0.85 }}
              className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 cursor-pointer"
              title="Geometric Chevron"
            >
              <svg viewBox="0 0 60 60" className="w-full h-full">
                <path
                  d="M 10 10 L 50 10 L 15 50 L 50 50 L 40 55 L 5 55 L 40 15 L 10 15 Z"
                  fill="#ffffff"
                />
              </svg>
            </motion.div>

            {/* 6. Dual orange quarter-moon arch */}
            <motion.div
              onClick={(e) => handleGlyphClick(5, e)}
              whileHover={{ scale: 1.25, rotate: 45 }}
              whileTap={{ scale: 0.85 }}
              className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 cursor-pointer flex items-center justify-center gap-1"
              title="Orange Quarter-Moons"
            >
              <div className="w-5 sm:w-7 h-10 sm:h-14 bg-[#fb923c] rounded-l-full shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
              <div className="w-5 sm:w-7 h-10 sm:h-14 bg-[#fb923c] rounded-r-full shadow-[0_0_10px_rgba(251,146,60,0.5)]" />
            </motion.div>

            {/* 7. White double triangle arrow */}
            <motion.div
              onClick={(e) => handleGlyphClick(6, e)}
              whileHover={{ scale: 1.25, y: -6 }}
              whileTap={{ scale: 0.85 }}
              className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 cursor-pointer"
              title="Arrow Chevron"
            >
              <svg viewBox="0 0 60 60" className="w-full h-full">
                <polygon points="30,8 52,28 8,28" fill="#ffffff" />
                <polygon points="30,30 52,50 8,50" fill="#ffffff" />
              </svg>
            </motion.div>

            {/* 8. Hot pink donut / torus ring */}
            <motion.div
              onClick={(e) => handleGlyphClick(7, e)}
              whileHover={{ scale: 1.3, rotate: 90 }}
              whileTap={{ scale: 0.85 }}
              className="w-10 h-10 sm:w-14 sm:h-14 shrink-0 cursor-pointer rounded-full border-[7px] sm:border-[10px] border-[#ec4899] shadow-[0_0_18px_rgba(236,72,153,0.7)]"
              title="Hot Pink Ring"
            />

          </div>

          {/* Copyright bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono gap-3">
            <span>© {new Date().getFullYear()} RAJANYA DEY. BRAND STRATEGY & CREATIVE MANAGEMENT.</span>
            <div className="flex items-center gap-6">
              <a href="#about" className="hover:text-zinc-300 transition-colors">ABOUT</a>
              <span>•</span>
              <a href="#services" className="hover:text-zinc-300 transition-colors">SERVICES</a>
              <span>•</span>
              <a href="#projects" className="hover:text-zinc-300 transition-colors">PROJECTS &amp; WORK</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
