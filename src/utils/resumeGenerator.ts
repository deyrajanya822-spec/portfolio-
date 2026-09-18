import { SYDNEY_PROFILE } from '../data/sydneyData';

export const downloadOfficialCV = () => {
  const resumeContent = `# RAJANYA DEY
Strategy & Business Problem Solver | General Management & Market Research Specialist
Email: ${SYDNEY_PROFILE.email} | Phone: ${SYDNEY_PROFILE.phone}
Location: India (Open to Relocation) | Target Availability: Full-Time 2027
LinkedIn: ${SYDNEY_PROFILE.linkedin}

================================================================================
EXECUTIVE SUMMARY
================================================================================
Curious, analytical, and execution-oriented strategist with proven ability to bridge qualitative consumer insights with quantitative decision systems. Experienced across FMCG, automotive, and digital ecosystems—from kirana stores across 9 Indian cities to ₹7.8M influencer GTM campaigns, Star Schema capital allocation models, and SPSS regression research. Recipient of All-India Rank 2 at IIM Calcutta's "Minutes Marvels".

================================================================================
HONORS & AWARDS
================================================================================
- ALL-INDIA RANK 2 (AIR 2) — IIM Calcutta, "Minutes Marvels" (2025)
  * Outperformed national top B-school candidates in high-stakes strategic persuasion under 300 words.
- Member, Alumni Committee (2026) — Elected student body leadership managing institutional stakeholder relations.
- Event Coordinator, Crest 2025 — Governed curation and rubric evaluations with corporate C-suite alumni judges.
- McKinsey & Company Forward Program (2025) — Advanced training in MECE problem solving & digital leadership.

================================================================================
INTERNSHIP & PROFESSIONAL DELIVERABLES
================================================================================
STORYBOAT — Brand Strategy & Consumer Research Intern (Summer 2025)

1. Rockwell Car Coolers — Influencer Strategy & GTM
   * Architected ₹7.8M GTM influencer campaign for automotive coolers across India's extreme heat belt.
   * Curated 7-creator tier spanning automotive enthusiasts to lifestyle travelers, generating 14.2M+ total reach.
   * Structured unit economics, creator deliverables, and tier-specific conversion tracking.

2. Campa CSD — Field Research & Retail Architecture
   * Conducted 6 weeks of comprehensive field research across 9 Indian cities with kirana and modern trade retailers.
   * Discovered key "Passenger to Driver" purchase catalyst in youth soft drink consumption.
   * Engineered 4 physical retail merchandising displays optimizing shelf-share and distributor turnover.

3. Lotus Chocolate (High 5) — Brand Strategy & AI Commercial
   * Spearheaded competitive whitespace audit across 10 FMCG confectionery players.
   * Directed 38-second AI-assisted TV commercial ("Some Fights End Better"), compressing cycle times by 30%.
   * Defined brand positioning against legacy countlines with targeted retail shelf placement.

4. Toffeeman Confectionery — Mascot Design & Consumer Psychology
   * Built mascot universe including 9 emotional reaction poses and a 6-panel comic narrative.
   * Investigated hedonics and habit loops driving micro-confectionery repeat purchase behaviors.

================================================================================
CAPSTONE & ACADEMIC DECISION ARCHITECTURES
================================================================================
1. Myntra Marketing Decision-Support System
   * Diagnosed ₹2,300L+ capital misallocation hidden behind blended 3.8x ROAS.
   * Engineered Star Schema integrating 5 SBUs and 7 marketing channels with synthetic holdout incrementality.
   * Implemented >15% anomaly tripwires and 4-tier C-suite governance dashboard.

2. Brewtopia Handcrafted Coffee Atelier
   * Formulated tactile "Living Cup Builder" digital experience achieving 100/100 Google Core Web Vitals & SEO.
   * Integrated custom GA4 event funnels and telemetry, establishing 30-50% pricing defensibility.

3. Autonomous Placement Co-Pilot & ATS RAG Engine
   * Built asynchronous n8n multi-agent DAG with dual-vector embeddings and LangChain reasoning.
   * Compressed candidate intake latency from hours to sub-10s automated resume tailoring.

4. Consumer Review Trust Reconstruction (Behavioral Economics)
   * Mixed-methods study (Grounded Theory N=10, SPSS Hierarchical Regression N=64, alpha=.872, R^2=.410).
   * Proved that consumers actively verify manageable product flaws before purchasing in high-involvement e-commerce.

================================================================================
VALIDATED CORE COMPETENCIES (25)
================================================================================
- Research & Methodology: Qualitative Field Research (9 Cities), SPSS Regression Modeling, Grounded Theory Coding, Competitive Benchmarking, Consumer In-Depth Interviews, Data-Driven Scorecards.
- Digital & Analytics Tools: Google Analytics 4 (GA4), Google Tag Manager (GTM), Google Search Console, SEO Auditing (100/100), KPI Dashboard Design, Advanced Excel (Financial & Pivot Modeling), Python (Pandas).
- Strategy & Frameworks: McKinsey MECE Scoping, Hypothesis-Driven Trees, GTM Campaign Architecture, Brand White-Space Mapping, Root-Cause Diagnostics, Pricing Power Strategy.
- Communication & Leadership: Executive Presentations, 10-Slide Consulting Decks, Stakeholder Alignment, Cross-Functional Bridging, C-Suite Event Governance.

================================================================================
EDUCATION & LANGUAGES
================================================================================
- Candidate for General Management & Strategy Leadership (Graduation 2027)
- Languages: English (Fluent), Hindi (Fluent), Gujarati (Native), Bengali (Native)
`;

  const blob = new Blob([resumeContent], { type: 'text/markdown;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'Rajanya_Dey_Resume_Strategy_2026.md');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
