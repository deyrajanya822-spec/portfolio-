import React, { useState } from 'react';
import { motion } from 'motion/react';
import { WavyLines } from './WavyLines';
import { SYDNEY_PROFILE } from '../../data/sydneyData';
import {
  Phone,
  Mail,
  Linkedin,
  Copy,
  Check,
  Send,
  ArrowUpRight,
  Heart,
  Sparkles,
  Download,
  FileText,
  Languages
} from 'lucide-react';

export const SydneyContact: React.FC = () => {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Strategy & General Management Opportunities',
    message: ''
  });

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(SYDNEY_PROFILE.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SYDNEY_PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleDownloadCV = () => {
    const cvContent = `=====================================================
RAJANYA DEY — STRATEGY & BUSINESS PORTFOLIO
Management & Market Research Specialist
Open to strategic & management roles
Phone: ${SYDNEY_PROFILE.phone} | Email: ${SYDNEY_PROFILE.email}
LinkedIn: ${SYDNEY_PROFILE.linkedin}
=====================================================

EXECUTIVE SUMMARY
Business-oriented management professional with cross-functional expertise across
market research, business analytics, Go-To-Market (GTM) strategy, and digital
transformation. Proven track record executing 9-city pan-India field research,
configuring enterprise analytics (GA4/GTM/GSC) to achieve 100/100 SEO, and
architecting ₹7.8M creator marketing strategy.

RECOGNITION & HONORS
• All-India Rank 2 (AIR 2) — "Minutes Marvels" Micro-Writing Competition, IIM Calcutta (2025)
• Member, Alumni Committee (2026)
• Flagship Event Coordinator — Crest 2025
• McKinsey Forward Program Participant — McKinsey & Company (2025)

EXPERIENCE & PROJECTS
1. Rockwell — Influencer & GTM Strategy (₹7.8M Campaign)
2. Campa CSD — Brand Strategy, Research & Retail POS (Reliance Consumer Products)
3. Myntra — Marketing Decision-Support System (5 SBUs × 7 Channels)
4. Brewtopia — Digital Transformation & Analytics (100/100 SEO, GA4, GTM)
5. Lotus Chocolate — Brand Strategy & AI TVC (Storyboats)
6. Toffeeman — Mascot Design & Consumer Psychology
7. IMS Coaching Institute — Marketing Intern

LANGUAGES
English • Hindi • Gujarati • Bengali
`;

    const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Rajanya_Dey_Resume.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <footer id="contact" className="relative py-24 bg-[#FAF7F2] overflow-hidden">
      {/* Background Organic Red Ribbon Curves */}
      <WavyLines variant="footer" className="bottom-0 left-0 w-full h-full opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left: Headline, One-liner, Download CV & Contact Blocks */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#7A141D]/10 text-[#7A141D] text-xs font-mono uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get In Touch &amp; Recruitment</span>
              </span>

              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#1F1D1A] font-normal tracking-tight">
                Let's connect &amp; <br />
                <span className="italic text-[#7A141D]">collaborate</span>
              </h2>

              <p className="text-base sm:text-lg text-[#5C554D] font-sans mt-4 max-w-xl">
                Looking to discuss consulting, marketing leadership, analytics, or general management roles? Let’s schedule an introductory discussion.
              </p>

              {/* Prominent Download CV CTA (Change 9) */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleDownloadCV}
                  className="px-6 py-3 rounded-full bg-[#7A141D] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#5E0F16] transition-all shadow-md cursor-pointer flex items-center gap-2"
                >
                  {downloadSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>CV Downloaded Successfully!</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Download Official CV</span>
                    </>
                  )}
                </button>

                <span className="text-xs font-mono text-[#7D756C]">
                  Text &amp; Markdown structured for ATS &amp; verification
                </span>
              </div>
            </div>

            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
              {/* Phone Card */}
              <div className="p-5 rounded-2xl bg-white border border-[#E0D5C7] shadow-sm flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#7D756C] font-semibold">
                    PHONE
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#7A141D]/10 text-[#7A141D] flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                </div>

                <a
                  href={`tel:${SYDNEY_PROFILE.phone.replace(/[^0-9]/g, '')}`}
                  className="font-serif font-bold text-base sm:text-lg text-[#1F1D1A] hover:text-[#7A141D] transition-colors"
                >
                  {SYDNEY_PROFILE.phone}
                </a>

                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1.5 text-xs text-[#7A141D] hover:underline font-mono cursor-pointer"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>
              </div>

              {/* Email Card */}
              <div className="p-5 rounded-2xl bg-white border border-[#E0D5C7] shadow-sm flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#7D756C] font-semibold">
                    EMAIL
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#7A141D]/10 text-[#7A141D] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                </div>

                <a
                  href={`mailto:${SYDNEY_PROFILE.email}`}
                  className="font-serif font-bold text-base sm:text-lg text-[#1F1D1A] hover:text-[#7A141D] transition-colors truncate"
                  title={SYDNEY_PROFILE.email}
                >
                  {SYDNEY_PROFILE.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-xs text-[#7A141D] hover:underline font-mono cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              {/* Socials Card */}
              <div className="p-5 rounded-2xl bg-white border border-[#E0D5C7] shadow-sm flex flex-col justify-between space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#7D756C] font-semibold">
                    SOCIALS
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] flex items-center justify-center">
                    <Linkedin className="w-4 h-4" />
                  </div>
                </div>

                <a
                  href={SYDNEY_PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-serif font-bold text-base sm:text-lg text-[#1F1D1A] hover:text-[#0A66C2] transition-colors flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <span className="text-xs text-[#7D756C] font-mono">
                  Connect &amp; View Network
                </span>
              </div>
            </div>

            {/* Languages Bar (Change 10) */}
            <div className="pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#E0D5C7] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Languages className="w-4 h-4 text-[#7A141D]" />
                  <span className="font-semibold text-[#1F1D1A] uppercase tracking-wider">
                    Languages:
                  </span>
                  <span className="text-[#5C554D]">
                    English • Hindi • Gujarati • Bengali
                  </span>
                </div>
                <span className="text-[11px] text-[#7D756C]">
                  Pan-India field research, client consulting &amp; regional stakeholder fluency
                </span>
              </div>
            </div>
          </div>

          {/* Right: Availability & Credentials Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="rounded-[3rem] p-8 sm:p-10 shadow-2xl border-2 border-[#7A141D]/30 bg-gradient-to-br from-[#7A141D] to-[#4A0A10] text-white flex flex-col justify-between min-h-[340px]">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-mono tracking-widest text-[#FAF7F2] uppercase mb-4">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Available for Opportunities
                  </div>
                  <h3 className="font-serif italic text-3xl sm:text-4xl text-[#FAF7F2] font-normal mb-2">
                    Rajanya Dey
                  </h3>
                  <p className="text-xs font-mono text-[#E8DFD5] tracking-wide leading-relaxed">
                    General Management &amp; Market Research Specialist
                  </p>
                </div>

                <div className="pt-6 border-t border-white/20 mt-6 space-y-2 text-xs font-mono text-[#FAF7F2]/80">
                  <div className="flex items-center justify-between">
                    <span>Base</span>
                    <span className="text-white font-medium">India</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Target Roles</span>
                    <span className="text-white font-medium text-right">Consulting, Strategy, Analytics</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Timeline</span>
                    <span className="text-emerald-300 font-medium">Full-Time 2027</span>
                  </div>
                </div>
              </div>

              {/* Monogram Badge */}
              <div className="absolute -bottom-3 -left-2 px-4 py-2 rounded-2xl bg-white text-[#7A141D] shadow-lg border border-[#E0D5C7] flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#7A141D] fill-current" />
                <span className="text-xs font-mono font-medium">Rajanya Dey</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Quick Note Box */}
        <div className="rounded-[2.5rem] bg-white border border-[#E0D5C7] p-8 sm:p-10 shadow-md">
          {formSubmitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Check className="w-7 h-7" />
              </div>
              <h4 className="text-2xl font-serif text-[#1F1D1A] font-semibold">
                Thank you for reaching out!
              </h4>
              <p className="text-sm text-[#5C554D] max-w-md mx-auto">
                Your message has been queued. Rajanya will get back to you within 24–48 business hours.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-6 py-2 rounded-full border border-[#7A141D] text-[#7A141D] text-xs font-mono uppercase cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F0EAE1] pb-4">
                <h4 className="font-serif font-bold text-xl text-[#1F1D1A]">
                  Send a Direct Message
                </h4>
                <span className="text-xs font-mono text-[#7D756C]">
                  Recruitment &amp; project inquiry
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-[#6B635A] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Campus Recruiter / Hiring Manager"
                    className="w-full px-4 py-3 rounded-xl border border-[#E0D5C7] focus:outline-none focus:border-[#7A141D] bg-[#FAF7F2]/50 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-[#6B635A] mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#E0D5C7] focus:outline-none focus:border-[#7A141D] bg-[#FAF7F2]/50 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#6B635A] mb-1.5">
                  Opportunity Type / Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#E0D5C7] focus:outline-none focus:border-[#7A141D] bg-[#FAF7F2]/50 text-sm"
                >
                  <option value="Consulting & Strategy Roles">Consulting &amp; Strategy Roles</option>
                  <option value="Business Analytics & Digital">Business Analytics &amp; Digital</option>
                  <option value="General Management Track">General Management Track</option>
                  <option value="Marketing Leadership & Brand">Marketing Leadership &amp; Brand</option>
                  <option value="Direct Campus Placement Inquiry">Direct Campus Placement Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#6B635A] mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about the role, interview scheduling, or project brief..."
                  className="w-full px-4 py-3 rounded-xl border border-[#E0D5C7] focus:outline-none focus:border-[#7A141D] bg-[#FAF7F2]/50 text-sm"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-[#7A141D] text-white text-xs font-mono uppercase tracking-wider hover:bg-[#5E0F16] transition-all shadow-md cursor-pointer flex items-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </footer>
  );
};
