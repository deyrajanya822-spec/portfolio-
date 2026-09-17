import React from 'react';
import { motion } from 'motion/react';
import { EMAIL_AND_WEB_PROJECTS } from '../../data/sydneyData';
import { Mail, Globe, CheckCircle2, ArrowUpRight, Heart, Users, DollarSign } from 'lucide-react';

export const SydneyEmailWeb: React.FC = () => {
  const emailProject = EMAIL_AND_WEB_PROJECTS.find((p) => p.type === 'email');
  const webProject = EMAIL_AND_WEB_PROJECTS.find((p) => p.type === 'web');

  return (
    <section id="email-web" className="py-24 bg-[#FAF7F2] border-b border-[#E8DFD5]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A141D]/10 text-[#7A141D] text-xs font-mono uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Digital Inbound & Retention</span>
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif text-[#1F1D1A] font-normal tracking-tight">
            Email &amp; <span className="italic text-[#7A141D]">Web Dev</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5C554D] font-sans mt-3">
            High-converting newsletter funnels and clear, user-centric web architecture for community nonprofits.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Email Marketing */}
          {emailProject && (
            <div className="lg:col-span-5 rounded-[2.8rem] bg-white border border-[#E0D5C7] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#7A141D] font-semibold">
                    First Tee West Michigan
                  </span>
                  <h3 className="text-3xl font-serif text-[#1F1D1A] font-medium mt-1">
                    {emailProject.title}
                  </h3>
                </div>

                {/* Email Phone Mockup */}
                <div className="relative mx-auto w-full max-w-[280px] my-6">
                  <div className="rounded-[2.5rem] border-[6px] border-[#2B2723] bg-[#FAF7F2] overflow-hidden shadow-2xl p-3 aspect-[9/17] flex flex-col justify-between">
                    {/* Simulated Newsletter Content */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-[#E8DFD5] pb-2">
                        <span className="text-[10px] font-bold tracking-widest text-[#006838]">
                          first tee
                        </span>
                        <span className="text-[9px] font-mono text-[#7D756C]">west michigan</span>
                      </div>

                      <div className="rounded-xl overflow-hidden aspect-[4/3] bg-zinc-100 relative">
                        <img
                          src={emailProject.image}
                          alt="Meet & The Mentor"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="text-left space-y-1">
                        <span className="text-[10px] font-mono text-[#7A141D] uppercase font-semibold">
                          Mentor Spotlight
                        </span>
                        <h5 className="font-serif font-bold text-xs text-[#1F1D1A]">
                          Meet Tyler Series
                        </h5>
                        <p className="text-[10px] text-[#5C554D] leading-tight font-sans">
                          Western Michigan Junior Coach inspiring junior golfers to build core values through mentorship.
                        </p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button className="w-full py-2 rounded-full bg-[#006838] text-white text-[10px] font-mono uppercase font-bold tracking-wider text-center shadow-sm">
                        Give Today!
                      </button>
                    </div>
                  </div>
                </div>

                {/* Objective */}
                <div className="space-y-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#7D756C] font-semibold">
                    Objective
                  </h4>
                  <p className="text-sm font-sans text-[#3A352F] leading-relaxed">
                    {emailProject.objectiveOrDescription}
                  </p>
                </div>
              </div>

              {/* Results Badges */}
              <div className="mt-8 pt-6 border-t border-[#F0EAE1]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#7A141D] font-semibold mb-3">
                  Results
                </h4>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] text-center">
                    <span className="block font-serif font-bold text-lg text-[#7A141D]">40%</span>
                    <span className="text-[10px] text-[#6B635A] font-mono">Open Rate</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] text-center">
                    <span className="block font-serif font-bold text-lg text-[#7A141D]">3</span>
                    <span className="text-[10px] text-[#6B635A] font-mono">Mentor Signups</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD5] text-center">
                    <span className="block font-serif font-bold text-lg text-[#7A141D]">2</span>
                    <span className="text-[10px] text-[#6B635A] font-mono">Donations</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Right Column: Website Development */}
          {webProject && (
            <div className="lg:col-span-7 rounded-[2.8rem] bg-white border border-[#E0D5C7] p-8 sm:p-10 shadow-sm flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#7A141D] font-semibold">
                    First Tee West Michigan
                  </span>
                  <h3 className="text-3xl font-serif text-[#1F1D1A] font-medium mt-1">
                    {webProject.title}
                  </h3>
                </div>

                {/* Desktop Browser Window Mockup */}
                <div className="rounded-2xl border border-[#E0D5C7] bg-[#FAF7F2] overflow-hidden shadow-xl">
                  {/* Browser Bar */}
                  <div className="px-4 py-2.5 bg-[#F0EAE1] border-b border-[#E0D5C7] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[11px] font-mono text-[#7D756C] px-3 py-0.5 rounded-md bg-white/70 border border-[#DDD1C3]">
                      firstteewestmichigan.org/get-involved
                    </span>
                    <div className="w-8" />
                  </div>

                  {/* Browser Screen Content */}
                  <div className="p-5 space-y-4">
                    {/* Simulated Banner */}
                    <div className="rounded-xl overflow-hidden aspect-[16/9] relative bg-zinc-900">
                      <img
                        src={webProject.image}
                        alt="First Tee Get Involved Webpage"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                        <span className="text-[10px] font-mono uppercase text-emerald-300">
                          Community Support Hub
                        </span>
                        <h4 className="font-serif font-bold text-base sm:text-lg">
                          How is monetary donation used?
                        </h4>
                      </div>
                    </div>

                    {/* Feature Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-white border border-[#E8DFD5]">
                        <DollarSign className="w-4 h-4 text-[#006838] mb-1" />
                        <h6 className="font-serif font-bold text-xs text-[#1F1D1A]">Program Needs</h6>
                        <p className="text-[11px] text-[#6B635A] font-sans mt-0.5">
                          Equipment & facility expansion.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-[#E8DFD5]">
                        <Heart className="w-4 h-4 text-[#7A141D] mb-1" />
                        <h6 className="font-serif font-bold text-xs text-[#1F1D1A]">Physical Giving</h6>
                        <p className="text-[11px] text-[#6B635A] font-sans mt-0.5">
                          Clubs, golf bags & attire drop-off.
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-[#E8DFD5]">
                        <Users className="w-4 h-4 text-sky-700 mb-1" />
                        <h6 className="font-serif font-bold text-xs text-[#1F1D1A]">Summer Events</h6>
                        <p className="text-[11px] text-[#6B635A] font-sans mt-0.5">
                          Tournaments & volunteer days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#7D756C] font-semibold">
                    Description & Scope
                  </h4>
                  <p className="text-sm font-sans text-[#3A352F] leading-relaxed">
                    {webProject.objectiveOrDescription}
                  </p>
                </div>
              </div>

              {/* Takeaway Key Deliverables */}
              <div className="mt-8 pt-6 border-t border-[#F0EAE1]">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#7A141D] font-semibold mb-2">
                  Key Outcomes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {webProject.results.map((res, rIdx) => (
                    <span
                      key={rIdx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF7F2] border border-[#E8DFD5] text-xs font-sans text-[#2B2723]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#7A141D]" />
                      <span>{res}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
