import React from 'react';
import { motion } from 'motion/react';
import { Award, Users, Trophy } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="recognition" className="section-spacing bg-secondary">
      <div className="story-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <span className="chapter-label">CHAPTER 04</span>
          <div>
            <span className="handwritten-annotation">the wins along the way &rarr;</span>
          </div>
          <h2 style={{ fontSize: 'var(--text-chapter-title)', marginTop: '0.5rem' }}>
            The Proof
          </h2>
        </motion.div>

        {/* AIR 2 Spotlight: Full-width featured card with giant #2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85 }}
          className="air2-spotlight-card"
        >
          {/* Giant decorative #2 */}
          <span className="air2-giant-number" aria-hidden="true">
            #2
          </span>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <span className="air2-badge">
              NATIONAL B-SCHOOL RECOGNITION
            </span>

            <h3 className="air2-heading">
              ALL-INDIA RANK 2
            </h3>

            <div className="air2-institution">
              IIM Calcutta — "Minutes Marvels" &middot; 2025
            </div>

            <p className="air2-desc">
              Secured 2nd rank nationwide against top B-school candidates. The challenge: deliver compelling strategic persuasion in under 300 words, under strict time pressure. It tested everything — precision of argument, narrative architecture, and the ability to say more with less.
            </p>

            <div>
              <span className="handwritten-annotation" style={{ fontSize: '1.2rem' }}>
                (300 words. That's less than this paragraph.)
              </span>
            </div>
          </div>
        </motion.div>

        {/* Other achievements list */}
        <div className="achievements-list">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="achievement-card"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Users size={18} color="var(--accent-primary)" />
              <span className="achievement-year">2026 &middot; LEADERSHIP</span>
            </div>
            <h4 className="achievement-title">Member, Alumni Committee</h4>
            <p className="achievement-desc">
              Elected student body leadership, managing global alumni relations, mentorship architecture, and institutional stakeholder networking.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="achievement-card"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Trophy size={18} color="var(--accent-primary)" />
              <span className="achievement-year">2025 &middot; CURATION</span>
            </div>
            <h4 className="achievement-title">Event Coordinator, Crest 2025</h4>
            <p className="achievement-desc">
              Curated and hosted C-suite/VP corporate alumni judges for the flagship annual management festival, governing rubric scoring and executive hospitality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="achievement-card"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Award size={18} color="var(--accent-primary)" />
              <span className="achievement-year">2025 &middot; DEVELOPMENT</span>
            </div>
            <h4 className="achievement-title">McKinsey Forward Program</h4>
            <p className="achievement-desc">
              Selected participant in McKinsey &amp; Company's flagship learning journey covering hypothesis-driven problem solving, digital leadership, and adaptive communication.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
