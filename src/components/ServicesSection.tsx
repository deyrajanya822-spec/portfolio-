import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES_LIST } from '../data/portfolioData';
import { Service } from '../types';
import { ChevronDown, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [expandedId, setExpandedId] = useState<string | null>('srv-1');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#08080a]">
      {/* Light Rounded Container matching Screenshot 6 & 7 */}
      <div className="max-w-7xl mx-auto rounded-3xl sm:rounded-[2.5rem] bg-[#f4f4f7] text-[#111115] p-6 sm:p-12 lg:p-16 shadow-2xl overflow-hidden border border-white/60">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id="services-main-title"
            className="font-syne font-black text-5xl sm:text-7xl md:text-8xl text-black uppercase tracking-tight drop-shadow-sm"
          >
            SERVICES
          </motion.h2>
          <p className="mt-3 text-sm sm:text-base font-outfit text-zinc-600 max-w-xl mx-auto">
            Comprehensive strategic consulting, consumer research, brand architecture, and narrative prototyping for ambitious brands.
          </p>
        </div>

        {/* Numbered Services List matching Screenshot 6 & 7 */}
        <div className="divide-y divide-zinc-200/80">
          {SERVICES_LIST.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                id={`service-item-${service.number}`}
                className="py-6 sm:py-8 transition-colors duration-200"
              >
                <div
                  onClick={() => toggleExpand(service.id)}
                  className="cursor-pointer group flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-8"
                >
                  {/* Left Number & Title Block */}
                  <div className="flex items-start gap-4 sm:gap-8 flex-1">
                    {/* Big stylized black bold number (Screenshot 6 & 7) */}
                    <span className="font-syne font-black text-4xl sm:text-6xl md:text-7xl text-black tracking-tighter shrink-0 select-none group-hover:text-purple-600 transition-colors">
                      {service.number}
                    </span>

                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-syne font-black text-xl sm:text-2xl md:text-3xl text-black uppercase tracking-tight group-hover:text-purple-700 transition-colors">
                          {service.title}
                        </h3>
                        {service.featuredRate && (
                          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-mono font-bold">
                            {service.featuredRate}
                          </span>
                        )}
                      </div>

                      {/* Service description */}
                      <p className="font-outfit text-sm sm:text-base text-zinc-700 leading-relaxed max-w-3xl">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Right Action Button & Chevron */}
                  <div className="flex items-center gap-3 self-end md:self-start pt-2 md:pt-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectService(service);
                      }}
                      className="px-4 py-2 rounded-full bg-black text-white text-xs font-bold tracking-wider uppercase hover:bg-purple-600 transition-colors flex items-center gap-1.5 shadow-md"
                    >
                      <span>BOOK SERVICE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      className={`p-2 rounded-full border border-zinc-300 text-zinc-700 hover:bg-zinc-200 transition-transform duration-300 ${
                        isExpanded ? 'rotate-180 bg-zinc-200' : ''
                      }`}
                      aria-label="Expand service details"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Expandable Deep Dive Drawer */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-zinc-200 grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/70 rounded-2xl p-6 border border-zinc-200/60 shadow-inner">
                        {/* Column 1: Scope & Pipeline */}
                        <div className="space-y-2">
                          <h4 className="font-syne font-bold text-xs uppercase tracking-wider text-purple-700 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>PRODUCTION SCOPE</span>
                          </h4>
                          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-outfit">
                            {service.fullDesc}
                          </p>
                        </div>

                        {/* Column 2: Deliverables */}
                        <div className="space-y-2">
                          <h4 className="font-syne font-bold text-xs uppercase tracking-wider text-zinc-900">
                            KEY DELIVERABLES
                          </h4>
                          <ul className="space-y-1.5 text-xs text-zinc-700 font-outfit">
                            {service.deliverables.map((item, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Column 3: Tech Stack & Speed */}
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-syne font-bold text-xs uppercase tracking-wider text-zinc-900 mb-1.5">
                              SOFTWARE STACK
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              {service.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="px-2.5 py-1 rounded-md bg-zinc-100 border border-zinc-300 text-[11px] font-mono text-zinc-800 font-medium"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="text-xs font-mono text-zinc-500 pt-2 border-t border-zinc-100 flex items-center justify-between">
                            <span>TYPICAL TIMELINE:</span>
                            <span className="font-bold text-zinc-900">{service.timeline}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>



      </div>
    </section>
  );
};
