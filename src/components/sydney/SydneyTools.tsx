import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TOOL_BADGES } from '../../data/sydneyData';
import { 
  CheckCircle2, TrendingUp, Layers, Users, Code, 
  BarChart3, Sparkles, Brain, Award
} from 'lucide-react';

export const SydneyTools: React.FC = () => {
  const [activeProjectFilter, setActiveProjectFilter] = useState<string>('all');

  const filteredTools = activeProjectFilter === 'all'
    ? TOOL_BADGES
    : TOOL_BADGES.filter(tool => tool.projectId === activeProjectFilter);

  const getToolIcon = (name: string) => {
    switch (name) {
      // Storyboats Immediate Internship
      case 'FMCG Whitespace & Category Auditing':
        return <Layers className="w-5 h-5 text-[#7A141D]" />;
      case 'Generative AI Commercial Storyboarding':
        return <Sparkles className="w-5 h-5 text-rose-600" />;
      case 'Mascot Universe & Consumer Psychology':
        return <Brain className="w-5 h-5 text-amber-600" />;
      case 'Multi-Tier Creator Funnel (Macro & Micro)':
        return <TrendingUp className="w-5 h-5 text-[#7A141D]" />;
      case '9-City Field Consumer Research & POS':
        return <Users className="w-5 h-5 text-red-700" />;

      // IMS Learning Resources
      case 'Competitive Institute Benchmarking':
        return <Layers className="w-5 h-5 text-amber-700" />;
      case 'Conversion Funnel Optimization':
        return <TrendingUp className="w-5 h-5 text-emerald-700" />;
      case 'Qualitative Student Cohort Interviews':
        return <Users className="w-5 h-5 text-blue-700" />;

      // McKinsey Forward
      case 'Hypothesis-Driven Problem Solving':
        return <Brain className="w-5 h-5 text-emerald-800" />;
      case 'Digital Agility & Data Synthesis':
        return <Sparkles className="w-5 h-5 text-teal-700" />;
      case 'Cross-Functional Team Alignment':
        return <Users className="w-5 h-5 text-emerald-700" />;

      // GLIM Research
      case 'IBM SPSS Statistics 29':
        return <BarChart3 className="w-5 h-5 text-rose-700" />;
      case 'Moderated Regression Modeling':
        return <TrendingUp className="w-5 h-5 text-[#7A141D]" />;
      case 'Grounded Theory Methodology':
        return <Users className="w-5 h-5 text-stone-700" />;

      // Foundations
      case 'Python for Business & Analytics':
        return <Code className="w-5 h-5 text-indigo-600" />;

      default:
        return <CheckCircle2 className="w-5 h-5 text-[#7A141D]" />;
    }
  };

  const getProjectBadgeColor = (projectId?: string) => {
    switch (projectId) {
      case 'storyboats':
        return 'text-[#7A141D] bg-[#7A141D]/10 border-[#7A141D]/20';
      case 'ims':
        return 'text-amber-800 bg-amber-500/10 border-amber-500/20';
      case 'mckinsey':
        return 'text-emerald-800 bg-emerald-500/10 border-emerald-500/20';
      case 'glim':
        return 'text-rose-800 bg-rose-500/10 border-rose-500/20';
      default:
        return 'text-blue-800 bg-blue-500/10 border-blue-500/20';
    }
  };

  return (
    <section className="py-16 bg-[#FAF7F2] border-b border-[#E8DFD5]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7A141D] bg-[#7A141D]/10 px-3.5 py-1.5 rounded-full">
            Methodologies &amp; Strategic Toolset
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#1F1D1A] font-medium mt-3">
            Core Toolkit <span className="italic text-[#7A141D]">Across Experiences</span>
          </h3>
          <p className="text-xs sm:text-sm text-[#635B52] font-sans mt-2 max-w-xl mx-auto">
            Tools, analytical frameworks, and methodologies deployed across my immediate internship at Storyboats, IMS marketing, McKinsey Forward, and GLIM research.
          </p>
        </div>

        {/* Project Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-4xl mx-auto mb-8">
          {[
            { id: 'all', label: 'All Methodologies' },
            { id: 'storyboats', label: 'Storyboats Deliverables' },
            { id: 'ims', label: 'IMS Market Research' },
            { id: 'mckinsey', label: 'McKinsey Forward' },
            { id: 'glim', label: 'GLIM Econometrics' },
            { id: 'foundations', label: 'Certifications' }
          ].map(tab => {
            const isSelected = activeProjectFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveProjectFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#1F1D1A] text-white border-[#1F1D1A] shadow-xs'
                    : 'bg-white text-[#635B52] border-[#E0D5C7] hover:border-[#7A141D]/50 hover:bg-[#FDFBF7]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Responsive Grid of Tool Chips */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {filteredTools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: idx * 0.03 }}
              className="group flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#E0D5C7] shadow-xs hover:shadow-md hover:border-[#7A141D]/40 transition-all duration-200"
            >
              <div className="p-2.5 rounded-xl bg-[#FAF7F2] group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                {getToolIcon(tool.name)}
              </div>
              <div className="text-left flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <h4 className="font-serif font-bold text-xs sm:text-sm text-[#1F1D1A] truncate">
                    {tool.name}
                  </h4>
                  {tool.projectLabel && (
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded-md border shrink-0 ${getProjectBadgeColor(tool.projectId)}`}>
                      {tool.projectLabel}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-[#7D756C] font-mono line-clamp-1">
                  {tool.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Python for Non-Programmers Certificate Highlight Card */}
        <div className="mt-8 max-w-xl mx-auto p-4 rounded-2xl bg-[#F0EAE1]/80 border border-[#DDD1C3] flex items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
            in
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase text-[#0A66C2] font-semibold">
                LinkedIn Learning
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#0A66C2]/10 text-[#0A66C2] font-medium">
                Certified
              </span>
            </div>
            <h5 className="font-serif font-semibold text-sm text-[#1F1D1A] mt-0.5">
              Python for Non-Programmers
            </h5>
            <p className="text-xs text-[#6B635A]">
              Issued May 2024 • Foundations of data scripting, automation &amp; programmatic logic.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

