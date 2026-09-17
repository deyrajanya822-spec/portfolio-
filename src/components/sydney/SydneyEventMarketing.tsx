import React from 'react';
import { motion } from 'motion/react';
import { EVENT_MARKETING_CASE } from '../../data/sydneyData';
import { Calendar, CheckCircle2, Heart, Mail, Share2, Sparkles, Users } from 'lucide-react';

export const SydneyEventMarketing: React.FC = () => {
  const ev = EVENT_MARKETING_CASE;

  return (
    <section id="event-marketing" className="py-24 bg-[#FAF7F2] border-b border-[#E8DFD5]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Curved Header Arch */}
        <div className="rounded-[3rem] bg-[#7A141D] text-white p-8 sm:p-14 lg:p-16 overflow-hidden shadow-xl mb-12 relative">
          {/* Subtle curved background lines */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-rose-200 text-xs font-mono uppercase tracking-wider mb-4">
                <Calendar className="w-3.5 h-3.5" />
                <span>Experiential & Virtual Activations</span>
              </span>
              <h2 className="text-4xl sm:text-6xl font-serif font-normal text-white tracking-tight">
                Event Marketing
              </h2>
              <p className="text-rose-100/90 text-sm sm:text-base font-sans mt-2 max-w-xl font-light">
                {ev.organization} • {ev.tagline}
              </p>
            </div>

            <div className="px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 self-start md:self-auto">
              <span className="text-xs font-mono uppercase tracking-widest text-rose-200 block">
                Participation
              </span>
              <span className="text-xl sm:text-2xl font-serif font-bold text-white">
                {ev.metricBadge}
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Showcase */}
        <div className="rounded-[2.8rem] bg-white border border-[#E0D5C7] p-8 sm:p-12 lg:p-14 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Event Concept & Learning Moments */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#7A141D] font-semibold">
                  Event Blueprint
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1F1D1A] font-medium mt-1">
                  {ev.title}
                </h3>
                <p className="text-sm font-sans text-[#5C554D] mt-3 leading-relaxed">
                  {ev.description}
                </p>
              </div>

              {/* Learning Moments Checklist */}
              <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD5] space-y-4">
                <h4 className="font-serif font-bold text-base text-[#1F1D1A] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#7A141D]" />
                  <span>Learning Moments:</span>
                </h4>
                <ul className="space-y-3">
                  {ev.learnings.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#7A141D]/10 text-[#7A141D] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm font-sans text-[#332F2B] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Team Collaboration Pill */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#F0EAE1]/70 border border-[#DDD1C3]">
                <div className="w-10 h-10 rounded-full bg-[#7A141D] text-white flex items-center justify-center font-bold text-sm">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-serif font-bold text-xs text-[#1F1D1A]">Cross-functional Team of 5</h5>
                  <p className="text-[11px] text-[#7D756C] font-mono">Design • Copywriting • Email Ops • Social</p>
                </div>
              </div>
            </div>

            {/* Right: Dual Deliverables Showcase (Social Media & Email Blast) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Social Media Marketing Showcase */}
              <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD5] flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#7A141D]">
                    <Share2 className="w-4 h-4" />
                    <h5 className="font-serif font-bold text-sm">Social Media Marketing</h5>
                  </div>
                  <p className="text-xs text-[#6B635A] font-sans">
                    {ev.socialMediaText}
                  </p>
                </div>

                {/* Simulated Galentine Card Phone */}
                <div className="rounded-[2rem] border-4 border-[#FAD2E1] bg-white p-3 shadow-md aspect-[9/14] overflow-hidden flex flex-col justify-between">
                  <div className="rounded-xl overflow-hidden aspect-square bg-rose-50 relative">
                    <img
                      src={ev.socialMediaImage}
                      alt="Galentine's Day Virtual Card Preview"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-rose-500 text-white text-[9px] font-mono flex items-center gap-1">
                      <Heart className="w-2.5 h-2.5 fill-current" />
                      <span>SGBS</span>
                    </div>
                  </div>

                  <div className="text-center space-y-1 pt-2">
                    <span className="text-[10px] font-mono text-rose-600 font-bold uppercase">
                      Virtual Card Exchange
                    </span>
                    <p className="text-[11px] text-[#332F2B] font-serif font-medium">
                      Celebrate friendship with custom digital love notes 💕
                    </p>
                  </div>

                  <button className="w-full py-1.5 rounded-full bg-[#7A141D] text-white text-[10px] font-mono uppercase tracking-wider font-semibold">
                    Sign Up on Instagram
                  </button>
                </div>
              </div>

              {/* Email Marketing Showcase */}
              <div className="p-6 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD5] flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#7A141D]">
                    <Mail className="w-4 h-4" />
                    <h5 className="font-serif font-bold text-sm">Email Marketing</h5>
                  </div>
                  <p className="text-xs text-[#6B635A] font-sans">
                    {ev.emailMarketingText}
                  </p>
                </div>

                {/* Newsletter Desktop Preview */}
                <div className="rounded-[2rem] border border-[#DDD1C3] bg-white p-3 shadow-md aspect-[9/14] overflow-hidden flex flex-col justify-between">
                  <div className="rounded-xl overflow-hidden aspect-[4/3] bg-zinc-100 relative">
                    <img
                      src={ev.emailMarketingImage}
                      alt="Email blast participant community"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="space-y-2 pt-2 text-left">
                    <div className="inline-block px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[9px] font-mono font-bold">
                      DELIVERABILITY 99.4%
                    </div>
                    <h6 className="font-serif font-bold text-xs text-[#1F1D1A]">
                      Personalized Galentine Match Blasts
                    </h6>
                    <p className="text-[10px] text-[#6B635A] font-sans leading-tight">
                      Automated merge tags paired each member with secret Galentine pals across colleges.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#F0EAE1]">
                    <span className="text-[10px] font-mono font-bold text-[#7A141D] block text-center">
                      40+ Registered Participants
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
