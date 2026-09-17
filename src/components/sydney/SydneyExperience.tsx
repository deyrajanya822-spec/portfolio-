import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../../data/sydneyData';
import { 
  ArrowUpRight, Sparkles, Briefcase, GraduationCap, Award, 
  Calendar, CheckCircle2 
} from 'lucide-react';
import { LotusTvcModal } from './LotusTvcModal';
import { ToffeemanModal } from './ToffeemanModal';
import { RockwellModal } from './RockwellModal';
import { CampaModal } from './CampaModal';
import { BrewtopiaModal } from './BrewtopiaModal';
import { MyntraModal } from './MyntraModal';

export const SydneyExperience: React.FC = () => {
  const [isLotusModalOpen, setIsLotusModalOpen] = useState(false);
  const [isToffeemanModalOpen, setIsToffeemanModalOpen] = useState(false);
  const [isRockwellModalOpen, setIsRockwellModalOpen] = useState(false);
  const [isCampaModalOpen, setIsCampaModalOpen] = useState(false);
  const [isBrewtopiaModalOpen, setIsBrewtopiaModalOpen] = useState(false);
  const [isMyntraModalOpen, setIsMyntraModalOpen] = useState(false);

  const handleCardClick = (id: string) => {
    if (id === 'exp-rockwell') {
      setIsRockwellModalOpen(true);
    } else if (id === 'exp-campa') {
      setIsCampaModalOpen(true);
    } else if (id === 'exp-myntra') {
      setIsMyntraModalOpen(true);
    } else if (id === 'exp-brewtopia') {
      setIsBrewtopiaModalOpen(true);
    } else if (id === 'exp-lotus') {
      setIsLotusModalOpen(true);
    } else if (id === 'exp-toffeeman') {
      setIsToffeemanModalOpen(true);
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 md:px-10 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section 1: Professional Experience & Internships (from Resume) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A141D]/10 text-[#7A141D] text-xs font-mono uppercase tracking-widest mb-3">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Work Experience &amp; Internships</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif tracking-tight font-normal text-[#1F1D1A]">
                Professional <span className="italic text-[#7A141D]">Trajectory</span>
              </h2>
            </div>
            <p className="text-sm text-[#6B635A] max-w-md font-sans">
              Hands-on general management, market research benchmarking, and cross-functional leadership execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Storyboats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-[2rem] bg-white border border-[#E8DFD5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#7A141D]/10 text-[#7A141D] text-[11px] font-mono font-medium uppercase tracking-wider">
                    General Management Intern
                  </span>
                  <span className="text-xs font-mono text-[#7D756C] flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    May – Jul 2024
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#1F1D1A] mb-1">
                  Storyboats
                </h3>
                <p className="text-xs font-mono text-[#7A141D] mb-4">
                  Brand Architecture &amp; Venture Advisory
                </p>

                <ul className="space-y-2.5 text-xs text-[#554D45] font-sans leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7A141D] shrink-0 mt-0.5" />
                    <span>Benchmarked <strong>25+ direct and indirect competitors</strong> across brand positioning, messaging architecture, and content formats.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7A141D] shrink-0 mt-0.5" />
                    <span>Conceptualized and delivered <strong>7+ comprehensive brand identity</strong> and narrative strategies for emerging venture founders.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7A141D] shrink-0 mt-0.5" />
                    <span>Formulated scalable go-to-market storytelling frameworks aligning founders, visual designers, and channel leads.</span>
                  </li>
                </ul>

                {/* Direct Internship Deliverables Quick Triggers */}
                <div className="mt-4 pt-3 border-t border-[#F0EAE1]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#7A141D] font-bold block mb-2">
                    Client Deliverables Executed:
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setIsLotusModalOpen(true)}
                      className="px-2.5 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#7A141D] hover:text-white text-[#1F1D1A] text-[11px] font-mono text-left border border-[#E8DFD5] transition-colors flex items-center justify-between group"
                    >
                      <span className="truncate">Lotus Chocolate</span>
                      <ArrowUpRight className="w-3 h-3 shrink-0 opacity-60 group-hover:opacity-100" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsToffeemanModalOpen(true)}
                      className="px-2.5 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#7A141D] hover:text-white text-[#1F1D1A] text-[11px] font-mono text-left border border-[#E8DFD5] transition-colors flex items-center justify-between group"
                    >
                      <span className="truncate">Toffeeman</span>
                      <ArrowUpRight className="w-3 h-3 shrink-0 opacity-60 group-hover:opacity-100" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsRockwellModalOpen(true)}
                      className="px-2.5 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#7A141D] hover:text-white text-[#1F1D1A] text-[11px] font-mono text-left border border-[#E8DFD5] transition-colors flex items-center justify-between group"
                    >
                      <span className="truncate">Rockwell</span>
                      <ArrowUpRight className="w-3 h-3 shrink-0 opacity-60 group-hover:opacity-100" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsCampaModalOpen(true)}
                      className="px-2.5 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#7A141D] hover:text-white text-[#1F1D1A] text-[11px] font-mono text-left border border-[#E8DFD5] transition-colors flex items-center justify-between group"
                    >
                      <span className="truncate">Campa CSD</span>
                      <ArrowUpRight className="w-3 h-3 shrink-0 opacity-60 group-hover:opacity-100" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-[#F0EAE1] flex items-center justify-between text-[11px] font-mono text-[#7D756C]">
                <span>Immediate Internship</span>
                <span className="font-semibold text-[#7A141D]">4 Client Deliverables</span>
              </div>
            </motion.div>

            {/* IMS Coaching */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 rounded-[2rem] bg-white border border-[#E8DFD5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#7A141D]/10 text-[#7A141D] text-[11px] font-mono font-medium uppercase tracking-wider">
                    Marketing Intern
                  </span>
                  <span className="text-xs font-mono text-[#7D756C] flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Jan – Apr 2024
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#1F1D1A] mb-1">
                  IMS Coaching Institute
                </h3>
                <p className="text-xs font-mono text-[#7A141D] mb-4">
                  Market Research &amp; Conversion Optimization
                </p>

                <ul className="space-y-2.5 text-xs text-[#554D45] font-sans leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7A141D] shrink-0 mt-0.5" />
                    <span>Conducted in-depth market research across <strong>30+ educational institutes</strong>, mapping competitor offerings and fee structures.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7A141D] shrink-0 mt-0.5" />
                    <span>Achieved a <strong>70% conversion rate</strong> from initial inquiries into counseling sessions through targeted engagement workshops.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#7A141D] shrink-0 mt-0.5" />
                    <span>Designed student-facing promotional collaterals and feedback loops that strengthened institutional credibility.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-6 border-t border-[#F0EAE1] flex items-center justify-between text-[11px] font-mono text-[#7D756C]">
                <span>Focus: Qualitative Surveying</span>
                <span className="font-semibold text-[#7A141D]">70% Conversion</span>
              </div>
            </motion.div>

            {/* McKinsey Forward */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-[2rem] bg-white border border-[#E8DFD5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-600/10 text-emerald-800 text-[11px] font-mono font-medium uppercase tracking-wider">
                    Program Participant
                  </span>
                  <span className="text-xs font-mono text-[#7D756C] flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    McKinsey &amp; Company
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#1F1D1A] mb-1">
                  McKinsey Forward
                </h3>
                <p className="text-xs font-mono text-emerald-800 mb-4">
                  McKinsey Forward Program Participant • 10-Week Accelerator
                </p>

                <ul className="space-y-2.5 text-xs text-[#554D45] font-sans leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>Selected for an intensive <strong>10-week professional accelerator</strong> by McKinsey &amp; Company for future leaders.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>Mastered structured hypothesis-driven problem solving, digital fluency, and collaborative team leadership.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>Formulated practical frameworks for navigating ambiguity and data-backed organizational decision-making.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 mt-6 border-t border-[#F0EAE1] flex items-center justify-between text-[11px] font-mono text-[#7D756C]">
                <span>Focus: Structured Consulting</span>
                <span className="font-semibold text-emerald-800">10-Week Selective</span>
              </div>
            </motion.div>
          </div>

          {/* Education Row */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#F0EAE1]/80 border border-[#E0D5C7] flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#7A141D] text-white flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#7A141D] font-medium">Post Graduate Diploma in Management (PGDM)</span>
                <h4 className="font-serif font-bold text-[#1F1D1A] text-base">Great Lakes Institute of Management (GLIM), Gurgaon</h4>
                <p className="text-xs text-[#6B635A] font-mono mt-0.5">2025 – 2027 • Marketing &amp; Strategy Focus</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#F0EAE1]/80 border border-[#E0D5C7] flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#7A141D] text-white flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#7A141D] font-medium">Bachelor of Business Administration (BBA)</span>
                <h4 className="font-serif font-bold text-[#1F1D1A] text-base">The Maharaja Sayajirao University of Baroda (MSU)</h4>
                <p className="text-xs text-[#6B635A] font-mono mt-0.5">2022 – 2025 • General Management &amp; Marketing</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Main Crimson Strategic Projects Container */}
        <div id="case-studies" className="relative rounded-[3rem] bg-[#7A141D] text-white p-8 sm:p-14 lg:p-18 overflow-hidden shadow-2xl scroll-mt-24">
          {/* Decorative Flowing Curves */}
          <svg
            viewBox="0 0 1000 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full pointer-events-none opacity-15"
          >
            <path
              d="M-50 200 C 200 80, 400 350, 700 150 C 900 20, 980 300, 1100 220"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M0 320 C 300 220, 500 420, 800 240 C 950 150, 1020 340, 1150 280"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-rose-200 text-xs font-mono uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Immediate Internship Client Engagements • Storyboats</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-serif tracking-tight font-normal text-white"
            >
              Strategic Marketing &amp; Brand Advisory
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-rose-200/90 text-sm sm:text-base font-sans mt-3 font-light"
            >
              Hands-on client deliverables executed during my General Management Internship at Storyboats — spanning consumer psychology, AI commercial direction, multi-tier creator GTM, and retail merchandising.
            </motion.p>
          </div>

          {/* 4 Case Study Pillars (Lotus, Toffeeman, Rockwell, Campa) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => handleCardClick(exp.id)}
                className="group flex flex-col justify-between bg-white/10 backdrop-blur-md rounded-[2.2rem] p-5 sm:p-6 border border-white/20 hover:border-white/50 hover:bg-white/15 transition-all duration-300 cursor-pointer shadow-lg"
              >
                {/* Image Header with Badge */}
                <div>
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-black/20">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <span className="absolute bottom-2.5 left-2.5 text-xs font-mono font-medium text-rose-200">
                      {exp.subtitle}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-rose-300 block mb-1">
                    {exp.badge}
                  </span>
                  <h3 className="text-xl font-serif text-white font-bold group-hover:text-rose-100 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs text-rose-100/80 font-sans leading-relaxed mt-2 line-clamp-3">
                    {exp.description}
                  </p>
                </div>

                {/* Card Footer Button */}
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-rose-200 group-hover:underline flex items-center gap-1">
                    <span>Explore Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white text-xs group-hover:bg-white group-hover:text-[#7A141D] transition-colors">
                    →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Metrics Bar inside the Crimson Container */}
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 text-center relative z-10">
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white">38s TVC</div>
              <div className="text-xs font-mono text-rose-200 mt-1">Lotus AI Commercial</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white">9 Poses</div>
              <div className="text-xs font-mono text-rose-200 mt-1">Toffeeman Mascot Lore</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white">₹7.8M GTM</div>
              <div className="text-xs font-mono text-rose-200 mt-1">Rockwell Creator Spend</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white">10 Cards</div>
              <div className="text-xs font-mono text-rose-200 mt-1">Campa POS Strategy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Modals */}
      <LotusTvcModal
        isOpen={isLotusModalOpen}
        onClose={() => setIsLotusModalOpen(false)}
      />
      <ToffeemanModal
        isOpen={isToffeemanModalOpen}
        onClose={() => setIsToffeemanModalOpen(false)}
      />
      <RockwellModal
        isOpen={isRockwellModalOpen}
        onClose={() => setIsRockwellModalOpen(false)}
      />
      <CampaModal
        isOpen={isCampaModalOpen}
        onClose={() => setIsCampaModalOpen(false)}
      />
    </section>
  );
};
