import React from 'react';
import { CLIENT_LOGOS } from '../data/portfolioData';
import { Layers, Sparkles, Box, Shield, Hexagon, Terminal, Flame, Disc, Award, GraduationCap, Building2, Rocket, Wind } from 'lucide-react';

export const ClientMarquee: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'campa':
        return <Layers className="w-5 h-5 text-red-500 stroke-[2.5]" />;
      case 'rockwell':
        return <Wind className="w-5 h-5 text-teal-400 stroke-[2.5]" />;
      case 'storyboats':
        return <Rocket className="w-5 h-5 text-pink-400 stroke-[2.5]" />;
      case 'greatlakes':
        return <GraduationCap className="w-5 h-5 text-purple-400 stroke-[2]" />;
      case 'mckinsey':
        return <Award className="w-5 h-5 text-cyan-400 stroke-[2.5]" />;
      case 'ims':
        return <Building2 className="w-5 h-5 text-emerald-400 stroke-[2]" />;
      case 'tbo':
        return <Layers className="w-5 h-5 text-orange-400 stroke-[2.5]" />;
      case 'iim':
        return <Award className="w-5 h-5 text-yellow-400 stroke-[2]" />;
      case 'msu':
        return <GraduationCap className="w-5 h-5 text-blue-400 stroke-[2]" />;
      case 'crest':
        return <Sparkles className="w-5 h-5 text-pink-400 stroke-[2]" />;
      default:
        return <Shield className="w-5 h-5 text-white stroke-[2]" />;
    }
  };

  return (
    <section id="customers" className="relative py-12 bg-[#08080a] border-y border-white/5 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6 text-center">
        <p className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
          ORGANIZATIONAL EXPERIENCE & STRATEGIC ENGAGEMENTS
        </p>
      </div>

      {/* Infinite marquee continuous loop */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#08080a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#08080a] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee-left flex items-center gap-12 sm:gap-16 lg:gap-20 py-2">
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
            <div
              key={`${client.id}-${idx}`}
              className="flex items-center gap-3.5 group cursor-pointer opacity-75 hover:opacity-100 transition-opacity whitespace-nowrap"
            >
              <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-600 transition-colors group-hover:scale-110 duration-200">
                {getIcon(client.svgIcon)}
              </div>
              <div className="flex flex-col">
                <span className="font-syne font-black text-sm tracking-wider uppercase text-white group-hover:text-pink-400 transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] text-zinc-400 font-mono">
                  {client.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

