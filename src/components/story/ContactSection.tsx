import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, Linkedin, Copy, Check, Download, Send, ExternalLink } from 'lucide-react';
import { SYDNEY_PROFILE } from '../../data/sydneyData';

interface ContactSectionProps {
  onDownloadCV: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onDownloadCV }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    opportunityType: 'Consulting / Strategy Role',
    message: ''
  });

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section-spacing bg-secondary">
      <div className="story-container">
        {/* Top 2-Column Layout */}
        <div className="contact-layout">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
          >
            <span className="chapter-label">CHAPTER 06</span>
            <h2 className="contact-left-title">
              Let's connect &amp; collaborate
            </h2>
            <p className="contact-left-desc">
              Looking to discuss consulting, marketing leadership, analytics, or general management roles? Let's schedule an introductory discussion.
            </p>

            <div>
              <button onClick={onDownloadCV} className="btn-primary">
                <Download size={16} />
                <span>Download Official CV</span>
              </button>
            </div>

            {/* 3 Contact Cards */}
            <div className="contact-cards-row">
              <button
                className="contact-card-btn"
                onClick={() => copyToClipboard(SYDNEY_PROFILE.phone, 'phone')}
                title="Click to copy phone number"
              >
                <Phone size={18} color="var(--accent-primary)" />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Phone</div>
                  <div style={{ fontWeight: 600 }}>{SYDNEY_PROFILE.phone}</div>
                </div>
                {copiedField === 'phone' ? (
                  <Check size={16} color="var(--accent-success)" />
                ) : (
                  <Copy size={14} color="var(--text-muted)" />
                )}
              </button>

              <button
                className="contact-card-btn"
                onClick={() => copyToClipboard(SYDNEY_PROFILE.email, 'email')}
                title="Click to copy email address"
              >
                <Mail size={18} color="var(--accent-primary)" />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Email</div>
                  <div style={{ fontWeight: 600 }}>{SYDNEY_PROFILE.email}</div>
                </div>
                {copiedField === 'email' ? (
                  <Check size={16} color="var(--accent-success)" />
                ) : (
                  <Copy size={14} color="var(--text-muted)" />
                )}
              </button>

              <a
                href={SYDNEY_PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="contact-card-btn"
              >
                <Linkedin size={18} color="var(--accent-primary)" />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Network</div>
                  <div style={{ fontWeight: 600 }}>LinkedIn Profile</div>
                </div>
                <ExternalLink size={14} color="var(--text-muted)" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Dark Maroon Overview Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="contact-right-summary">
              <div className="status-pill" style={{ background: 'rgba(255, 255, 255, 0.08)', color: '#FFFFFF', border: '1px solid rgba(45, 212, 168, 0.4)' }}>
                <span className="status-indicator-dot" />
                <span>AVAILABLE FOR OPPORTUNITIES</span>
              </div>

              <h3 className="summary-title">Rajanya Dey</h3>
              <p className="summary-role">General Management &amp; Market Research Specialist</p>

              <div className="summary-detail-item">
                <span className="summary-detail-label">Base Location</span>
                <span className="summary-detail-val">India &middot; Willing to relocate</span>
              </div>

              <div className="summary-detail-item">
                <span className="summary-detail-label">Target Roles</span>
                <span className="summary-detail-val">Consulting, Strategy, Business Analytics</span>
              </div>

              <div className="summary-detail-item">
                <span className="summary-detail-label">Availability</span>
                <span className="summary-detail-val">Full-Time 2027</span>
              </div>

              <div className="summary-detail-item" style={{ borderBottom: 'none', marginBottom: 0 }}>
                <span className="summary-detail-label">Languages</span>
                <span className="summary-detail-val">English &middot; Hindi &middot; Gujarati &middot; Bengali</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8 }}
          className="contact-form-container"
        >
          <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>Send a Message</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.75rem', fontSize: '0.92rem' }}>
            Have an opportunity, interview schedule, or strategic problem in mind? Drop a line directly.
          </p>

          {formSubmitted ? (
            <div style={{ padding: '2rem', textAlign: 'center', background: 'rgba(45, 212, 168, 0.1)', border: '1px solid rgba(45, 212, 168, 0.3)', borderRadius: '12px' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🎉</div>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Thank You for Reaching Out!</h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                Your message has been queued. Rajanya will reply promptly via {formData.email || 'your email'}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Your Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="sarah@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group full-width">
                  <label className="form-label" htmlFor="contact-opp-type">Opportunity Type</label>
                  <select
                    id="contact-opp-type"
                    className="form-select"
                    value={formData.opportunityType}
                    onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                  >
                    <option value="Consulting / Strategy Role">Consulting / Strategy Role</option>
                    <option value="Analytics / Business Intelligence">Analytics / Business Intelligence</option>
                    <option value="General Management / Leadership">General Management / Leadership</option>
                    <option value="Brand & Marketing Strategy">Brand &amp; Marketing Strategy</option>
                    <option value="Other Strategic Inquiry">Other Strategic Inquiry</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label className="form-label" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me about the role, project, or challenge..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button type="submit" className="btn-primary">
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          )}
        </motion.div>

        {/* Footer */}
        <footer className="story-footer">
          <p className="footer-copy">
            Rajanya Dey &middot; Strategy &amp; Business Portfolio &middot; 2026
          </p>
          <p className="footer-note">
            If you've scrolled this far, you're probably the kind of person I'd love to work with. ☕
          </p>
        </footer>
      </div>
    </section>
  );
};
