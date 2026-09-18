import React from 'react';
import { motion } from 'motion/react';
import { WavyLines } from './WavyLines';
import { Sparkles, Search, Compass, BarChart3, Globe } from 'lucide-react';
import { SYDNEY_PROFILE } from '../../data/sydneyData';

export const SydneyAbout: React.FC = () => {
  const COMPETENCY_CARDS = [
    {
      id: 'comp-1',
      icon: Search,
      title: 'Research & Business Analysis',
      subtitle: 'Rigorous Primary & Secondary Inquiry',
      bullets: [
        'Competitive benchmarking (25+ FMCG & automotive brands)',
        'Primary consumer surveys (30+ in-depth interviews)',
        'Qualitative field research across 9 Indian cities',
        'Data-driven scorecards & multi-factor whitespace analysis',
        'As-Is vs. To-Be strategic problem diagnosis'
      ],
      tag: 'Qualitative & Quantitative'
    },
    {
      id: 'comp-2',
      icon: Compass,
      title: 'Strategy & Go-to-Market',
      subtitle: 'Commercial Strategy & Channel Design',
      bullets: [
        'GTM campaign architecture (₹7.8M multi-tier pitch)',
        'Omnichannel distribution & channel performance design',
        'Multi-tier influencer marketing architecture (Macro & Micro)',
        'Physical retail POS & point-of-sale display engineering',
        'Brand positioning & consumer perception shift strategy'
      ],
      tag: 'GTM & Commercial Impact'
    },
    {
      id: 'comp-3',
      icon: BarChart3,
      title: 'Analytics & Digital Tools',
      subtitle: 'Telemetry, KPIs & Decision Architecture',
      bullets: [
        'GA4, GTM & Google Search Console end-to-end setup',
        'KPI dashboard architecture across 5 SBUs & 7 channels',
        'Simultaneous ROAS & CPA efficiency tracking systems',
        'SPSS regression modeling & statistical validation',
        '100/100 PageSpeed & technical SEO auditing'
      ],
      tag: 'Decision-Support Systems'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#FAF7F2] overflow-hidden border-t border-[#E8DFD5]/70">
      {/* Background organic ribbon curves */}
      <WavyLines variant="about" className="bottom-0 right-0 w-[80%] h-[80%] opacity-80" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 space-y-16">
        {/* Top: Introduction & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A141D]/10 text-[#7A141D] text-xs font-mono tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Me &amp; Philosophy</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-serif text-[#1F1D1A] font-normal tracking-tight">
              Hi, I'm <span className="italic text-[#7A141D] font-medium">{SYDNEY_PROFILE.name.split(' ')[0]}!</span>
            </h2>

            <p className="text-xl sm:text-2xl font-serif text-[#2D2823] leading-relaxed font-normal">
              I’m curious, I ask a lot of questions, and I like figuring things out. I enjoy understanding people, exploring ideas, solving problems, and finding ways to make things better. I have a creative side, an analytical side, and I’m still figuring out how to make both work together.
            </p>

            <p className="text-base sm:text-lg text-[#554D45] leading-relaxed font-sans">
              Curious mind. Creative streak. Always figuring it out.
            </p>
          </motion.div>

          {/* Right: Monogram / Portrait Emblem with Crimson Contour */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative">
              {/* Outer decorative contour ring */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border-2 border-dashed border-[#7A141D] p-3 animate-spin-slow">
                <div className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-[#FAF7F2] bg-gradient-to-br from-[#7A141D] to-[#4A0A10] flex flex-col items-center justify-center text-white p-6 text-center">
                  <img
                    src={SYDNEY_PROFILE.profilePhoto || SYDNEY_PROFILE.heroImages.portraitGreen}
                    alt={SYDNEY_PROFILE.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-3 -right-2 px-4 py-2 rounded-2xl bg-white shadow-lg border border-[#E8DFD5] flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-medium text-[#1F1D1A]">Open for Opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom: 3 Updated Core Competency Cards (Change 7) */}
        <div className="space-y-6 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7A141D] font-semibold">
              Core Competencies
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif text-[#1F1D1A]">
              Balanced Across Research, Strategy &amp; Analytics
            </h3>
            <p className="text-sm font-sans text-[#7D756C]">
              Engineered for strategic consulting, marketing leadership, analytics, and general management roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMPETENCY_CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="p-7 sm:p-8 rounded-[2rem] bg-white border border-[#E0D5C7] shadow-sm hover:shadow-md hover:border-[#7A141D]/30 transition-all flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#7A141D]/10 text-[#7A141D] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E0D5C7] text-[10px] font-mono text-[#7A141D] font-semibold uppercase">
                        {card.tag}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xl font-serif font-bold text-[#1F1D1A]">
                        {card.title}
                      </h4>
                      <p className="text-xs font-mono text-[#7D756C] mt-1">
                        {card.subtitle}
                      </p>
                    </div>

                    <ul className="space-y-2.5 pt-2 text-xs font-sans text-[#5C554D] leading-relaxed">
                      {card.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#7A141D] shrink-0 mt-1.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
