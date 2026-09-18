import React from 'react';
import { motion } from 'motion/react';
import { SYDNEY_PROFILE } from '../../data/sydneyData';

export const PersonalHookSection: React.FC = () => {
  const photoUrl =
    SYDNEY_PROFILE.profilePhoto ||
    SYDNEY_PROFILE.heroImages.portraitGreen ||
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80';

  return (
    <section id="story" className="section-spacing bg-secondary">
      <div className="story-container">
        <div className="hook-grid">
          {/* Left Column: Story text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <span className="chapter-label">CHAPTER 01</span>
              <div>
                <span className="handwritten-annotation">the short version &darr;</span>
              </div>
            </div>

            <h2 className="hook-heading">
              I ask "but why?" one too many times.
            </h2>

            <p className="hook-body">
              I'm curious, I ask a lot of questions, and I like figuring things out. I enjoy understanding people, exploring ideas, solving problems, and finding ways to make things better.
            </p>

            <p className="hook-body">
              I have a creative side, an analytical side, and I'm still figuring out how to make both work together.
            </p>

            <span className="hook-tagline">
              Curious mind. Creative streak. Always figuring it out.
            </span>

            <div className="hook-ticker">
              <span>🎯 <strong>Targeting:</strong> Consulting, Strategy, Analytics &nbsp;&middot;&nbsp; 📍 <strong>Based in:</strong> India &nbsp;&middot;&nbsp; 🟢 <strong>Open for Full-Time:</strong> 2027</span>
            </div>
          </motion.div>

          {/* Right Column: Circular portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hook-photo-wrapper"
          >
            <div className="hook-photo-frame">
              <img
                src={photoUrl}
                alt="Rajanya Dey"
                className="hook-photo-img"
                loading="lazy"
              />
            </div>

            <div className="status-pill">
              <span className="status-indicator-dot" />
              <span>Open for Opportunities</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
