import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Users, Mic, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { ACHIEVEMENTS } from '../../data/sydneyData';

export const SydneyAchievements: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-amber-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#7A141D]" />;
      case 'Mic':
        return <Mic className="w-6 h-6 text-rose-600" />;
      default:
        return <Award className="w-6 h-6 text-[#7A141D]" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-[#FAF7F2] border-t border-[#E8DFD5]/80 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A141D]/10 text-[#7A141D] text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honors &amp; Campus Leadership</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-serif text-[#1F1D1A] font-normal tracking-tight"
          >
            Recognition &amp; <span className="italic text-[#7A141D]">Achievements</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-xs sm:text-sm text-[#635B52] font-sans mt-3"
          >
            Competitive national accolades, institutional responsibilities, and corporate conclave coordination.
          </motion.p>
        </div>

        {/* 3 Recognition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="p-6 sm:p-7 rounded-[2.2rem] bg-white border border-[#E0D5C7] shadow-sm hover:shadow-md hover:border-[#7A141D]/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Year */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD5] flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#7A141D]/10 text-[#7A141D] text-xs font-mono font-medium">
                    {item.year}
                  </span>
                </div>

                <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A8075] block mb-1">
                  {item.organization}
                </span>

                <h3 className="font-serif font-bold text-lg sm:text-xl text-[#1F1D1A] mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-[#554D45] leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#F0EAE1] flex items-center justify-between text-[11px] font-mono text-[#7A141D]">
                <span className="font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {item.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
