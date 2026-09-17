import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Award, Users, Mic, Sparkles, CheckCircle2 } from 'lucide-react';
import { WavyLines } from './WavyLines';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="relative py-20 px-4 sm:px-6 md:px-10 bg-[#FAF7F2] overflow-hidden border-t border-[#E8DFD5]/80">
      {/* Subtle organic background lines */}
      <WavyLines variant="about" className="top-0 left-0 w-full h-full opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A141D]/10 text-[#7A141D] text-xs font-mono uppercase tracking-widest mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors &amp; Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#1F1D1A] font-normal tracking-tight">
            Recognition &amp; <span className="italic text-[#7A141D] font-medium">Achievements</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#635B52] font-sans mt-3 max-w-xl mx-auto leading-relaxed">
            National-level competitive recognition and institutional leadership at premier business schools.
          </p>
        </div>

        {/* 3 Recognition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: IIM Calcutta AIR 2 (Featured Card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative p-7 rounded-[2rem] bg-gradient-to-br from-[#7A141D] via-[#651017] to-[#45090F] text-white shadow-xl flex flex-col justify-between overflow-hidden group border border-[#7A141D]"
          >
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-[11px] font-mono font-bold tracking-wider uppercase border border-amber-400/30 flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5" />
                  National Rank
                </span>
                <span className="text-xs font-mono text-rose-200">2025</span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-2 leading-tight">
                All-India Rank 2
              </h3>
              <p className="text-sm font-mono text-amber-300 font-semibold mb-3">
                "Minutes Marvels" Micro-Writing Competition
              </p>
              <p className="text-xs font-serif text-rose-100/90 leading-relaxed italic mb-4">
                Indian Institute of Management Calcutta (IIM Calcutta)
              </p>

              <div className="p-3.5 rounded-xl bg-white/10 border border-white/15 text-xs text-rose-100/95 font-sans leading-relaxed">
                Under 300 words. Competed against participants from top business schools across India, demonstrating precision, clarity, and rapid synthesis under strict constraint.
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-rose-200">
              <span>National B-School Arena</span>
              <span className="font-bold text-amber-300">AIR 2</span>
            </div>
          </motion.div>

          {/* Card 2: Member, Alumni Committee - GLIM Gurgaon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-7 rounded-[2rem] bg-white border border-[#E8DFD5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#7A141D]/10 text-[#7A141D] text-[11px] font-mono font-medium tracking-wider uppercase">
                  Institutional Governance
                </span>
                <span className="text-xs font-mono text-[#7D756C]">2025 – 2026</span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#1F1D1A] mb-2 leading-tight">
                Member, Alumni Committee
              </h3>
              <p className="text-xs font-mono text-[#7A141D] font-semibold mb-3">
                Great Lakes Institute of Management, Gurgaon
              </p>

              <p className="text-xs text-[#554D45] font-sans leading-relaxed">
                Driving alumni engagement, mentorship initiatives, and strategic institutional outreach across a nationwide network of business leaders and entrepreneurs.
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-[#F0EAE1] flex items-center justify-between text-[11px] font-mono text-[#7D756C]">
              <span>Alumni Relations &amp; Network</span>
              <span className="font-bold text-[#7A141D]">GLIM Committee</span>
            </div>
          </motion.div>

          {/* Card 3: Event Coordinator - Crest Flagship */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-7 rounded-[2rem] bg-white border border-[#E8DFD5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-[#7A141D]/10 text-[#7A141D] text-[11px] font-mono font-medium tracking-wider uppercase">
                  Flagship Event Leadership
                </span>
                <span className="text-xs font-mono text-[#7D756C]">2025</span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-[#1F1D1A] mb-2 leading-tight">
                Event Coordinator — "Crest"
              </h3>
              <p className="text-xs font-mono text-[#7A141D] font-semibold mb-3">
                Annual Flagship Management Conclave • GLIM Gurgaon
              </p>

              <p className="text-xs text-[#554D45] font-sans leading-relaxed">
                Sourced, coordinated, and invited distinguished alumni industry leaders and C-suite executives to serve as keynote speakers and evaluation judges for marquee competitive tracks.
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-[#F0EAE1] flex items-center justify-between text-[11px] font-mono text-[#7D756C]">
              <span>Executive Stakeholder Management</span>
              <span className="font-bold text-[#7A141D]">Crest 2025</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
