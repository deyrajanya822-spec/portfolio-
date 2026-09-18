import React, { useState } from 'react';
import { motion } from 'motion/react';
import { EXPERIENCES } from '../../data/sydneyData';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { LotusTvcModal } from './LotusTvcModal';
import { ToffeemanModal } from './ToffeemanModal';
import { RockwellModal } from './RockwellModal';
import { CampaModal } from './CampaModal';

export const SydneyExperience: React.FC = () => {
  const [isLotusModalOpen, setIsLotusModalOpen] = useState(false);
  const [isToffeemanModalOpen, setIsToffeemanModalOpen] = useState(false);
  const [isRockwellModalOpen, setIsRockwellModalOpen] = useState(false);
  const [isCampaModalOpen, setIsCampaModalOpen] = useState(false);

  const handleCardClick = (id: string) => {
    if (id === 'exp-rockwell') {
      setIsRockwellModalOpen(true);
    } else if (id === 'exp-campa') {
      setIsCampaModalOpen(true);
    } else if (id === 'exp-lotus') {
      setIsLotusModalOpen(true);
    } else if (id === 'exp-toffeeman') {
      setIsToffeemanModalOpen(true);
    }
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 md:px-10 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto">
        {/* Main Crimson Strategic Projects Container */}
        <div className="relative rounded-[3rem] bg-[#7A141D] text-white p-8 sm:p-14 lg:p-18 overflow-hidden shadow-2xl">
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
              <span>Storyboat Internship Deliverables</span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-serif tracking-tight font-normal text-white"
            >
              Strategy, Brand &amp; GTM Deliverables
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-rose-200/90 text-sm sm:text-base font-sans mt-3 font-light"
            >
              Key client deliverables and strategic campaigns spearheaded during my internship at Storyboat, spanning automotive influencer GTM, pan-India field research, AI commercial direction, and brand psychology.
            </motion.p>
          </div>

          {/* 4 Internship Work Deliverables in a Balanced 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
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
                    <span className="absolute bottom-2.5 left-2.5 right-2.5 text-xs font-mono font-medium text-rose-200 truncate">
                      {exp.subtitle}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-rose-300 block mb-1">
                    {exp.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-white font-bold group-hover:text-rose-100 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-rose-100/80 font-sans leading-relaxed mt-2 line-clamp-3">
                    {exp.description}
                  </p>
                </div>

                {/* Card Footer Button */}
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-rose-200 group-hover:underline flex items-center gap-1">
                    <span>View Internship Work</span>
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
          <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center relative z-10">
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white">₹7.8M</div>
              <div className="text-xs font-mono text-rose-200 mt-1">Rockwell GTM Spend</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white">9 Cities</div>
              <div className="text-xs font-mono text-rose-200 mt-1">Campa Field Research</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white">38s TVC</div>
              <div className="text-xs font-mono text-rose-200 mt-1">Lotus Commercial</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-white">9 Poses</div>
              <div className="text-xs font-mono text-rose-200 mt-1">Toffeeman Lore</div>
            </div>
          </div>
        </div>
      </div>

      {/* Internship Work Modals */}
      <RockwellModal
        isOpen={isRockwellModalOpen}
        onClose={() => setIsRockwellModalOpen(false)}
      />
      <CampaModal
        isOpen={isCampaModalOpen}
        onClose={() => setIsCampaModalOpen(false)}
      />
      <LotusTvcModal
        isOpen={isLotusModalOpen}
        onClose={() => setIsLotusModalOpen(false)}
      />
      <ToffeemanModal
        isOpen={isToffeemanModalOpen}
        onClose={() => setIsToffeemanModalOpen(false)}
      />
    </section>
  );
};
