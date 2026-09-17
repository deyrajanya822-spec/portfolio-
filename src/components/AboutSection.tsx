import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MoveRight, Award, GraduationCap, Globe2, Trophy, BookOpen, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { EDUCATION_DATA, ACHIEVEMENTS_DATA, LANGUAGES_DATA } from '../data/portfolioData';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const [clickedSticker, setClickedSticker] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'education' | 'achievements'>('overview');

  const triggerStickerWiggle = (name: string, e: React.MouseEvent) => {
    setClickedSticker(name);
    setTimeout(() => setClickedSticker(null), 800);

    confetti({
      particleCount: 15,
      spread: 45,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      },
      colors: name === 'heart' ? ['#ef4444', '#f43f5e'] : name === 'flower' ? ['#a855f7', '#eab308'] : ['#3b82f6', '#e2e8f0']
    });
  };

  return (
    <section
      id="about"
      className="relative py-24 sm:py-36 bg-[#08080a] overflow-hidden flex flex-col items-center justify-center text-center select-none"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-purple-900/10 via-pink-600/10 to-orange-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* CONTAINER FOR TITLE + 4 FLOATING 3D ELEMENTS */}
        <div className="relative w-full max-w-3xl flex items-center justify-center py-8 sm:py-12">
          
          {/* 1. TOP-LEFT: Silver Chrome Inflatable Asterisk / Star */}
          <motion.div
            id="floating-chrome-star"
            className="absolute -top-6 sm:-top-8 -left-4 sm:left-4 md:left-2 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 cursor-pointer z-20"
            animate={{
              y: [0, -12, 0],
              rotate: [0, 8, -8, 0],
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.15, rotate: 18 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => triggerStickerWiggle('chrome-star', e)}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]">
              <defs>
                <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="25%" stopColor="#d1d5db" />
                  <stop offset="50%" stopColor="#9ca3af" />
                  <stop offset="75%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#4b5563" />
                </linearGradient>
              </defs>
              <path
                d="M 50 10 C 50 35, 65 50, 90 50 C 65 50, 50 65, 50 90 C 50 65, 35 50, 10 50 C 35 50, 50 35, 50 10 Z"
                fill="url(#chromeGrad)"
                stroke="#ffffff"
                strokeWidth="2"
              />
              <circle cx="50" cy="50" r="14" fill="#ffffff" opacity="0.8" />
            </svg>
          </motion.div>

          {/* 2. TOP-RIGHT: Blue Metallic Faceted Crystal */}
          <motion.div
            id="floating-blue-crystal"
            className="absolute -top-8 sm:-top-10 -right-4 sm:right-4 md:right-2 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 cursor-pointer z-20"
            animate={{
              y: [0, 14, 0],
              rotate: [0, -10, 10, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
            whileHover={{ scale: 1.15, rotate: -15 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => triggerStickerWiggle('blue-crystal', e)}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]">
              <polygon points="50,15 85,35 50,55 15,35" fill="#60a5fa" />
              <polygon points="85,35 85,75 50,95 50,55" fill="#1d4ed8" />
              <polygon points="15,35 50,55 50,95 15,75" fill="#2563eb" />
              <line x1="50" y1="55" x2="50" y2="95" stroke="#93c5fd" strokeWidth="1.5" />
            </svg>
          </motion.div>

          {/* 3. BOTTOM-LEFT: Red Velvet 3D Heart */}
          <motion.div
            id="floating-red-heart"
            className="absolute -bottom-6 sm:-bottom-8 -left-4 sm:left-4 md:left-2 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 cursor-pointer z-20"
            animate={{
              y: [0, 10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            whileHover={{ scale: 1.2, rotate: -12 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => triggerStickerWiggle('heart', e)}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_15px_25px_rgba(239,68,68,0.5)]">
              <defs>
                <radialGradient id="heartGrad" cx="35%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#ff7b89" />
                  <stop offset="40%" stopColor="#ef4444" />
                  <stop offset="85%" stopColor="#991b1b" />
                  <stop offset="100%" stopColor="#450a0a" />
                </radialGradient>
              </defs>
              <path
                d="M 50 85 C 20 60, 10 40, 25 22 C 38 7, 50 20, 50 30 C 50 20, 62 7, 75 22 C 90 40, 80 60, 50 85 Z"
                fill="url(#heartGrad)"
              />
              <ellipse cx="38" cy="28" rx="8" ry="4" fill="#ffffff" opacity="0.6" transform="rotate(-30 38 28)" />
            </svg>
          </motion.div>

          {/* 4. BOTTOM-RIGHT: Purple 3D 5-Petal Flower */}
          <motion.div
            id="floating-purple-flower"
            className="absolute -bottom-8 sm:-bottom-10 -right-4 sm:right-4 md:right-2 w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 cursor-pointer z-20"
            animate={{
              y: [0, -12, 0],
              rotate: [0, 360],
            }}
            transition={{
              y: { duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 },
              rotate: { duration: 24, repeat: Infinity, ease: 'linear' },
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => triggerStickerWiggle('flower', e)}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_15px_25px_rgba(168,85,247,0.5)]">
              <defs>
                <radialGradient id="petalGrad" cx="30%" cy="30%" r="70%">
                  <stop offset="0%" stopColor="#d8b4fe" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#581c87" />
                </radialGradient>
                <radialGradient id="centerGrad" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="60%" stopColor="#eab308" />
                  <stop offset="100%" stopColor="#854d0e" />
                </radialGradient>
              </defs>
              <circle cx="50" cy="22" r="18" fill="url(#petalGrad)" />
              <circle cx="77" cy="41" r="18" fill="url(#petalGrad)" />
              <circle cx="67" cy="74" r="18" fill="url(#petalGrad)" />
              <circle cx="33" cy="74" r="18" fill="url(#petalGrad)" />
              <circle cx="23" cy="41" r="18" fill="url(#petalGrad)" />
              <circle cx="50" cy="50" r="14" fill="url(#centerGrad)" />
              <circle cx="47" cy="46" r="4" fill="#ffffff" opacity="0.8" />
            </svg>
          </motion.div>

          {/* MAIN GIANT "ABOUT ME" DISPLAY TITLE */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            id="about-me-title"
            className="font-syne font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white uppercase tracking-tighter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
          >
            ABOUT ME
          </motion.h2>
        </div>

        {/* INTERACTIVE NAVIGATION PILLS FOR PROFILE SECTIONS */}
        <div className="flex items-center gap-2 p-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-md mb-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-2 rounded-full text-xs font-syne font-bold uppercase transition-all ${
              activeTab === 'overview'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-pink-600/30'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-5 py-2 rounded-full text-xs font-syne font-bold uppercase transition-all ${
              activeTab === 'education'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-pink-600/30'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Education & Background
          </button>
          <button
            onClick={() => setActiveTab('achievements')}
            className={`px-5 py-2 rounded-full text-xs font-syne font-bold uppercase transition-all ${
              activeTab === 'achievements'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-pink-600/30'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Honors & Distinctions
          </button>
        </div>

        {/* DYNAMIC TAB CONTENT */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl space-y-6"
          >
            <p className="font-outfit text-base sm:text-lg md:text-xl text-zinc-300 leading-relaxed font-normal">
              I am a <strong className="text-white">Brand Strategist & Creative Researcher</strong> pursuing my PGDM at Great Lakes Institute of Management, Gurgaon. With a foundation in Business Administration and a passion for consumer psychology, I blend rigorous market insights with compelling storytelling to construct resonant brand positions.
            </p>
            <p className="font-outfit text-sm sm:text-base text-zinc-400 leading-relaxed">
              From reducing campaign iteration cycles by 30% through AI-assisted script prototyping at Storyboats to analyzing brand white-spaces for organizations like IMS Learning and academic case studies, I specialize in transforming consumer data into memorable brand equity.
            </p>

            <div className="pt-4 flex justify-center">
              <button
                id="about-contact-btn"
                onClick={onOpenContact}
                className="group relative px-8 sm:px-10 py-3.5 sm:py-4 rounded-full glow-pill text-white font-syne font-black text-sm sm:text-base tracking-widest uppercase transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl flex items-center gap-2 cursor-pointer border border-white/20"
              >
                <span>LET'S CONNECT</span>
                <MoveRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}

        {activeTab === 'education' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-3xl text-left space-y-4"
          >
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-syne font-bold text-lg text-white">{edu.degree}</h3>
                    <p className="text-zinc-400 text-sm">{edu.institute}, {edu.city}</p>
                    <p className="text-pink-400 text-xs font-mono mt-1">{edu.score}</p>
                  </div>
                </div>
                <div className="text-xs font-mono text-zinc-400 bg-zinc-800/80 px-3 py-1.5 rounded-full self-start md:self-auto">
                  {edu.year}
                </div>
              </div>
            ))}

            {/* Languages and Certifications Bar */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/20 to-pink-950/20 border border-purple-800/30 flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-3">
                <Globe2 className="w-5 h-5 text-pink-400" />
                <span className="text-xs font-mono text-zinc-300 font-semibold uppercase">Multilingual Fluency:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES_DATA.map((lang, i) => (
                  <span key={i} className="text-xs px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300">
                    {lang.name} <span className="text-pink-400 text-[10px]">({lang.proficiency})</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'achievements' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-3xl text-left grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {ACHIEVEMENTS_DATA.map((ach, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-pink-500/40 transition-all flex flex-col justify-between"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0">
                    <Trophy className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-pink-400 uppercase tracking-widest">{ach.badge}</span>
                    <h4 className="font-syne font-bold text-base text-white mt-0.5">{ach.title}</h4>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">{ach.desc}</p>
                  </div>
                </div>
                {ach.year && (
                  <div className="mt-4 pt-3 border-t border-zinc-800/60 text-right">
                    <span className="text-[10px] font-mono text-zinc-400">{ach.organizer} • {ach.year}</span>
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}

        {/* End of content */}
      </div>
    </section>
  );
};

