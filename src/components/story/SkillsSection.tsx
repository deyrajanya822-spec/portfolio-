import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, BarChart3, Compass, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  // Allow all to be open or toggle individual
  const [openDomains, setOpenDomains] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: false,
    3: false
  });

  const toggleDomain = (index: number) => {
    setOpenDomains((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const domains = [
    {
      title: 'Research & Analysis',
      category: 'METHODOLOGY',
      subtitle: 'Primary & Secondary Rigor',
      tag: '6 Validated Competencies',
      icon: <Search size={22} />,
      skills: [
        {
          name: 'Competitive Benchmarking',
          context: '25+ FMCG & automotive category matrices'
        },
        {
          name: 'Consumer Surveys',
          context: '30+ structured in-depth interviews & questionnaires'
        },
        {
          name: 'Qualitative Field Research',
          context: 'Pan-India field investigation across 9 cities'
        },
        {
          name: 'SPSS Regression Modeling',
          context: 'Quantitative consumer behavior statistical modeling'
        },
        {
          name: 'Secondary Data Analysis',
          context: 'Industry reports, macroeconomic whitespace analysis'
        },
        {
          name: 'Data-Driven Scorecards',
          context: 'Weighted multi-factor brand health indexes'
        }
      ]
    },
    {
      title: 'Digital & Analytics Tools',
      category: 'TOOLING',
      subtitle: 'Telemetry & Systems Setup',
      tag: '7 Validated Competencies',
      icon: <BarChart3 size={22} />,
      skills: [
        {
          name: 'Google Analytics 4 (GA4)',
          context: 'Custom event triggers, conversion funnels & segments'
        },
        {
          name: 'Google Tag Manager (GTM)',
          context: 'Tag deployment, container triggers & data layers'
        },
        {
          name: 'Google Search Console',
          context: 'Indexing health, query tracking & organic CTR analysis'
        },
        {
          name: 'SEO Auditing',
          context: 'Core Web Vitals, metadata hygiene & 100/100 score'
        },
        {
          name: 'KPI Dashboard Design',
          context: '5 SBUs × 7 channels multi-tier decision systems'
        },
        {
          name: 'Advanced Excel',
          context: 'Financial modeling, pivot architecture & VLOOKUP/XLOOKUP'
        },
        {
          name: 'Python Basic',
          context: 'Data transformation, Pandas scripts & exploratory analysis'
        }
      ]
    },
    {
      title: 'Strategy & Frameworks',
      category: 'STRUCTURED THINKING',
      subtitle: 'Structured Problem Solving',
      tag: '6 Validated Competencies',
      icon: <Compass size={22} />,
      skills: [
        {
          name: 'McKinsey MECE Framework',
          context: 'Mutually exclusive, collectively exhaustive scoping'
        },
        {
          name: 'Hypothesis-Driven Problem Solving',
          context: 'Issue tree formulation & deductive testing'
        },
        {
          name: 'Go-to-Market (GTM) Design',
          context: '₹7.8M multi-tier automotive creator campaign architecture'
        },
        {
          name: 'Brand Architecture',
          context: 'Countline whitespace, identity archetypes & positioning'
        },
        {
          name: 'Issue Tree Decomposition',
          context: 'Root-cause diagnostic trees for business friction'
        },
        {
          name: 'Category Whitespace Analysis',
          context: '10-brand competitive quadrant mapping'
        }
      ]
    },
    {
      title: 'Communication & Client Work',
      category: 'EXECUTIVE PRESENCE',
      subtitle: 'Executive Persuasion & Governance',
      tag: '6 Validated Competencies',
      icon: <MessageSquare size={22} />,
      skills: [
        {
          name: 'Client Presentations',
          context: 'Executive delivery for corporate clients & faculty panels'
        },
        {
          name: 'Strategy Decks',
          context: 'Structured narrative consulting decks, 10-slide standard'
        },
        {
          name: 'Stakeholder Management',
          context: 'Multi-SBU alignment, faculty reviews & client syncs'
        },
        {
          name: 'Cross-Functional Collaboration',
          context: 'Bridging creative directors, field researchers & analysts'
        },
        {
          name: 'Pitch Books',
          context: 'Commercial pitch architecture with tiered unit economics'
        },
        {
          name: 'Event Coordination',
          context: 'Curating C-suite alumni judges for Crest 2025 festival'
        }
      ]
    }
  ];

  return (
    <section id="skills" className="section-spacing bg-primary">
      <div className="story-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <span className="chapter-label">CHAPTER 05</span>
          <h2 style={{ fontSize: 'var(--text-chapter-title)', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
            What I Bring to the Table
          </h2>
          <p style={{ fontSize: '1.12rem', color: 'var(--text-secondary)' }}>
            25 validated competencies across 4 domains. Every skill tied to real work.
          </p>
        </motion.div>

        {/* 4 Interactive Domain Cards */}
        <div className="skills-grid">
          {domains.map((domain, index) => {
            const isOpen = !!openDomains[index];
            return (
              <motion.div
                key={domain.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="skill-domain-card"
              >
                <div
                  className="skill-domain-header"
                  onClick={() => toggleDomain(index)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleDomain(index);
                    }
                  }}
                >
                  <div className="skill-domain-top">
                    <div className="skill-domain-icon-wrap">{domain.icon}</div>
                    <span className="skill-domain-count">{domain.tag}</span>
                  </div>

                  <h3 className="skill-domain-title">{domain.title}</h3>
                  <p className="skill-domain-subtitle">{domain.subtitle}</p>

                  <div className="skill-domain-toggle-icon">
                    <span>{isOpen ? 'Collapse details' : 'Explore skills'}</span>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="skill-list-expanded"
                    >
                      {domain.skills.map((skill) => (
                        <div key={skill.name} className="skill-item">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-context">{skill.context}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
