import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Play, ExternalLink } from 'lucide-react';

interface AcademicProjectsSectionProps {
  onOpenMyntraModal: () => void;
  onOpenBrewtopiaModal: () => void;
  onOpenVideoModal: () => void;
  onOpenSpssModal: () => void;
}

export const AcademicProjectsSection: React.FC<AcademicProjectsSectionProps> = ({
  onOpenMyntraModal,
  onOpenBrewtopiaModal,
  onOpenVideoModal,
  onOpenSpssModal
}) => {
  const [activeDagStep, setActiveDagStep] = useState<number>(0);

  const dagSteps = [
    { label: 'Gmail Trigger', icon: '📩' },
    { label: 'Sheets & Calendar', icon: '📅' },
    { label: 'Dual Vector Store', icon: '🧠' },
    { label: 'LangChain Agent', icon: '⚡' },
    { label: 'ATS Resume (<10s)', icon: '📄' }
  ];

  return (
    <section id="projects" className="section-spacing bg-primary">
      <div className="story-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <span className="chapter-label">CHAPTER 03</span>
          <div>
            <span className="handwritten-annotation">what I built in the classroom &rarr;</span>
          </div>
          <h2 style={{ fontSize: 'var(--text-chapter-title)', marginTop: '0.5rem', marginBottom: '0.75rem' }}>
            Building the Machine
          </h2>
          <p style={{ fontSize: '1.12rem', color: 'var(--text-secondary)', maxWidth: '720px' }}>
            4 capstone projects. Each one started with a broken system and ended with something that actually works.
          </p>
        </motion.div>

        {/* Project 01: Myntra Decision-Support System */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="story-strip"
        >
          <span className="story-strip-bg-num">01</span>

          <div className="story-strip-header">
            <span className="story-strip-role-tag">
              Lead Student Analyst &middot; Marketing &amp; Decision Architecture
            </span>
            <h3 className="story-strip-title">
              Myntra — Marketing Decision-Support System
            </h3>
            <div className="impact-pill">
              <span>₹2,300L+ Capital Allocation &middot; 3.8x ROAS</span>
            </div>
            <div style={{ marginTop: '0.5rem' }}>
              <span className="handwritten-annotation">
                (this one kept me up until 3 AM)
              </span>
            </div>
          </div>

          <div className="story-3col-flow">
            <div className="story-col">
              <span className="story-col-label problem">&bull; The Problem</span>
              <p className="story-col-text">
                Blended ROAS masked ₹2,300L+ cross-channel capital misallocation; 45% of paid conversions cannibalized organic high-intent shoppers across 5 discrete SBUs.
              </p>
            </div>

            <div className="story-col">
              <span className="story-col-label approach">&bull; The Approach</span>
              <p className="story-col-text">
                Deconstructed 7 channels and 5 SBUs into a Star Schema data model with synthetic holdout incrementality and &gt;15% anomaly tripwires.
              </p>
            </div>

            <div className="story-col">
              <span className="story-col-label impact">&bull; The Impact</span>
              <p className="story-col-text">
                Protected operating contribution margin, decoupled 20% creator commerce attribution, and established 4-tier C-suite governance.
              </p>
            </div>
          </div>

          {/* Before / After Mock Windows */}
          <div className="before-after-container">
            {/* Before: Siloed Spreadsheets */}
            <div className="mock-window">
              <div className="mock-window-header">
                <div className="mock-window-dots">
                  <span className="dot-red" />
                  <span className="dot-yellow" />
                  <span className="dot-green" />
                </div>
                <span className="mock-window-title">siloed_spreadsheets.xlsx</span>
              </div>
              <div className="mock-window-body" style={{ color: '#A39D95', fontFamily: 'monospace', fontSize: '0.78rem' }}>
                <div style={{ color: '#E06C75', marginBottom: '4px' }}>[!] BLENDED ROAS: 3.8x (MISLEADING)</div>
                <div style={{ color: '#ABB2BF' }}>SBU_1 | Paid Search: Over-allocated ₹450L</div>
                <div style={{ color: '#ABB2BF' }}>SBU_2 | Organic cannibalization: 45%</div>
                <div style={{ color: '#5C6370', marginTop: '6px' }}>&gt; No anomaly tripwires. Latency: 14 days</div>
              </div>
            </div>

            {/* Shift Indicator */}
            <div className="before-shift-badge">
              <ArrowRight size={22} color="var(--accent-primary)" />
              <span style={{ marginTop: '4px' }}>STRATEGIC SHIFT</span>
            </div>

            {/* After: Live Decision Engine */}
            <div className="mock-window" style={{ border: '1px solid rgba(196, 151, 90, 0.4)' }}>
              <div className="mock-window-header" style={{ background: '#22272E', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="mock-window-dots">
                    <span className="dot-red" />
                    <span className="dot-yellow" />
                    <span className="dot-green" />
                  </div>
                  <span className="mock-window-title" style={{ color: '#C4975A' }}>decision-engine.myntra.live</span>
                </div>
                <a
                  href="https://6a8e992968712e23e267d5ed--prismatic-heliotrope-b13ea5.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--accent-warm)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3px',
                    background: 'rgba(255,255,255,0.08)',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}
                >
                  <span>Open Live App</span>
                  <ExternalLink size={10} />
                </a>
              </div>
              <div className="mock-window-body" style={{ color: '#D1D5DB', fontFamily: 'monospace', fontSize: '0.78rem' }}>
                <div style={{ color: '#98C379', marginBottom: '4px' }}>[OK] STAR SCHEMA: 5 SBUs &times; 7 CHANNELS</div>
                <div style={{ color: '#E5C07B' }}>Holdout Incrementality: Active (99.2% Conf)</div>
                <div style={{ color: '#61AFEF' }}>&gt; Real-time Anomaly Tripwire: 0 breaches</div>
                <div style={{ color: '#98C379', marginTop: '6px' }}>&gt; ₹2,300L Capital Protected</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href="https://6a8e992968712e23e267d5ed--prismatic-heliotrope-b13ea5.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}
              >
                <span>Launch Live Netlify Website</span>
                <ExternalLink size={14} />
              </a>

              <a
                href="https://github.com/deyrajanya822-spec/Myntra-Marketing-Operations-Decision-System"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: '0.65rem 1.25rem', fontSize: '0.85rem' }}
              >
                <span>GitHub Repository</span>
                <ExternalLink size={13} />
              </a>
            </div>

            <button
              onClick={onOpenMyntraModal}
              className="btn-secondary"
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}
            >
              <span>Explore Myntra Architecture &amp; Specs</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </motion.article>

        {/* Project 02: Brewtopia Coffee Atelier */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="story-strip alt-bg"
        >
          <span className="story-strip-bg-num">02</span>

          <div className="story-strip-header">
            <span className="story-strip-role-tag">
              Digital Strategist &amp; Web Architect &middot; Academic Coursework
            </span>
            <h3 className="story-strip-title">
              Brewtopia — Handcrafted Coffee Atelier
            </h3>
            <div className="impact-pill">
              <span>100/100 PageSpeed &amp; SEO &middot; GA4 Telemetry</span>
            </div>
          </div>

          <div className="story-3col-flow">
            <div className="story-col">
              <span className="story-col-label problem">&bull; The Problem</span>
              <p className="story-col-text">
                Artisanal craft pedigree was diluted in traditional digital channels, reducing pricing power and leading to high bounce rates among specialty bean connoisseurs.
              </p>
            </div>

            <div className="story-col">
              <span className="story-col-label approach">&bull; The Approach</span>
              <p className="story-col-text">
                Formulated a tactile "Living Cup Builder" digital ceremony, paired with comprehensive GA4 journey telemetry and 100/100 Core Web Vitals.
              </p>
            </div>

            <div className="story-col">
              <span className="story-col-label impact">&bull; The Impact</span>
              <p className="story-col-text">
                Established 30–50% premium pricing defensibility, captured organic search intent, and shifted one-off buyers to recurring subscribers.
              </p>
            </div>
          </div>

          <div className="before-after-container">
            <div className="mock-window">
              <div className="mock-window-header">
                <div className="mock-window-dots">
                  <span className="dot-red" />
                  <span className="dot-yellow" />
                  <span className="dot-green" />
                </div>
                <span className="mock-window-title">static_menu.pdf</span>
              </div>
              <div className="mock-window-body" style={{ color: '#A39D95', fontFamily: 'monospace', fontSize: '0.78rem' }}>
                <div style={{ color: '#E06C75' }}>&bull; PDF file size: 4.2 MB (Mobile dropoff)</div>
                <div>&bull; Bounce rate: 68.4%</div>
                <div>&bull; Zero custom telemetry or flavor profiling</div>
              </div>
            </div>

            <div className="before-shift-badge">
              <ArrowRight size={22} color="var(--accent-primary)" />
              <span style={{ marginTop: '4px' }}>STRATEGIC SHIFT</span>
            </div>

            <div className="mock-window" style={{ border: '1px solid rgba(196, 151, 90, 0.4)' }}>
              <div className="mock-window-header" style={{ background: '#22272E', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="mock-window-dots">
                    <span className="dot-red" />
                    <span className="dot-yellow" />
                    <span className="dot-green" />
                  </div>
                  <span className="mock-window-title" style={{ color: '#C4975A' }}>brewtopia.ai.studio</span>
                </div>
                <a
                  href="https://brewtopia.ai.studio"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--accent-warm)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3px',
                    background: 'rgba(255,255,255,0.08)',
                    padding: '2px 8px',
                    borderRadius: '4px'
                  }}
                >
                  <span>Open Live Site</span>
                  <ExternalLink size={10} />
                </a>
              </div>
              <div className="mock-window-body" style={{ color: '#D1D5DB', fontFamily: 'monospace', fontSize: '0.78rem' }}>
                <div style={{ color: '#98C379' }}>[OK] Lighthouse Score: 100/100 SEO &amp; Performance</div>
                <div style={{ color: '#E5C07B' }}>Custom GA4 Events: "flavor_profile_select"</div>
                <div style={{ color: '#61AFEF' }}>&gt; 42% higher basket conversion on subscription tier</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href="https://brewtopia.ai.studio"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}
              >
                <span>Launch Live Website (brewtopia.ai.studio)</span>
                <ExternalLink size={14} />
              </a>

              <a
                href="https://analytics.google.com/analytics/web/#/a403158713p548890188/reports/intelligenthome"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: '0.65rem 1.15rem', fontSize: '0.82rem' }}
              >
                <span>GA4 Telemetry</span>
                <ExternalLink size={12} />
              </a>

              <a
                href="https://pagespeed.web.dev/analysis/https-brewtopia-ai-studio/1rsa77bghs?form_factor=desktop"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: '0.65rem 1.15rem', fontSize: '0.82rem' }}
              >
                <span>100/100 PageSpeed</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <button
              onClick={onOpenBrewtopiaModal}
              className="btn-secondary"
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}
            >
              <span>Explore Atelier Specs</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </motion.article>

        {/* Project 03: Autonomous Placement Co-Pilot */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="story-strip"
        >
          <span className="story-strip-bg-num">03</span>

          <div className="story-strip-header">
            <span className="story-strip-role-tag">
              AI Automation &amp; Workflow Systems Architect &middot; Campus Project
            </span>
            <h3 className="story-strip-title">
              Autonomous Placement Co-Pilot &amp; ATS RAG Engine
            </h3>
            <div className="impact-pill">
              <span>100% Automated Intake &middot; Sub-10s ATS Tailoring</span>
            </div>
          </div>

          <div className="story-3col-flow">
            <div className="story-col">
              <span className="story-col-label problem">&bull; The Problem</span>
              <p className="story-col-text">
                Severe operational latency, manual transcription errors, and low conversion in high-volume campus recruitment matching.
              </p>
            </div>

            <div className="story-col">
              <span className="story-col-label approach">&bull; The Approach</span>
              <p className="story-col-text">
                Architected an asynchronous n8n multi-agent DAG decoupling unstructured email intake, dual-vector embeddings, and LangChain LLM reasoning.
              </p>
            </div>

            <div className="story-col">
              <span className="story-col-label impact">&bull; The Impact</span>
              <p className="story-col-text">
                Achieved 100% cycle-time compression on intake, automated corporate calendar synchronization, and sub-10s ATS resume customization.
              </p>
            </div>
          </div>

          {/* Interactive DAG Flowchart */}
          <div className="dag-flow-container">
            <div className="dag-flow-title">
              &gt; ASYNCHRONOUS N8N DAG PIPELINE EXECUTION:
            </div>
            <div className="dag-flow-nodes">
              {dagSteps.map((step, idx) => (
                <React.Fragment key={step.label}>
                  <div
                    className={`dag-node ${activeDagStep === idx ? 'active' : ''}`}
                    onClick={() => setActiveDagStep(idx)}
                    style={{ cursor: 'pointer' }}
                  >
                    <span>{step.icon}</span>
                    <span>{step.label}</span>
                  </div>
                  {idx < dagSteps.length - 1 && <span className="dag-arrow">&rarr;</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Dedicated Video Demonstration Player Banner */}
          <div
            style={{
              marginTop: '1.75rem',
              borderRadius: '16px',
              background: '#1A1614',
              border: '1px solid rgba(196, 151, 90, 0.3)',
              padding: '1.25rem',
              color: '#FFF',
              boxShadow: '0 12px 32px rgba(0,0,0,0.25)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--accent-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFF' }}>
                  <Play size={16} fill="#FFF" style={{ marginLeft: '2px' }} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.05rem', color: '#FFF', margin: 0 }}>
                    Live n8n Execution &amp; Voiceover Walkthrough
                  </h4>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--accent-warm)' }}>
                    02:24 &bull; Video Demonstration &amp; Screen Capture
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenVideoModal}
                className="btn-primary"
                style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}
              >
                <Play size={13} fill="currentColor" />
                <span>Play Video (02:24)</span>
              </button>
            </div>

            {/* Clickable video viewport with thumbnail */}
            <div
              onClick={onOpenVideoModal}
              style={{
                position: 'relative',
                aspectRatio: '21/9',
                width: '100%',
                borderRadius: '12px',
                overflow: 'hidden',
                cursor: 'pointer',
                background: '#0D0B0A',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
                alt="n8n Placement Co-Pilot Video Demonstration"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.4)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '1rem'
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.6)',
                    border: '2px solid rgba(255,255,255,0.2)',
                    color: '#FFF'
                  }}
                >
                  <Play size={24} fill="#FFF" style={{ marginLeft: '3px' }} />
                </div>
                <span style={{ fontSize: '0.85rem', fontFamily: 'monospace', color: '#FFF', fontWeight: 600, marginTop: '0.75rem' }}>
                  Watch Live Demonstration (02:24)
                </span>
                <span style={{ fontSize: '0.72rem', fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#B5AFA8', marginTop: '0.25rem' }}>
                  Click to open full player with chapter scrubber, speed controls &amp; transcript
                </span>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Project 04: Consumer Trust Reconstruction */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="story-strip alt-bg"
        >
          <span className="story-strip-bg-num">04</span>

          <div className="story-strip-header">
            <span className="story-strip-role-tag">
              Principal Student Investigator &middot; Behavioral Economics &amp; Decision Science
            </span>
            <h3 className="story-strip-title">
              When Reviews Lose Credibility: Consumer Trust Reconstruction
            </h3>
            <div className="impact-pill">
              <span>r = .804 (p &lt; .001) &middot; &alpha; = .872 &middot; R&sup2; = .410</span>
            </div>
          </div>

          <div className="story-3col-flow">
            <div className="story-col">
              <span className="story-col-label problem">&bull; The Problem</span>
              <p className="story-col-text">
                Review manipulation and synthetic 5-star inflation induce consumer skepticism, causing high cart abandonment in high-involvement e-commerce categories.
              </p>
            </div>

            <div className="story-col">
              <span className="story-col-label approach">&bull; The Approach</span>
              <p className="story-col-text">
                Conducted mixed-methods Grounded Theory coding (N=10) and IBM SPSS hierarchical moderated regression (N=64, Cronbach &alpha; = .872, R&sup2; = .410).
              </p>
            </div>

            <div className="story-col">
              <span className="story-col-label impact">&bull; The Impact</span>
              <p className="story-col-text">
                Formulated the "Issue Tolerability &amp; Return Reversibility" CRO framework, proving consumers purchase only after verifying manageable negative flaws.
              </p>
            </div>
          </div>

          {/* Real Audited Quotes Block */}
          <div className="quotes-dark-block">
            <div className="quotes-block-header">
              &gt; GROUNDED THEORY DISCOVERY (10 AUDITED PARTICIPANT TRANSCRIPTS)
            </div>

            <div className="quote-item">
              <p className="quote-text">
                "I actually search for criticism. When new sources stop giving me new information, I know I have enough."
              </p>
              <span className="quote-cite">
                &mdash; P02 (Mechanical Keyboard, IIT Delhi)
              </span>
            </div>

            <div className="quote-item" style={{ marginBottom: 0 }}>
              <p className="quote-text">
                "When someone says positives AND negatives, I can make my own judgement. Consistency across Reddit &amp; YouTube makes me trust."
              </p>
              <span className="quote-cite">
                &mdash; P01 &amp; P05 (Footwear &amp; Lifestyle, UBS Chandigarh)
              </span>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={onOpenSpssModal}
              className="btn-secondary"
              style={{ padding: '0.65rem 1.4rem', fontSize: '0.85rem' }}
            >
              <span>View Full Research Deck &amp; Specs</span>
              <ExternalLink size={14} />
            </button>
          </div>
        </motion.article>
      </div>
    </section>
  );
};
