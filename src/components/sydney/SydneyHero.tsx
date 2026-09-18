import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WavyLines } from './WavyLines';
import { ArrowDown, Sparkles, Download, Check, FileText, ExternalLink, X, Printer } from 'lucide-react';
import { SYDNEY_PROFILE } from '../../data/sydneyData';

interface SydneyHeroProps {
  onOpenContact: () => void;
}

export const SydneyHero: React.FC<SydneyHeroProps> = ({ onOpenContact }) => {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadCV = () => {
    // Generate text/markdown structured resume download
    const cvContent = `=====================================================
RAJANYA DEY — STRATEGY & BUSINESS PORTFOLIO
Management & Market Research Specialist
Open to strategic & management roles
Phone: ${SYDNEY_PROFILE.phone} | Email: ${SYDNEY_PROFILE.email}
LinkedIn: ${SYDNEY_PROFILE.linkedin}
=====================================================

EXECUTIVE SUMMARY
Business-oriented management professional with cross-functional expertise across
market research, business analytics, Go-To-Market (GTM) strategy, and digital
transformation. Proven track record executing 9-city pan-India field research,
configuring enterprise analytics (GA4/GTM/GSC) to achieve 100/100 SEO, and
architecting ₹7.8M creator marketing strategy.

RECOGNITION & HONORS
• All-India Rank 2 (AIR 2) — "Minutes Marvels" Micro-Writing Competition, IIM Calcutta (2025)
• Member, Alumni Committee (2026)
• Flagship Event Coordinator — Crest 2025
• McKinsey Forward Program Participant — McKinsey & Company (2025)

EXPERIENCE & PROJECTS
1. Rockwell — Influencer & GTM Strategy (₹7.8M Campaign)
   - Architected 7-creator multi-tier influencer campaign for Indian heat-belt car cooler adoption.
   - Delivered 14.2M+ verified reach and comprehensive tier-segmented ROI models.

2. Campa CSD — Brand Strategy, Research & Retail POS (Reliance Consumer Products)
   - Led 6-week qualitative research across 9 Indian cities (19 sessions, 9 IDIs).
   - Formulated "Passenger to Driver" positioning strategy and designed 4 physical retail POS units.

3. Myntra — Marketing Decision-Support System
   - Formulated KPI decision architecture across 5 Strategic Business Units (SBUs) and 7 channels (35 performance cells).
   - Standardized simultaneous ROAS and CPA evaluation to identify underperforming cells and guide budget reallocation.

4. Brewtopia — Digital Transformation & Analytics
   - Designed and deployed consumer-facing "Living Cup Builder" interactive web platform.
   - Configured full analytics telemetry from scratch (GA4, GTM, Search Console) and attained 100/100 SEO audit score.

5. Lotus Chocolate — Brand Strategy & AI TVC (Storyboats)
   - Category whitespace analysis across 10 FMCG countline brands.
   - Conceptualized and directed 38s AI commercial campaign "Some Fights End Better" for High 5 chocolate.

6. Toffeeman — Mascot Design & Consumer Psychology
   - 9-pose emotional action sheet, 6-panel narrative, and neuroscience consumer psychology study.

7. IMS Coaching Institute — Marketing Intern
   - Conducted 30+ field surveys, engaged 65+ prospects with 75% qualification rate, and coordinated high-conversion enrollment event.

SKILLS & COMPETENCIES
• Research & Analysis: Competitive Benchmarking (25+ brands), Consumer Surveys (30+), Qualitative Field Research (9 cities), SPSS Regression, As-Is/To-Be Analysis
• Digital & Analytics Tools: Google Analytics 4, Google Tag Manager, Google Search Console, SEO Auditing, KPI Dashboard Design, Advanced Excel, Python
• Strategy & Frameworks: McKinsey MECE, Hypothesis-Driven Problem Solving, GTM Campaign Design, Issue Tree Decomposition, Whitespace Mapping
• Communication: Executive Presentations, C-Suite Strategy Decks, Stakeholder Alignment, Pitch Books
• Languages: English, Hindi, Gujarati, Bengali

EDUCATION
• Post Graduate Diploma in Management (2025–2027)
• Bachelor of Business Administration (BBA) | Maharaja Sayajirao University of Baroda (MSU)
`;

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Rajanya_Dey_Resume.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const METRIC_BADGES = [
    { label: '14.2M+ Reach', sub: 'Rockwell Campaign' },
    { label: '9 Pan-India Cities', sub: 'Campa Research' },
    { label: '100/100 SEO Score', sub: 'Brewtopia Platform' },
    { label: '5 SBU Dashboard', sub: 'Myntra KPI System' },
    { label: '₹7.8M Campaign', sub: 'Creator GTM Pitch' }
  ];

  return (
    <section className="relative min-h-[70vh] md:min-h-[78vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#FAF7F2]">
      {/* Background Organic Red Ribbon Curves */}
      <WavyLines variant="hero" className="-top-12 -left-16 w-[120%] h-[120%] opacity-90" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 w-full relative z-10">
        {/* Editorial Title Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 space-y-4"
          >
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A141D]/10 text-[#7A141D] text-xs font-mono tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#7A141D]" />
              <span className="font-semibold">Strategy • Market Research • Analytics • Business Problem Solving</span>
            </div>

            {/* Headline */}
            <div>
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#7D756C] block mb-1">
                Rajanya Dey
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight text-[#1F1D1A] font-normal leading-[1.02]">
                Strategy &amp; <span className="italic text-[#7A141D]">Business</span> <br />
                <span className="tracking-tight text-3xl sm:text-5xl md:text-6xl text-[#5C554D] font-light">
                  Portfolio
                </span>
              </h1>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:max-w-lg pb-2 text-left flex flex-col justify-between space-y-6"
          >
            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#5C554D] leading-relaxed font-sans">
              I solve business problems using market research, data analytics, strategic frameworks, and cross-functional collaboration — from field research across 9 Indian cities to building digital analytics systems and managing ₹7.8M go-to-market campaigns.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3 rounded-full bg-[#7A141D] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#5E0F16] transition-all shadow-md cursor-pointer flex items-center gap-2"
              >
                <span>Get in Touch</span>
              </button>

              <button
                onClick={handleDownloadCV}
                className="px-6 py-3 rounded-full bg-white border-2 border-[#7A141D] text-[#7A141D] text-xs font-mono uppercase tracking-wider hover:bg-[#7A141D] hover:text-white transition-all shadow-sm cursor-pointer flex items-center gap-2 group"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" />
                    <span>CV Downloaded!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5 text-[#7A141D] group-hover:text-white transition-colors" />
                    <span>Download CV</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>

        {/* 5 High-Impact Metric Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-8 pt-8 border-t border-[#E0D5C7] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          {METRIC_BADGES.map((badge, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#E0D5C7] hover:border-[#7A141D]/40 transition-colors shadow-xs flex flex-col justify-between"
            >
              <div className="text-xl sm:text-2xl font-serif font-bold text-[#7A141D]">
                {badge.label}
              </div>
              <div className="text-[11px] font-mono text-[#7D756C] mt-1">
                {badge.sub}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
