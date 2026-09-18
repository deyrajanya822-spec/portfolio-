import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Mic, Sparkles, CheckCircle2, Trophy, Star } from 'lucide-react';
import { WavyLines } from './WavyLines';

export const SydneyAchievements: React.FC = () => {
  const ACHIEVEMENTS = [
    {
      id: 'ach-1',
      icon: Trophy,
      badge: 'National Rank #2 • 2025',
      title: 'All-India Rank 2 (AIR 2) — "Minutes Marvels"',
      institution: 'IIM Calcutta',
      highlight: 'National Micro-Writing & Narrative Strategy Competition',
      description:
        'Secured 2nd rank nationwide competing against top B-school candidates across India. Required delivering compelling strategic persuasion, conceptual synthesis, and narrative economy in under 300 words under strict time constraints.',
      bullets: [
        'National-level competitive achievement across premier Indian B-schools',
        'Evaluated on precision of argument, narrative architecture, and executive brevity',
        'Under 300-word constraint demanding extreme clarity of thought'
      ],
      tag: 'Competitive Distinction',
      accentColor: 'from-amber-500/20 to-[#7A141D]/10'
    },
    {
      id: 'ach-2',
      icon: Users,
      badge: 'Institutional Leadership • 2026',
      title: 'Member, Alumni Committee',
      institution: 'Alumni Committee',
      highlight: 'Elected Student Body Leadership & Stakeholder Relations',
      description:
        'Selected to represent the student body in managing institutional relations with the global alumni network. Spearheaded engagement initiatives, mentorship pipelines, and executive alumni-student interactive forums.',
      bullets: [
        'Institutional trust and senior administrative representation',
        'Cross-cohort networking and executive mentorship architecture',
        'Collaborated with leadership on strategic relationship building'
      ],
      tag: 'Leadership & Trust',
      accentColor: 'from-[#7A141D]/20 to-stone-200/50'
    },
    {
      id: 'ach-3',
      icon: Mic,
      badge: 'Industry Relations • 2025',
      title: 'Event Coordinator — Crest 2025 Flagship',
      institution: 'Annual Management Festival',
      highlight: 'Alumni Judge Curation & Corporate Relations',
      description:
        'Sourced, engaged, and invited senior corporate alumni and industry leaders to serve as expert evaluators and judges for "Crest", the flagship annual management festival.',
      bullets: [
        'Direct corporate outreach and C-suite/VP level communication',
        'Managed guest hospitality, briefing packages, and evaluation protocol',
        'Strengthened corporate visibility and alumni affinity'
      ],
      tag: 'Corporate Outreach',
      accentColor: 'from-rose-500/15 to-[#7A141D]/10'
    }
  ];

  return (
    <section id="achievements" className="relative py-24 bg-[#FAF7F2] overflow-hidden border-t border-[#E8DFD5]/80">
      {/* Background organic curves */}
      <WavyLines variant="about" className="top-0 left-0 w-full h-full opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A141D]/10 text-[#7A141D] text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honors &amp; Leadership</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1F1D1A] font-normal tracking-tight"
          >
            Recognition &amp; <span className="italic text-[#7A141D]">Achievements</span>
          </motion.h2>

          <p className="text-base sm:text-lg text-[#5C554D] font-sans">
            Competitive national honors, institutional governance, and corporate event coordination at the management level.
          </p>
        </div>

        {/* 3 Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => {
            const Icon = ach.icon;
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative rounded-[2.2rem] bg-white border border-[#E0D5C7] p-7 sm:p-8 shadow-sm hover:shadow-md hover:border-[#7A141D]/30 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#7A141D]/10 text-[#7A141D] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E0D5C7] text-[10px] font-mono text-[#7A141D] font-bold uppercase tracking-wider">
                      {ach.badge}
                    </span>
                  </div>

                  {/* Title & Institution */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#7D756C] font-semibold block">
                      {ach.institution}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1F1D1A] mt-1 group-hover:text-[#7A141D] transition-colors leading-snug">
                      {ach.title}
                    </h3>
                    <p className="text-xs font-mono text-[#7A141D] font-medium mt-1">
                      {ach.highlight}
                    </p>
                  </div>

                  {/* Narrative Description */}
                  <p className="text-xs sm:text-sm font-sans text-[#5C554D] leading-relaxed">
                    {ach.description}
                  </p>

                  {/* Verified Bullets */}
                  <ul className="space-y-2 pt-2 border-t border-[#E8DFD5] text-xs font-sans text-[#4A453E]">
                    {ach.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Tag */}
                <div className="pt-4 border-t border-[#E8DFD5] flex items-center justify-between text-[11px] font-mono text-[#7D756C]">
                  <span className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-[#1F1D1A] font-medium">{ach.tag}</span>
                  </span>
                  <span className="text-[#7A141D] font-semibold">Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
