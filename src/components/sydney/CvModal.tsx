import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, ExternalLink, Briefcase, GraduationCap, Award, Globe, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { SYDNEY_PROFILE } from '../../data/sydneyData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md print:hidden"
        />

        {/* Modal / Resume Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-white text-[#1F1D1A] rounded-[2rem] shadow-2xl border border-[#E8DFD5] overflow-hidden z-10 my-auto max-h-[94vh] flex flex-col print:max-h-none print:shadow-none print:border-none print:rounded-none"
        >
          {/* Action Toolbar */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-4 bg-[#FAF7F2] border-b border-[#E8DFD5] print:hidden shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7A141D]" />
              <span className="text-xs font-mono font-bold text-[#7A141D] uppercase tracking-wider">
                Official Placement Curriculum Vitae
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#7A141D] hover:bg-[#5C0F16] text-white text-xs font-mono font-medium transition-colors shadow-sm cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-stone-200/80 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close CV modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div className="p-8 sm:p-12 overflow-y-auto print:overflow-visible print:p-8 space-y-8 font-sans text-xs sm:text-sm">
            {/* CV Header */}
            <div className="border-b-2 border-[#7A141D] pb-6">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F1D1A] tracking-tight">
                    RAJANYA DEY
                  </h1>
                  <p className="text-sm sm:text-base font-serif italic text-[#7A141D] mt-1 font-medium">
                    PGDM '27 Candidate • Great Lakes Institute of Management, Gurgaon
                  </p>
                </div>
                <div className="text-right sm:text-right text-xs font-mono text-[#5C554D] space-y-1">
                  <div>Gurgaon / Vadodara, India</div>
                  <div className="font-bold text-[#7A141D]">Open to full-time opportunities (2027)</div>
                </div>
              </div>

              {/* Contact strip */}
              <div className="mt-4 pt-3 border-t border-[#F0EAE1] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#5C554D] font-mono">
                <a href={`mailto:${SYDNEY_PROFILE.email}`} className="hover:text-[#7A141D] flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#7A141D]" />
                  <span>{SYDNEY_PROFILE.email}</span>
                </a>
                <a href={`tel:${SYDNEY_PROFILE.phone.replace(/[^0-9]/g, '')}`} className="hover:text-[#7A141D] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#7A141D]" />
                  <span>{SYDNEY_PROFILE.phone}</span>
                </a>
                <a href={SYDNEY_PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#7A141D] flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-[#7A141D]" />
                  <span>linkedin.com/in/rajanya-dey</span>
                </a>
                <div className="flex items-center gap-1.5 font-bold text-[#1F1D1A]">
                  <Globe className="w-3.5 h-3.5 text-[#7A141D]" />
                  <span>Languages: English • Hindi • Gujarati • Bengali</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#7A141D] font-bold border-b border-[#E8DFD5] pb-1 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </h2>
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="font-serif font-bold text-sm text-[#1F1D1A]">
                      Great Lakes Institute of Management, Gurgaon
                    </h3>
                    <p className="text-xs text-[#5C554D]">Post Graduate Diploma in Management (PGDM) — Strategy &amp; Marketing</p>
                  </div>
                  <span className="text-xs font-mono text-[#7D756C] sm:text-right">2025 – 2027</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="font-serif font-bold text-sm text-[#1F1D1A]">
                      The Maharaja Sayajirao University of Baroda (MSU Baroda)
                    </h3>
                    <p className="text-xs text-[#5C554D]">Bachelor of Business Administration (BBA) — Marketing &amp; Business Management</p>
                  </div>
                  <span className="text-xs font-mono text-[#7D756C] sm:text-right">2021 – 2024</span>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#7A141D] font-bold border-b border-[#E8DFD5] pb-1 flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                <span>Work Experience &amp; Internships</span>
              </h2>

              {/* Storyboats */}
              <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="font-serif font-bold text-sm text-[#1F1D1A]">
                      Marketing Intern — Storyboats
                    </h3>
                    <p className="text-xs font-mono text-[#7A141D]">Client Accounts: Lotus Chocolate, Rockwell, Campa CSD, Toffeeman</p>
                  </div>
                  <span className="text-xs font-mono text-[#7D756C]">June 2025 – August 2025</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-[#443F38] leading-relaxed">
                  <li><strong>Rockwell Car Coolers:</strong> Built 7-creator multi-tier influencer marketing pitch (Macro 100K+ &amp; Niche/Micro) achieving 14.2M+ reach model with ₹7.8M spend allocation.</li>
                  <li><strong>Campa CSD:</strong> Conducted qualitative research across 9 Indian cities, uncovering the "Passenger to Driver" consumer insight and designing 4 retail POS displays.</li>
                  <li><strong>Lotus Chocolate:</strong> Formulated category whitespace audit across 10 FMCG countline brands and directed 38s AI commercial campaign "Some Fights End Better".</li>
                  <li><strong>Toffeeman:</strong> Engineered brand mascot universe, 9-pose emotional action sheet, and consumer psychology narrative on impulse purchase triggers.</li>
                </ul>
              </div>

              {/* IMS Coaching Institute */}
              <div className="space-y-1.5 pt-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="font-serif font-bold text-sm text-[#1F1D1A]">
                      Marketing Intern — IMS Coaching Institute
                    </h3>
                    <p className="text-xs font-mono text-[#7A141D]">Vadodara Center</p>
                  </div>
                  <span className="text-xs font-mono text-[#7D756C]">February 2024 – June 2024</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-[#443F38] leading-relaxed">
                  <li>Benchmarked 30+ coaching institutes across program portfolios, fee structures, and promotional strategies to uncover local market opportunities.</li>
                  <li>Conducted qualitative research via interviews with students and parents to map key decision drivers in test-prep enrollment.</li>
                  <li>Executed structured outbound outreach and consultation, achieving a ~70% lead-to-counseling session conversion rate.</li>
                </ul>
              </div>

              {/* McKinsey Forward */}
              <div className="space-y-1.5 pt-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <div>
                    <h3 className="font-serif font-bold text-sm text-[#1F1D1A]">
                      McKinsey Forward Program Participant — McKinsey &amp; Company
                    </h3>
                    <p className="text-xs font-mono text-[#7A141D]">10-Week Problem-Solving Accelerator</p>
                  </div>
                  <span className="text-xs font-mono text-[#7D756C]">2025</span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-[#443F38] leading-relaxed">
                  <li>Completed intensive training in structured problem-solving (MECE frameworks, issue trees, hypothesis-driven inquiry) and digital collaboration.</li>
                </ul>
              </div>
            </div>

            {/* Academic Decision-Support Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#7A141D] font-bold border-b border-[#E8DFD5] pb-1 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Selected Academic &amp; Strategic Projects</span>
              </h2>

              <div className="space-y-2">
                <div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-serif font-bold text-sm text-[#1F1D1A]">
                      Myntra — Marketing Decision-Support System
                    </span>
                    <span className="text-xs font-mono text-[#7D756C]">GLIM Gurgaon</span>
                  </div>
                  <p className="text-xs text-[#443F38] leading-relaxed">
                    Designed KPI decision-support architecture across 5 Strategic Business Units and 7 channels (35 performance cells), modeling simultaneous ROAS and CPA metrics for executive budget reallocation.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-serif font-bold text-sm text-[#1F1D1A]">
                      Brewtopia — Digital Transformation &amp; Analytics
                    </span>
                    <span className="text-xs font-mono text-[#7D756C]">GLIM Gurgaon</span>
                  </div>
                  <p className="text-xs text-[#443F38] leading-relaxed">
                    Built consumer-facing interactive platform ("Living Cup Builder"), configured complete GA4 + GTM + Google Search Console analytics stack from scratch, and achieved 100/100 SEO audit score.
                  </p>
                </div>
              </div>
            </div>

            {/* Recognition & Achievements */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#7A141D] font-bold border-b border-[#E8DFD5] pb-1 flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Recognition &amp; Achievements</span>
              </h2>
              <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-[#443F38]">
                <li><strong>All-India Rank 2</strong> — "Minutes Marvels" Micro-Writing Competition, IIM Calcutta (2025). Under 300 words. Competed against participants from top B-schools across India.</li>
                <li><strong>Member, Alumni Committee</strong> — Great Lakes Institute of Management, Gurgaon (2026).</li>
                <li><strong>Event Coordinator</strong> — Sourced and invited alumni judges for "Crest", GLIM's flagship annual management conclave (2025).</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
