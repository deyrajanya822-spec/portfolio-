import React from 'react';
import { motion } from 'motion/react';
import { WavyLines } from './WavyLines';
import { Sparkles, Target, Lightbulb, Compass } from 'lucide-react';
import { SYDNEY_PROFILE } from '../../data/sydneyData';

export const SydneyAbout: React.FC = () => {
  return (
    <section id="about" className="relative py-24 bg-[#FAF7F2] overflow-hidden border-t border-[#E8DFD5]/70">
      {/* Background organic ribbon curves */}
      <WavyLines variant="about" className="bottom-0 right-0 w-[80%] h-[80%] opacity-80" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Introduction & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#7A141D]/10 text-[#7A141D] text-xs font-mono tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Executive Profile &amp; Background</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-serif text-[#1F1D1A] font-normal tracking-tight">
              Hi, I'm <span className="italic text-[#7A141D] font-medium">Rajanya!</span>
            </h2>

            <p className="text-xl sm:text-2xl font-serif text-[#2D2823] leading-relaxed font-normal">
              A business-oriented management professional skilled in{' '}
              <strong className="font-semibold text-[#7A141D] underline decoration-[#7A141D]/30 underline-offset-4">
                market research
              </strong>
              ,{' '}
              <strong className="font-semibold text-[#7A141D] underline decoration-[#7A141D]/30 underline-offset-4">
                brand strategy
              </strong>
              , and{' '}
              <strong className="font-semibold text-[#7A141D] underline decoration-[#7A141D]/30 underline-offset-4">
                cross-functional collaboration
              </strong>
              , with proven expertise in guiding teams and driving data-driven organizational outcomes.
            </p>

            <p className="text-base sm:text-lg text-[#554D45] leading-relaxed font-sans">
              Currently pursuing my <strong className="font-semibold text-[#7A141D]">PGDM at Great Lakes Institute of Management (Gurgaon)</strong>, following a <strong className="font-semibold text-[#7A141D]">BBA from MSU Baroda</strong>. As a selective <strong className="font-semibold text-[#7A141D]">McKinsey Forward Scholar</strong>, I combine structured hypothesis-driven problem solving with agile execution to evaluate competitive landscapes and craft high-converting go-to-market strategies.
            </p>

            {/* Core Competencies from Resume */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#F0EAE1]/70 border border-[#E0D5C7]">
                <div className="w-8 h-8 rounded-full bg-[#7A141D] text-white flex items-center justify-center mb-3">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-[#1F1D1A] text-base mb-1">Market Intelligence</h4>
                <p className="text-xs text-[#6B635A]">25+ competitor audits, category whitespace discovery &amp; qualitative consumer surveys.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F0EAE1]/70 border border-[#E0D5C7]">
                <div className="w-8 h-8 rounded-full bg-[#7A141D] text-white flex items-center justify-center mb-3">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-[#1F1D1A] text-base mb-1">Brand &amp; GTM Strategy</h4>
                <p className="text-xs text-[#6B635A]">Delivered 7+ startup brand narratives, POS merchandise &amp; campaign frameworks.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F0EAE1]/70 border border-[#E0D5C7]">
                <div className="w-8 h-8 rounded-full bg-[#7A141D] text-white flex items-center justify-center mb-3">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-bold text-[#1F1D1A] text-base mb-1">Problem Solving &amp; Leadership</h4>
                <p className="text-xs text-[#6B635A]">McKinsey Forward accelerator, team leadership &amp; 70% counseling conversion at IMS.</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Monogram Emblem with Crimson Contour */}
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
                  {SYDNEY_PROFILE.profilePhoto ? (
                    <img
                      src={SYDNEY_PROFILE.profilePhoto}
                      alt="Rajanya Dey"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <span className="font-serif italic text-6xl sm:text-7xl font-bold tracking-tight text-[#FAF7F2]">
                        RD
                      </span>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#E8DFD5] mt-2">
                        Rajanya Dey
                      </span>
                      <span className="text-[11px] font-mono text-[#FAF7F2]/75 mt-1">
                        GLIM Gurgaon • PGDM '27
                      </span>
                    </>
                  )}
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
      </div>
    </section>
  );
};
