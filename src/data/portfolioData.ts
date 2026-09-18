import { Project, Service, StrategicStudy, ClientLogo, EducationItem, AchievementItem } from '../types';

export const CLIENT_LOGOS: ClientLogo[] = [
  {
    id: '1',
    name: 'Lotus Chocolate',
    role: 'Brand Strategy & AI Video',
    svgIcon: 'storyboats'
  },
  {
    id: '1c',
    name: 'Toffeeman',
    role: 'Mascot & Consumer Psychology',
    svgIcon: 'storyboats'
  },
  {
    id: '1e',
    name: 'Campa CSD',
    role: 'Brand Strategy & Qualitative Research',
    svgIcon: 'campa'
  },
  {
    id: '1d',
    name: 'Rockwell',
    role: 'Influencer & GTM Strategy',
    svgIcon: 'rockwell'
  },
  {
    id: '1b',
    name: 'Storyboats',
    role: 'Creative & Brand Direction',
    svgIcon: 'storyboats'
  },
  {
    id: '2',
    name: 'Alumni Committee',
    role: 'Institutional Leadership',
    svgIcon: 'greatlakes'
  },
  {
    id: '3',
    name: 'McKinsey & Company',
    role: 'McKinsey Forward Program Participant',
    svgIcon: 'mckinsey'
  },
  {
    id: '4',
    name: 'IMS Coaching Institute',
    role: 'Marketing Intern',
    svgIcon: 'ims'
  },
  {
    id: '6',
    name: 'IIM Calcutta',
    role: 'AIR 2 Minutes Marvels',
    svgIcon: 'iim'
  },
  {
    id: '7',
    name: 'MSU Baroda',
    role: 'BBA Business Administration',
    svgIcon: 'msu'
  },
  {
    id: '8',
    name: 'Crest Flagship',
    role: 'Alumni Judge Curation',
    svgIcon: 'crest'
  }
];

export const STRATEGIC_STUDIES: StrategicStudy[] = [
  {
    id: 'study-brewtopia',
    title: 'BREWTOPIA — Handcrafted Coffee Atelier & Sensory Experience',
    medium: 'Digital Marketing & Web Development • Luxury Coffee Atelier',
    category: 'Brand Strategy',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
    colorScheme: 'Dark Luxury, Deep Espresso & Warm Amber Accents',
    impactMetric: 'PageSpeed SEO: 100/100 • GA4 & GSC Live',
    likes: 820,
    client: 'Brewtopia Handcrafted Coffee Atelier',
    role: 'Digital Marketing & Web Development',
    liveUrl: 'https://brewtopia.ai.studio',
    externalLinks: [
      {
        label: 'Live Website (brewtopia.ai.studio)',
        url: 'https://brewtopia.ai.studio',
        type: 'live',
        description: 'Production web application deployed on Google AI Studio'
      },
      {
        label: 'Google Analytics 4 Intelligence',
        url: 'https://analytics.google.com/analytics/web/#/a403158713p548890188/reports/intelligenthome',
        type: 'analytics',
        description: 'Traffic analysis, user behavior & conversion funnels (Property ID: 548890188)'
      },
      {
        label: 'Google Search Console Performance',
        url: 'https://search.google.com/search-console?resource_id=https%3A%2F%2Fdeyrajanya822-spec.github.io%2Fbrewtopia%2F',
        type: 'search-console',
        description: 'Search performance, indexing & keyword ranking monitor'
      },
      {
        label: 'Google PageSpeed Insights Audit',
        url: 'https://pagespeed.web.dev/analysis/https-brewtopia-ai-studio/1rsa77bghs?form_factor=desktop',
        type: 'pagespeed',
        description: 'Desktop Core Web Vitals audit: Performance 92, Accessibility 94, Best Practices 96, SEO 100'
      }
    ],
    pageSpeedScores: {
      performance: 92,
      accessibility: 94,
      bestPractices: 96,
      seo: 100
    },
    scopeOfWork: [
      {
        title: 'Brand-Aligned Web Design',
        description: 'Created a dark, moody visual identity using deep espresso tones and warm amber accents to evoke the richness of handcrafted coffee'
      },
      {
        title: 'Interactive Cup Builder',
        description: 'Developed a "Living Cup Builder" feature that lets users customize their signature espresso blend directly on the site'
      },
      {
        title: 'Menu & Bakery Pairings',
        description: 'Designed product showcase sections highlighting artisanal coffee offerings alongside curated fresh bakery pairings'
      },
      {
        title: 'Online Ordering Integration',
        description: 'Implemented a seamless ordering flow to convert digital traffic into real-world sales'
      },
      {
        title: 'SEO & Analytics Setup',
        description: 'Configured Google Analytics (GA4), Google Tag Manager, and Google Search Console for full-funnel tracking and optimization'
      },
      {
        title: 'Performance Optimization',
        description: 'Built as a modern React SPA with optimized asset loading, preconnect hints, and responsive design'
      }
    ],
    analyticsToolsTable: [
      { tool: 'Google Analytics 4', purpose: 'Traffic analysis, user behavior & conversions' },
      { tool: 'Google Search Console', purpose: 'Search performance, indexing & keyword ranking' },
      { tool: 'Google Tag Manager', purpose: 'Event tracking, remarketing & conversion pixels' },
      { tool: 'PageSpeed Insights', purpose: 'Core Web Vitals & performance benchmarking' }
    ],
    keyHighlightsTable: [
      { area: 'Tech Stack', detail: 'React / Vite / Tailwind CSS / GA4 / GTM' },
      { area: 'Design Language', detail: 'Dark luxury / Warm amber palette / Sensory-driven UX' },
      { area: 'Standout Feature', detail: 'Interactive Living Cup Builder for custom espresso blends' },
      { area: 'Marketing Stack', detail: 'GA4 / GTM / Search Console / PageSpeed Insights' },
      { area: 'Audience', detail: 'Premium coffee enthusiasts & urban lifestyle consumers' }
    ],
    resultsBullets: [
      'Full Google marketing stack configured (GA4 + GTM + Search Console)',
      'Site indexed and monitored via Google Search Console',
      'Core Web Vitals tracked via PageSpeed Insights',
      'Event-based analytics architecture for data-driven decision making',
      'Perfect SEO score of 100/100 on PageSpeed Insights'
    ],
    executiveSummary: 'Designed and developed the complete digital presence for Brewtopia, a luxury artisanal coffee atelier. The project involved crafting a premium, immersive web experience that mirrors the brand\'s sensory-driven identity - transforming a traditional cafe concept into an elevated online destination.',
    problemStatement: 'Traditional cafe websites lack immersive digital storytelling, interactiveness, and structured search engine visibility needed to stand out in the crowded specialty coffee space.',
    strategicOutcome: 'Built a fully SEO-optimized, analytics-ready digital storefront that positions Brewtopia as a premium brand in the artisanal coffee space. The interactive cup builder creates a unique, memorable user experience that differentiates the brand from competitors and drives engagement beyond a traditional cafe website.'
  },
  {
    id: 'study-2',
    title: 'MYNTRA — Marketing & Retail Decision-Making System',
    medium: 'Marketing Analytics & Retail BI • Multi-SBU Decision Engine',
    category: 'Analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    colorScheme: 'Myntra Crimson, Slate Charcoal & Data Neon',
    impactMetric: '₹2,300L+ Spend Tracked • 5 SBUs • 7 Channels • 4 Views',
    likes: 648,
    client: 'Myntra (Flipkart / Walmart Group)',
    role: 'Solo Developer & Analyst (Marketing & Retail Analytics)',
    liveUrl: 'https://6a8e992968712e23e267d5ed--prismatic-heliotrope-b13ea5.netlify.app/',
    externalLinks: [
      {
        label: 'Live Netlify Application',
        url: 'https://6a8e992968712e23e267d5ed--prismatic-heliotrope-b13ea5.netlify.app/',
        type: 'live',
        description: 'Interactive decision platform with Leadership, Operating, Diagnostic & Data Entry views'
      },
      {
        label: 'Leadership View (CEO / CMO / CFO)',
        url: 'https://6a8e992968712e23e267d5ed--prismatic-heliotrope-b13ea5.netlify.app/',
        type: 'analytics',
        description: 'Executive KPI rollup, SBU contribution matrix & high-level ROAS health'
      },
      {
        label: 'Operating View (VP Marketing & SBU Heads)',
        url: 'https://6a8e992968712e23e267d5ed--prismatic-heliotrope-b13ea5.netlify.app/',
        type: 'search-console',
        description: 'Where to move budget next month? Channel-by-channel spend allocation & funnel metrics'
      },
      {
        label: 'Diagnostic View (Analytics & Campaign Managers)',
        url: 'https://6a8e992968712e23e267d5ed--prismatic-heliotrope-b13ea5.netlify.app/',
        type: 'pagespeed',
        description: 'What broke and why? Root cause anomaly detection, CPM spike analysis & return rate drag'
      }
    ],
    scopeOfWork: [
      {
        title: 'Decision Architecture Across 4 Views',
        description: 'Structured to answer exact executive questions: "Are we winning this quarter?" (Leadership: CEO/CMO/CFO), "Where should I move budget next month?" (Operating: VP Marketing/SBU Heads), "What broke and why?" (Diagnostic: Campaign Managers), and "How do I log new data?" (Data Entry).'
      },
      {
        title: 'Dynamic KPI Cards & Exception-Based Management',
        description: 'Built traffic-light status cards with auto-alerting when metrics deviate >15% from target across ₹3,000L baseline GMV (₹8,500L during EORS) and 3.8x ROAS.'
      },
      {
        title: 'SBU × Channel ROAS Heatmap',
        description: 'Cross-matrix revealing where each rupee works hardest across 5 Strategic Business Units (Women Westernwear, Men Casuals, Beauty, Footwear, Kids) and 7 investment channels.'
      },
      {
        title: 'Budget Utilisation & Cohort Analysis',
        description: 'Monitors planned vs. actual spend across 7 investment taxonomies (I01–I07) and tracks New vs. Repeat buyer GMV split for Customer Lifetime Value (CLV) assessment.'
      },
      {
        title: 'Creator Commerce & Brand Equity Monitor',
        description: 'End-to-end conversion tracking from creator partnerships to revenue (20% share target) alongside organic vs. paid app opens over a 12-month timeline.'
      },
      {
        title: 'Cross-Tab Correlation & CPA Benchmarking',
        description: 'Maps investment × return strength across all categories with channel-level cost-per-acquisition benchmarking against a ₹500 CPA target.'
      }
    ],
    analyticsToolsTable: [
      { tool: 'Leadership View', purpose: 'Answers "Are we winning this quarter?" for CEO, CMO, CFO' },
      { tool: 'Operating View', purpose: 'Answers "Where should I move budget next month?" for VP Marketing, SBU Heads' },
      { tool: 'Diagnostic View', purpose: 'Answers "What broke and why?" for Analytics & Campaign Managers' },
      { tool: 'Data Entry Module', purpose: 'Structured forms with CSV upload/download support for data logging' }
    ],
    keyHighlightsTable: [
      { area: 'Spend Tracked', detail: '₹2,300L+ Annual Marketing Spend Across 5 SBUs' },
      { area: 'Core KPIs & Targets', detail: 'GMV ₹3,000L (₹8,500L EORS) • ROAS 3.8x • CPA ₹500 • Repeat Rate 40%' },
      { area: 'Tech Stack', detail: 'HTML5 · CSS3 · JavaScript · Chart.js 4.x · Star Schema Data Model · Netlify' },
      { area: 'Taxonomy System', detail: 'Investment Taxonomies (I01–I07) & Return Taxonomies (R01–R07)' },
      { area: 'Creator Commerce', detail: 'End-to-end attribution with 20% strategic revenue share target' }
    ],
    resultsBullets: [
      'Tracked ₹2,300L+ annual marketing spend across 5 SBUs and 7 marketing channels',
      'Decision-first architecture ensuring every screen answers a specific business question for specific stakeholders',
      'Dynamic traffic-light KPI cards triggering automated alerts upon >15% target variance',
      'Modeled EORS-month volume spikes vs. off-season baseline trends to normalize planning',
      'Star Schema data modeling with instant browser-based simulation and zero cloud latency'
    ],
    executiveSummary: 'A full-stack analytics dashboard built for Myntra (Flipkart / Walmart Group) — India\'s largest fashion & lifestyle e-commerce platform. The system transforms raw marketing investment and return data into actionable decisions at three organisational tiers: Leadership, Operations, and Diagnostics.',
    problemStatement: 'Marketing teams manage budgets across dozens of channels, SBUs, and campaigns — but rarely have a single source of truth connecting spend to outcomes. Without structured decision-first taxonomies, teams suffer from delayed anomaly detection and inaccurate budget reallocations.',
    strategicOutcome: 'Engineered a unified decision platform answering "Are we winning?" (Leadership), "Where to move budget?" (Operating), and "What broke & why?" (Diagnostic). Incorporates 10 major analytics features including SBU × Channel ROAS heatmaps, cohort CLV splits, creator commerce funnels, and CSV data entry modules.'
  },
  {
    id: 'study-placement-copilot',
    title: 'AUTONOMOUS PLACEMENT CO-PILOT & ATS RAG ENGINE',
    medium: 'n8n Workflow Automation • LangChain AI Agent • Dual Vector RAG • Google Workspace',
    category: 'Analytics',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    colorScheme: 'Autonomous n8n Pipelines, LangChain RAG & OpenAI GPT-4o',
    impactMetric: '100% Automated Intake • Sub-10s ATS Tailoring',
    likes: 950,
    client: 'Great Lakes Institute of Management (Campus Recruitment)',
    role: 'AI Automation & Workflow Systems Architect',
    liveUrl: 'https://rajanya.app.n8n.cloud',
    externalLinks: [
      {
        label: 'n8n Cloud Automation Architecture',
        url: 'https://rajanya.app.n8n.cloud',
        type: 'live',
        description: 'Multi-node n8n workflow coordinating Gmail triggers, Vector Stores, OpenAI Agent & Google Sheets'
      },
      {
        label: 'Google Sheets & Calendar Pipeline',
        url: 'https://docs.google.com/spreadsheets',
        type: 'general',
        description: 'Automated job opportunity logging (company, role, deadline, skills, location, apply link)'
      }
    ],
    scopeOfWork: [
      {
        title: 'Event-Driven Gmail Recruitment Ingestion',
        description: 'Monitors the placement inbox automatically. When corporate recruitment notifications arrive, the engine filters genuine placement opportunities, parses key metadata, and downloads attached Job Description (JD) PDFs.'
      },
      {
        title: 'Automated Structured Tracking & Calendar Synchronization',
        description: 'Extracts critical fields (Company, Role, Application Deadline, Target Skills, Location, Apply Link) directly into Google Sheets and schedules reminder deadlines on Google Calendar to ensure zero missed applications.'
      },
      {
        title: 'Dual Vector Database Architecture (RAG)',
        description: 'Constructs two isolated Simple Vector Stores with OpenAI Embeddings: Vector Store 1 for the candidate\'s Master Resume (ingested via a dedicated n8n Form trigger) and Vector Store 2 for incoming Job Description PDFs.'
      },
      {
        title: 'LangChain AI Agent & OpenAI GPT-4o Co-Pilot',
        description: 'Integrates an autonomous AI Agent with Open Chat. When prompted to "Tailor my resume for the latest placement", it retrieves context from both vector stores, extracts ATS target keywords, and synthesizes an optimized, grounded resume in under 10 seconds.'
      }
    ],
    analyticsToolsTable: [
      { tool: 'n8n Cloud Orchestrator', purpose: 'Event-driven execution engine connecting webhooks, Gmail triggers, and LangChain nodes' },
      { tool: 'LangChain AI Agent Node', purpose: 'Multi-tool conversational reasoning orchestrating RAG queries between CV and JD stores' },
      { tool: 'OpenAI GPT-4o & Embeddings', purpose: 'Semantic chunking, vector embeddings, ATS keyword extraction, and structured synthesis' },
      { tool: 'Dual Simple Vector Stores', purpose: 'Isolated vector retrieval separating static master credentials from dynamic corporate JDs' },
      { tool: 'Google Sheets & Calendar API', purpose: 'Autonomous real-time placement pipeline tracking and deadline calendar scheduling' }
    ],
    keyHighlightsTable: [
      { area: 'Platform Stack', detail: 'n8n (Cloud/Self-Hosted), LangChain, OpenAI Chat Model (GPT-4o), OpenAI Embeddings' },
      { area: 'Trigger & Ingestion', detail: 'Gmail Event Trigger (Email Ingestion) + n8n Form Trigger (Master CV Upload)' },
      { area: 'RAG Pattern', detail: 'Dual Vector Stores (Store 1: Master Resume, Store 2: Job Description PDF)' },
      { area: 'Execution Speed', detail: 'Slashes manual resume customization from 45+ minutes to <10 seconds' },
      { area: 'Factual Grounding', detail: 'Zero hallucination guardrail: strictly preserves factual truth from Master Resume' }
    ],
    resultsBullets: [
      'Engineered an end-to-end autonomous agent workflow on n8n handling 100% of recruitment email intake and job parsing',
      'Eliminated manual spreadsheet entry by writing company, role, deadline, skills, and links straight to Google Sheets',
      'Automated Google Calendar event creation for application deadlines, ensuring 100% on-time submission compliance',
      'Built a dual-vector RAG pipeline isolating candidate credentials from changing corporate job specifications',
      'Empowered sub-10s conversational resume customization via LangChain and OpenAI GPT-4o with zero factual hallucination'
    ],
    executiveSummary: 'An enterprise-grade autonomous AI Placement Co-Pilot built on n8n that monitors campus recruitment inboxes, extracts job descriptions into vector stores, logs structured opportunities into Google Sheets and Google Calendar, and uses a LangChain OpenAI RAG agent to dynamically generate ATS-optimized tailored resumes in seconds.',
    problemStatement: 'During intense MBA placement seasons, students receive dozens of high-priority recruitment emails daily with conflicting deadlines, differing JD formats, and strict ATS keyword screening. Manually tracking spreadsheets and tailoring individual resumes consumes hours, leading to missed cutoffs and generic submissions.',
    strategicOutcome: 'Architected a fully automated n8n pipeline combining Gmail triggers, Google Sheets, Google Calendar, dual Simple Vector Stores, and an OpenAI GPT-4o LangChain AI Agent. The co-pilot ingests JDs, tracks deadlines, and provides an instant conversational interface for generating ATS-tailored resumes in seconds.'
  },
  {
    id: 'study-trust-reconstruction',
    title: 'WHEN REVIEWS LOSE THEIR CREDIBILITY: HOW CONSUMERS RECONSTRUCT TRUST',
    medium: 'Mixed-Methods Empirical Research • Grounded Theory (Qualitative) • SPSS Statistical Econometrics (Quantitative)',
    category: 'Consumer Psychology',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    colorScheme: 'Empirical Research, Grounded Theory & SPSS Moderated Regression',
    impactMetric: 'r = .804 (p < .001) • α = .872 • R² = .410',
    likes: 1040,
    client: 'Empirical Consumer Behaviour Research Study',
    role: 'Lead Empirical Researcher & Mixed-Methods Data Analyst',
    liveUrl: 'https://docs.google.com/spreadsheets',
    externalLinks: [
      {
        label: 'Research Evidence Master & Audit Tracker',
        url: 'https://docs.google.com/spreadsheets',
        type: 'live',
        description: '10-sheet academic evidence package linking participant master, audio logs, transcripts, consent, and SPSS syntax'
      },
      {
        label: 'SPSS Dataset & Moderated Regression Syntax',
        url: 'https://docs.google.com/spreadsheets',
        type: 'general',
        description: 'Empirical dataset (N=15) with Cronbach Alpha reliability, Pearson correlation matrix, and moderated regression models'
      }
    ],
    scopeOfWork: [
      {
        title: 'Phase 1: Grounded Theory Qualitative Fieldwork',
        description: 'Conducted 10 in-depth semi-structured interviews (P01–P10) across high-involvement e-commerce categories (electronics, sneakers, fashion, furniture). Used constant comparison to build conceptual density around triggers of distrust, alternative search journeys, and the "good enough" information threshold.'
      },
      {
        title: 'Phase 2: 8-Construct Measurement Scale Operationalization',
        description: 'Designed and pre-tested validated Likert measurement scales across 8 focal constructs: Review Distrust (RD), Source Independence (PSI), Cross-Source Corroboration (CSC), Issue Tolerability (IT), Information Sufficiency (IS), Consequence Severity (CS), Reversibility (REV), and Purchase Confidence (PC).'
      },
      {
        title: 'Phase 3: SPSS Psychometric Reliability & Scale Purification',
        description: 'Evaluated internal scale consistency using Cronbach’s Alpha. Validated exceptional reliability for Reversibility (α = .872, 3 items) and Issue Tolerability (α = .802, 4 items), with Cross-Source Corroboration reaching α = .744 and Source Independence at α = .725.'
      },
      {
        title: 'Phase 4: Bivariate Pearson Correlation Matrix',
        description: 'Computed 2-tailed Pearson correlations across all constructs (N=15). Discovered that Issue Tolerability is strongly correlated with Information Sufficiency (r = .804, p < .001), while Reversibility (r = .752, p = .001) and Source Independence (r = .698, p = .004) are the primary drivers of Purchase Confidence.'
      },
      {
        title: 'Phase 5: Moderated Hierarchical Regression Modeling',
        description: 'Tested moderation hypothesis on Information Sufficiency (DV) with mean-centered Source Independence (SI) and Cross-Source Corroboration (CSC). The interaction model achieved R = .640, R² = .410 (F = 2.548), demonstrating that cross-source corroboration amplifies independent source trust.'
      },
      {
        title: 'Phase 6: Managerial Framework & Platform Trust Architecture',
        description: 'Synthesized findings into the 3-Stage Trust Reconstruction Framework: (1) Trigger & Triangulation (Reddit/YouTube), (2) Flaw Tolerability Calibration (searching for consistent negatives), and (3) Reversibility Commitment (return policy backstops).'
      }
    ],
    analyticsToolsTable: [
      { tool: 'SPSS Statistics 29', purpose: 'Psychometric reliability (Cronbach α), descriptive statistics, bivariate correlation matrices, and moderated hierarchical regression' },
      { tool: 'Grounded Theory Methodology', purpose: 'Constant comparison, open coding, axial categorization, and selective synthesis across 10 participant transcripts' },
      { tool: 'Research Evidence Master (Excel)', purpose: 'Auditable academic data chain indexing participant demographics, verbal consent records, audio logs, and coding audit' },
      { tool: 'Moderation Analysis (CSC × SI)', purpose: 'Tested interactive synergistic effects of Cross-Source Corroboration and Source Independence on Information Sufficiency' },
      { tool: 'Braun & Clarke Qualitative Survey', purpose: 'Hybrid exploratory open-ended qualitative inquiry integrated with structured quantitative scale items' }
    ],
    keyHighlightsTable: [
      { area: 'Academic Discipline', detail: 'Empirical Consumer Behaviour Research' },
      { area: 'Qualitative Depth', detail: '10 in-depth primary interviews (P01–P10) across mechanical keyboards, running shoes, fashion, & furniture' },
      { area: 'Highest Reliability Scale', detail: 'Reversibility Scale (REV1–REV3): Cronbach α = .872 (3 items, variance 9.352)' },
      { area: 'Strongest Empirical Link', detail: 'Issue Tolerability <---> Information Sufficiency: r = .804 (p < .001, highly significant)' },
      { area: 'Moderated Regression', detail: 'DV: Information Sufficiency • R = .640, R² = .410, ΔR² = .035 (Predictors: SI, CSC, CSC × SI)' },
      { area: 'Purchase Driver', detail: 'Reversibility <---> Purchase Confidence (r = .752, p = .001) & Source Independence (r = .698, p = .004)' },
      { area: 'Data Integrity', detail: '100% authentic empirical primary data with zero fabrication, verified participant chain, and auditable syntax' }
    ],
    resultsBullets: [
      'Empirically demonstrated that consumers actively search for criticism and recurring flaws on Reddit and YouTube to establish realistic expectations rather than seeking 5-star praise',
      'Proved that Issue Tolerability is the single strongest determinant of Information Sufficiency (r = .804, p < .001), showing consumers stop researching when they know the product’s manageable defects',
      'Confirmed that Return Reversibility (r = .752, p = .001) and Source Independence (r = .698, p = .004) strongly predict final purchase confidence',
      'Established high internal scale reliability in SPSS: Reversibility (α = .872), Issue Tolerability (α = .802), Cross-Source Corroboration (α = .744), and Source Independence (α = .725)',
      'Constructed a moderated regression model (R = .640, R² = .410) proving that cross-source corroboration significantly interacts with independent sources to satisfy information needs',
      'Formulated strategic recommendations for e-commerce platforms: replace aggregate vanity star ratings with cross-source corroboration badges, verified photo flaw logs, and risk-reversal return guarantees'
    ],
    executiveSummary: 'An empirical mixed-methods Consumer Behaviour study investigating how online shoppers navigate review manipulation and reconstruct purchase confidence. Combining 10 in-depth Grounded Theory interviews with SPSS quantitative reliability testing, Pearson bivariate correlation matrices, and moderated hierarchical regression (R² = .410), the research proves that purchase decisions are driven by issue tolerability and return reversibility rather than positive review volume.',
    problemStatement: 'Modern e-commerce consumers face pervasive review contamination: fabricated 5-star ratings, bot spam, and sponsored influencer endorsements have eroded trust in marketplace ratings. Once reviews lose credibility, consumers experience cognitive skepticism and purchase hesitation. Traditional marketing lacks empirical frameworks to understand how consumers seek alternative information and what threshold ("good enough") restores purchase confidence.',
    strategicOutcome: 'Engineered the 3-Stage Trust Reconstruction Framework grounded in primary empirical evidence. Proved that consumers actively search for consistent negative patterns across Reddit, YouTube, and real customer photos to establish their issue tolerability ceiling, and commit to purchase only when low-friction return policies neutralize downside risk.'
  },
  {
    id: 'study-3',
    title: 'AI-Generated TVC Concept & Scriptwriting for Confectionery',
    medium: 'Prompt Engineering & Campaign Storyboard',
    category: 'Campaigns & AI',
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=800&q=80',
    colorScheme: 'Velvet Cocoa & Neon Coral',
    impactMetric: '-65% Creative Production Time',
    likes: 614
  },
  {
    id: 'study-4',
    title: 'Price Elasticity & Colour Psychology In Packaging',
    medium: 'Econometric Regression Modeling & Consumer Psychology',
    category: 'Analytics',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
    colorScheme: 'Emerald Green & Chromatic Prism',
    impactMetric: '+33% Simulated Profitability Lift',
    likes: 540
  }
];

export const SERVICES_LIST: Service[] = [
  {
    id: 'srv-1',
    number: '01',
    title: 'BRAND STRATEGY & MASCOT DIRECTION',
    shortDesc: 'Translating business objectives into compelling brand narratives, mascot archetypes, and distinctive visual guidelines that connect with consumers.',
    fullDesc: 'End-to-end brand architecture, personality development, mascot creative direction, and brand story crafting. Tested on Indian brand environments with 1st-round stakeholder sign-offs.',
    deliverables: ['Mascot Concept Bible & Archetype Guide', 'Tone of Voice & Brand Narrative Playbook', 'Competitor Brand Positioning Matrix', 'Round-1 Approval Pitch Decks'],
    tools: ['Figma', 'Miro', 'Brand Archetype Frameworks', 'Creative Suite'],
    timeline: '1-3 Weeks',
    featuredRate: 'Strategic Retainer / Project'
  },
  {
    id: 'srv-2',
    number: '02',
    title: 'MARKET RESEARCH & WHITE-SPACE BENCHMARKING',
    shortDesc: 'Deep-dive competitive audits, consumer perception surveys, and packaging differentiation to uncover unaddressed category white spaces.',
    fullDesc: 'Benchmarking 25+ competing brands across packaging typography, visual hierarchy, price points, and shelf standout to reduce design turnaround from days to hours.',
    deliverables: ['25+ Brand Category Benchmark Deck', 'Visual & Packaging White-Space Maps', 'Perceptual Positioning Grids', 'Primary Survey Insight Reports (N=50+)'],
    tools: ['SPSS / Excel Analytics', 'Qualtrics / Google Forms', 'Tableau', 'Canva Pro'],
    timeline: '1-2 Weeks',
    featuredRate: 'Tailored Scope'
  },
  {
    id: 'srv-3',
    number: '03',
    title: 'CAMPAIGN CONCEPTUALIZATION & AI AD PROTOTYPING',
    shortDesc: 'High-impact 360° campaign ideation, TVC scriptwriting, and rapid AI-generated video prototyping that slashes production timelines.',
    fullDesc: 'Writing story-driven TVC scripts and concept storyboards, paired with GenAI video tools to produce ready-to-pitch campaign animatics before costly studio shoots.',
    deliverables: ['Full TVC / Digital Video Scripts', 'AI-Generated Campaign Video Prototypes', 'Multi-Tier Influencer Marketing Scorecards', 'Content Pillar Strategy (Hindi & English)'],
    tools: ['Midjourney', 'Runway / Pika', 'Claude / Gemini', 'Notion'],
    timeline: '1-3 Weeks',
    featuredRate: 'Campaign Sprint'
  },
  {
    id: 'srv-4',
    number: '04',
    title: 'GO-TO-MARKET, FIELD OUTREACH & LEAD FUNNELS',
    shortDesc: 'Field outreach strategy, lead qualification systems, and conversion-optimized events that convert cold prospects into qualified leads.',
    fullDesc: 'Hands-on experiential awareness campaigns and outdoor prospecting frameworks that achieved 65-75% lead conversion and high event registration pipelines.',
    deliverables: ['Outdoor Outreach Playbook', 'Lead Qualification & Scoring Rubric', 'Experiential Event Blueprint', 'Conversion Funnel ROI Audit'],
    tools: ['HubSpot / CRM Workflows', 'Google Sheets BI', 'Eventbrite', 'WhatsApp Business'],
    timeline: '2-4 Weeks',
    featuredRate: 'Growth Engagement'
  },
  {
    id: 'srv-5',
    number: '05',
    title: 'QUANTITATIVE PRICING & CONSUMER ANALYTICS',
    shortDesc: 'Price elasticity modeling, demand regression, and consumer color psychology analysis to maximize profitability and brand recall.',
    fullDesc: 'Applying regression algorithms to consumer transaction datasets to discover optimal price sensitivity points and package color cues that elevate purchase intent.',
    deliverables: ['Price Elasticity Regression Model (+33% profit)', 'Colour Psychology Packaging Guidelines', 'Simulated Demand Elasticity Curves', 'Executive Decision Dashboards'],
    tools: ['Python / R', 'Regression Analysis', 'Excel Solver', 'PowerBI'],
    timeline: '1-2 Weeks',
    featuredRate: 'Analytics Project'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-lotus',
    number: '01',
    client: 'Lotus Chocolate (Hyderabad)',
    clientSubtitle: 'Brand Strategy & AI Film Production (Storyboats)',
    title: 'LOTUS CHOCOLATE — Brand Strategy & AI Ad Film Production',
    category: 'Brand Strategy & AI Creative Direction',
    year: '2025',
    role: 'Brand Strategist & AI Creative Director • Summer Internship (Storyboats)',
    description: 'Developed brand positioning for High 5 countline, mapped confectionery category whitespaces, and engineered a 17-page Seedance 2.0 AI video production brief.',
    longDescription: 'Over an 8-week summer internship at Storyboats for Lotus Chocolate (Hyderabad), spearheaded brand positioning strategy for their flagship ₹10 countline product "High 5" and engineered a production-ready 38-second AI ad film brief using Seedance 2.0 for the campaign "Some Fights End Better" / "Take Your Victory Higher". Solved AI cross-session character drift, created "THE HAND" visual throughline, and mapped whitespace across 10 FMCG benchmark brands.',
    scopeOfWork: [
      {
        title: 'Category Whitespace Audit & Socratic Inquiry',
        description: 'Audited 10+ FMCG brands (Dairy Milk, 5 Star, Kit Kat, Perk, Center Fresh, Dark Fantasy, Taj Mahal Tea) to identify the unowned "Quiet × Sustaining" quadrant for High 5.'
      },
      {
        title: 'High 5 Brand Positioning Framework',
        description: 'Anchored positioning in physical product truth (soft, warm, slow-melting caramel nougat): "High 5 is for the person you know well enough to make smile for no reason" & the "bc karliya" small shared win.'
      },
      {
        title: 'Portfolio Architecture (Chuckles & On&On)',
        description: 'Segregated the power-fantasy daydream concept as a separate asset for Chuckles (bold/mischievous). Defined On&On sugar-panned strategy ("Don\'t Break the Flow" / Solo Munching vs. Gems).'
      },
      {
        title: '"THE HAND" Visual Throughline Architecture',
        description: 'Designed the film\'s structural visual grammar: hand that shoves → hand that reaches into pocket → hand that catches → hand that tears wrapper → caramel pull → High Five against mountain sunset.'
      },
      {
        title: 'Seedance 2.0 AI Video Engineering',
        description: 'Locked Character A ("The Catcher") and Character B ("The Thrower") definitions; specified I2V for packaging & caramel physics; planned 7-shot JSON generation pipeline.'
      },
      {
        title: 'Strategic Silence & Music Arc Design',
        description: 'Orchestrated total silence during conflict shots 1–2 so a single acoustic guitar chord at the pocket reach (Shot 3) triggers the emotional shift before visual resolution.'
      }
    ],
    deliverables: [
      '17-Page Seedance 2.0 AI Production Pack v1.0',
      '7-Shot JSON AI Video Generation Prompts',
      'High 5 Brand Positioning Framework & Whitespace Audit',
      'Competitive Benchmark Audit Matrix (10 FMCG Brands)',
      'Visual Direction Bible (Kodak 5219 grain, teal-orange grade)',
      'Strategic Audio Arc & Silence Storytelling Logic'
    ],
    analyticsToolsTable: [
      { tool: 'Brand Positioning', purpose: 'Unoccupied Quiet × Sustaining whitespace; "I know you" & small shared win territory' },
      { tool: 'Visual Throughline ("THE HAND")', purpose: 'Connects shove, pocket reach, bar catch, wrapper tear, and High Five payoff' },
      { tool: 'Seedance 2.0 AI Prompts', purpose: '7-shot JSON generation prompts with locked character seeds & I2V caramel physics' },
      { tool: 'Audio Architecture', purpose: 'Diegetic silence in conflict -> single acoustic chord entry -> warm resolution' }
    ],
    keyHighlightsTable: [
      { area: 'Client & Agency', detail: 'Lotus Chocolate (Hyderabad) via Storyboats' },
      { area: 'Market Context', detail: '₹17,761 Cr Indian chocolate market (10% CAGR) with 81% Mondelez/Nestlé duopoly' },
      { area: 'Campaign Tagline', detail: '"Some fights end better." / "Take your victory higher. Lotus High 5"' },
      { area: 'AI Engine', detail: 'Seedance 2.0 (I2V + T2V Prompts, Kodak 5219 grain, Teal-Orange Grade)' },
      { area: 'Deliverables', detail: '17-Page Production Pack v1.0, 7-Shot JSON Prompts, Storyboard, Whitespace Audit' }
    ],
    resultsBullets: [
      'Delivered a defensible, product-connected brand positioning for High 5 after rigorous Socratic territory testing',
      'Constructed a full competitive landscape audit across 10 global & Indian FMCG benchmark campaigns',
      'Engineered a 17-page Seedance 2.0 AI production pack ready for prompt execution without a film crew',
      'Architected "THE HAND" visual motif threading every frame directly into the product name and gesture',
      'Demonstrated cross-portfolio brand discipline by preserving the power-fantasy concept for Chuckles'
    ],
    designSheets: [
      {
        title: '38-Second AI TVC Shot Breakdown (Seedance 2.0)',
        subtitle: 'Production Pack v1.0 • Campaign: "Some Fights End Better"',
        type: 'storyboard',
        image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1200&q=80',
        tags: ['Seedance 2.0', '7-Shot JSON Pipeline', 'Kodak 5219 Grain', 'I2V Physics'],
        description: 'A 7-shot cinematic commercial set atop a sun-cracked Indian hilltop at golden hour. Explores male friendship reconciliation through non-verbal gestures, resolving in a shared Lotus High 5 bar.',
        items: [
          {
            label: 'Shot 1 (0–5s): The Argument',
            description: 'Wide handheld camera, diegetic hilltop wind only. Tense unresolved mood as two friends clash after an arduous hike.',
            badge: 'T2V • Handheld Tense'
          },
          {
            label: 'Shot 2 (5–10s): The Tackle & Shove',
            description: 'Fast chaos to sudden stillness. High 2-character physical action complexity as tempers flare, ending in separated breathing.',
            badge: 'T2V • High Action'
          },
          {
            label: 'Shot 3 (10–16s): The Silence & Pocket Reach',
            description: 'Slow hold, locked off. Complete silence broken by a single acoustic guitar chord as Character B reaches into his fleece pocket.',
            badge: 'T2V • Music Signal Entry'
          },
          {
            label: 'Shot 4 (16–20s): The Chocolate Bar Toss & Catch',
            description: 'Slow motion chocolate toss through golden sunset air. Character A catches it cleanly. I2V input locks packaging branding accuracy.',
            badge: 'I2V • Packaging Accurate'
          },
          {
            label: 'Shot 5 (20–24s): The Recognition Beat',
            description: 'Still observational two-shot with MCU intercut. "High Five?" / "Yeh le tera High Five" deadpan smirk and mutual understanding.',
            badge: 'T2V • Character Lock'
          },
          {
            label: 'Shot 6 (24–27s): Product ECU Caramel Pull',
            description: 'Extreme close-up slow motion caramel pull against the setting sun. Golden caramel strands stretch with warm slow melt.',
            badge: 'I2V • Caramel Physics'
          },
          {
            label: 'Shot 7 (27–38s): High Five & Sunset Walkoff',
            description: '3-shot multi-sequence: offer → contact → wide silhouette walk into golden sunset. "Take your victory higher. Lotus High 5".',
            badge: 'T2V • Sunset Climax'
          }
        ]
      },
      {
        title: 'Competitive Whitespace Audit Matrix',
        subtitle: 'Strategic Territory Analysis • Indian Confectionery Market',
        type: 'mascot-matrix',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        tags: ['Market Audit', 'Whitespace Mapping', 'Emotional Archetypes'],
        description: 'Audited major chocolate and FMCG campaigns to uncover the unoccupied "Quiet × Sustaining" quadrant in the Indian consumer mindset.',
        items: [
          {
            label: 'Performance / Swagger (Loud)',
            description: 'Nike ("Just Do It"), Gatorade, Bournvita ("Tayaari Jeet Ki"), Pepsi ("Har Ghoont Mein Swag"). External bravado and high pressure.',
            badge: 'Loud × Performance'
          },
          {
            label: 'Escape / Apathy (Quiet/Comedic)',
            description: 'Kit Kat ("Have a Break" / departure from reality), 5 Star ("Eat 5 Star, Do Nothing" / radical stillness & anti-hustle).',
            badge: 'Escape Trap'
          },
          {
            label: 'Celebration & Indulgence',
            description: 'Cadbury Dairy Milk ("Kuch Meetha Ho Jaaye" / big occasions), Dairy Milk Silk ("Say It With Silk" / romance), Dark Fantasy ("Escape Into One").',
            badge: 'Occasion Trap'
          },
          {
            label: '★ HIGH 5 Territory: Quiet × Sustaining',
            description: 'The gap between two hard demands. Not rest, not celebration — just the warm, soft fortitude to keep going with someone who knows you.',
            badge: '★ Unoccupied Whitespace'
          }
        ]
      }
    ],
    tools: ['Seedance 2.0 (AI Video)', 'Prompt Engineering', 'Brand Strategy', 'Socratic Inquiry', 'Competitive Mapping'],
    metrics: [
      { label: 'AI Production Pack', value: '17 Pages' },
      { label: 'TVC Pipeline', value: '7 Shots' },
      { label: 'Market Context', value: '₹17,761 Cr' },
      { label: 'Category Whitespace', value: 'Quiet × Sustaining' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1575372587186-502d5505e60d?auto=format&fit=crop&w=1200&q=80'
    ],
    liveUrl: 'https://lotuschocolate.com',
    featured: true,
    hasAdFilm: true
  },
  {
    id: 'proj-ims',
    number: '02',
    client: 'IMS Coaching Institute',
    clientSubtitle: 'EdTech & Executive Prep Marketing',
    title: '360° Field Surveys, Prospect Outreach & High-ROI Event Execution',
    category: 'Field Research & Lead Generation',
    year: '2024',
    role: 'Marketing Intern',
    description: 'Conducted 30+ field surveys, engaged 65+ prospects with 75% qualification rate, and led an awareness event that boosted enrollment pipelines.',
    longDescription: 'Spearheaded comprehensive on-ground marketing research at IMS Coaching Institute. Interviewed 30+ prospects to evaluate promotional effectiveness, delivering high-value insights that drove an 70-80% conversion rate. Executed targeted outdoor outreach across 65+ high-intent prospects and organized an institute awareness event that reinforced brand recall across the region.',
    deliverables: [
      '30+ Primary In-Person Survey Analysis & ROI Insights',
      'Outdoor Prospecting Playbook (65+ Leads Engaged)',
      'High-Conversion Event Blueprint',
      'Lead Scoring & Follow-up Funnel'
    ],
    tools: ['Primary Research', 'Sales Prospecting', 'Event Management', 'Conversion Analytics'],
    metrics: [
      { label: 'Conversion Rate', value: '70% - 80%' },
      { label: 'Qualified Leads', value: '65% - 75%' },
      { label: 'Field Surveys', value: '30+ Conducted' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80'
    ],
    liveUrl: 'https://imsindia.com',
    featured: true
  },
  {
    id: 'proj-academic',
    number: '03',
    client: 'Academic Research & Consumer Lab',
    clientSubtitle: 'Quantitative Economics & Consumer Psychology',
    title: 'Pricing Elasticity Optimization & Colour Psychology In Packaging',
    category: 'Quantitative Analytics & Consumer Behavior',
    year: '2025',
    role: 'Lead Quantitative Analyst & Researcher',
    description: 'Applied regression elasticity models to improve simulated profitability by 33%, and uncovered color psychology drivers behind brand recall and purchase intent.',
    longDescription: 'Dual research initiative combining hard quantitative econometric modeling with qualitative consumer psychology. 1) Formulated regression equations on consumer purchasing records to map price sensitivity elasticities, discovering margin-maximizing price bands that unlocked a +33% simulated profit lift. 2) Investigated chromatic triggers across packaging to discover how color hues directly sway customer trust, perceived value, and checkout speed.',
    deliverables: [
      'Price Elasticity Regression Model & Demand Matrix',
      '33% Simulated Profit Optimization Blueprint',
      'Consumer Colour Perception Whitepaper',
      'Packaging Chromatic Guidelines'
    ],
    tools: ['Regression Modeling', 'Econometric Elasticity', 'Primary Surveys', 'Statistical Validation'],
    metrics: [
      { label: 'Simulated Profit', value: '+33%' },
      { label: 'Price Elasticity', value: 'Optimized' },
      { label: 'Consumer Recall', value: 'Stat. Significant' }
    ],
    mainImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80'
    ],
    liveUrl: 'https://greatlakes.edu.in',
    featured: true
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Post Graduate Diploma in Management (PGDM)',
    institute: 'Management Institute',
    city: 'India',
    score: 'CGPA 2.72 / 4.0',
    year: '2025 – 2027'
  },
  {
    degree: 'BBA (Bachelor of Business Administration)',
    institute: 'Maharaja Sayajirao University of Baroda',
    city: 'Vadodara',
    score: '61.0%',
    year: '2022 – 2025'
  },
  {
    degree: 'Class XII (Senior Secondary Examination)',
    institute: 'Bharatiya Vidya Bhavans',
    city: 'Vadodara',
    score: '84.4%',
    year: '2022'
  },
  {
    degree: 'Class X (Secondary School Examination)',
    institute: 'Kendriya Vidyalaya ONGC',
    city: 'Baroda',
    score: '86.7%',
    year: '2020'
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: 'All-India Rank 2 (AIR 2) in "Minutes Marvels"',
    organizer: 'IIM Calcutta',
    year: '2025',
    badge: 'National Rank #2',
    desc: 'Secured 2nd rank nationwide in high-intensity micro-writing and narrative strategy competition organized by IIM Calcutta.'
  },
  {
    title: 'McKinsey Forward Program Participant',
    organizer: 'McKinsey & Company',
    year: '2025',
    badge: '10-Week Selective Program',
    desc: 'Completed selective 10-week leadership & business accelerator focusing on structured problem-solving, digital agility, and executive communication.'
  },
  {
    title: 'Core Member, Alumni-Committee',
    organizer: 'Alumni Committee',
    year: '2026',
    badge: 'Leadership Role',
    desc: 'Leading institutional alumni engagement, network programming, and mentorship initiatives.'
  },
  {
    title: 'Flagship Event Curation - Crest 2025',
    organizer: 'Annual Management Festival',
    year: '2025',
    badge: 'Industry Relations',
    desc: 'Sourced, vetted, and coordinated distinguished alumni industry leaders and C-suite judges for the annual management festival Crest.'
  }
];

export const LANGUAGES_DATA = [
  { name: 'English', proficiency: 'Professional / Fluent', level: '100%' },
  { name: 'Hindi', proficiency: 'Native / Bilingual', level: '100%' },
  { name: 'Gujarati', proficiency: 'Native / Fluent', level: '95%' },
  { name: 'Bengali', proficiency: 'Native / Fluent', level: '95%' }
];
