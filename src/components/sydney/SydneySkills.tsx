import React from 'react';
import { motion } from 'motion/react';
import { Search, BarChart3, Compass, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { WavyLines } from './WavyLines';

export const SydneySkills: React.FC = () => {
  const SKILL_CATEGORIES = [
    {
      id: 'cat-research',
      title: 'Research & Analysis',
      subtitle: 'Primary & Secondary Rigor',
      icon: Search,
      tag: 'Methodology',
      skills: [
        { name: 'Competitive Benchmarking', desc: '25+ FMCG & automotive category matrices' },
        { name: 'Consumer Surveys', desc: '30+ structured in-depth interviews & questionnaires' },
        { name: 'Qualitative Field Research', desc: 'Pan-India field investigation across 9 cities' },
        { name: 'SPSS Regression Modeling', desc: 'Quantitative consumer behavior statistical modeling' },
        { name: 'Secondary Data Analysis', desc: 'Industry reports, macroeconomic whitespace analysis' },
        { name: 'Data-Driven Scorecards', desc: 'Weighted multi-factor brand health indexes' }
      ]
    },
    {
      id: 'cat-digital',
      title: 'Digital & Analytics Tools',
      subtitle: 'Telemetry & Systems Setup',
      icon: BarChart3,
      tag: 'Tooling',
      skills: [
        { name: 'Google Analytics 4 (GA4)', desc: 'Custom event triggers, conversion funnels & segments' },
        { name: 'Google Tag Manager (GTM)', desc: 'Tag deployment, container triggers & data layers' },
        { name: 'Google Search Console', desc: 'Indexing health, query tracking & organic CTR analysis' },
        { name: 'SEO Auditing', desc: 'Core Web Vitals, metadata hygiene & 100/100 score' },
        { name: 'KPI Dashboard Design', desc: '5 SBUs × 7 channels multi-tier decision systems' },
        { name: 'Advanced Excel', desc: 'Financial modeling, pivot architecture & VLOOKUP/XLOOKUP' },
        { name: 'Python (Basic)', desc: 'Data transformation, Pandas scripts & exploratory analysis' }
      ]
    },
    {
      id: 'cat-strategy',
      title: 'Strategy & Frameworks',
      subtitle: 'Structured Problem Solving',
      icon: Compass,
      tag: 'Consulting',
      skills: [
        { name: 'McKinsey MECE Framework', desc: 'Mutually exclusive, collectively exhaustive scoping' },
        { name: 'Hypothesis-Driven Problem Solving', desc: 'Issue tree formulation & deductive testing' },
        { name: 'Go-to-Market (GTM) Design', desc: '₹7.8M multi-tier automotive creator campaign architecture' },
        { name: 'Brand Architecture', desc: 'Countline whitespace, identity archetypes & positioning' },
        { name: 'Issue Tree Decomposition', desc: 'Root-cause diagnostic trees for business friction' },
        { name: 'Category Whitespace Analysis', desc: '10-brand competitive quadrant mapping' }
      ]
    },
    {
      id: 'cat-communication',
      title: 'Communication & Client Work',
      subtitle: 'Executive Persuasion & Governance',
      icon: MessageSquare,
      tag: 'Leadership',
      skills: [
        { name: 'Client Presentations', desc: 'Executive delivery for corporate clients & faculty panels' },
        { name: 'Strategy Decks', desc: 'Structured narrative consulting decks (10-slide standard)' },
        { name: 'Stakeholder Management', desc: 'Multi-SBU alignment, faculty reviews & client syncs' },
        { name: 'Cross-Functional Collaboration', desc: 'Bridging creative directors, field researchers & analysts' },
        { name: 'Pitch Books', desc: 'Commercial pitch architecture with tiered unit economics' },
        { name: 'Event Coordination', desc: 'Curating C-suite alumni judges for Crest 2025 festival' }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-24 bg-[#FAF7F2] overflow-hidden border-t border-[#E8DFD5]/80">
      {/* Background subtle curves */}
      <WavyLines variant="about" className="bottom-0 left-0 w-full h-full opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A141D]/10 text-[#7A141D] text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Capability Matrix</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#1F1D1A] font-normal tracking-tight"
          >
            Functional &amp; <span className="italic text-[#7A141D]">Analytical Skills</span>
          </motion.h2>

          <p className="text-base sm:text-lg text-[#5C554D] font-sans">
            Organized by functional skill domain to meet the rigorous evaluation standards of consulting, analytics, marketing, and general management roles.
          </p>
        </div>

        {/* 4 Skill Category Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-7 sm:p-9 rounded-[2.5rem] bg-white border border-[#E0D5C7] shadow-sm hover:shadow-md hover:border-[#7A141D]/30 transition-all space-y-6 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD5]">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-[#7A141D]/10 text-[#7A141D] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-[#1F1D1A]">
                          {cat.title}
                        </h3>
                        <span className="text-xs font-mono text-[#7D756C]">
                          {cat.subtitle}
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#E0D5C7] text-[10px] font-mono uppercase tracking-wider text-[#7A141D] font-bold">
                      {cat.tag}
                    </span>
                  </div>

                  {/* Skills Grid / Pills */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-2xl bg-[#FAF7F2]/80 border border-[#E8DFD5] hover:border-[#7A141D]/40 transition-colors flex flex-col justify-between"
                      >
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#7A141D] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs sm:text-sm font-serif font-bold text-[#1F1D1A] block leading-snug">
                              {skill.name}
                            </span>
                            <span className="text-[11px] font-sans text-[#7D756C] block mt-1 leading-normal">
                              {skill.desc}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Micro-label */}
                <div className="pt-3 text-[11px] font-mono text-[#7D756C] flex items-center justify-between border-t border-[#E8DFD5]">
                  <span>{cat.skills.length} Validated Competencies</span>
                  <span className="text-[#7A141D] font-medium">Campus Placement Ready</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
