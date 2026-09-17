export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  client?: string;
  categoryTag?: string;
}

export type SkillCategory = 
  | 'Research & Analysis' 
  | 'Digital & Analytics Tools' 
  | 'Strategy & Frameworks' 
  | 'Communication & Client Work';

export interface ToolBadge {
  name: string;
  category: SkillCategory;
  description: string;
  iconName: string;
  sourceTag?: string;
}

export interface AchievementItem {
  id: string;
  icon: 'Trophy' | 'Users' | 'Mic';
  title: string;
  organization: string;
  year: string;
  description: string;
  badge: string;
}

export interface SocialMediaCaseStudy {
  id: string;
  organization: string;
  role: string;
  consultingPillar?: string;
  strategicProblem?: string;
  analyticalApproach?: string;
  executiveImpact?: string;
  goal: string;
  results: string;
  metricHighlight: string;
  studyId?: string;
  liveUrl?: string;
  liveButtonLabel?: string;
  categoryTag?: string;
  mockupStyle?: 'phone' | 'browser';
  beforeFeed: {
    title: string;
    description: string;
    image: string;
    badgeLabel?: string;
  };
  afterFeed: {
    title: string;
    description: string;
    image: string;
    badgeLabel?: string;
  };
}

export interface EmailWebProject {
  id: string;
  type: 'email' | 'web';
  title: string;
  organization: string;
  objectiveOrDescription: string;
  results: string[];
  mockupType: 'phone' | 'desktop';
  image: string;
  additionalNotes?: string;
}

export interface EventMarketingCase {
  id: string;
  title: string;
  organization: string;
  tagline: string;
  description: string;
  learnings: string[];
  socialMediaText: string;
  socialMediaImage: string;
  emailMarketingText: string;
  emailMarketingImage: string;
  metricBadge: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
  span?: string;
}

export interface VideoProject {
  id: string;
  title: string;
  client?: string;
  tag?: string;
  category?: string;
  duration: string;
  thumbnail: string;
  description: string;
}

export const SYDNEY_PROFILE = {
  name: 'Rajanya Dey',
  title: 'Strategy & Business Portfolio',
  role: 'Strategy • Market Research • Analytics • Business Problem Solving',
  tagline: 'Strategy • Market Research • Analytics • Business Problem Solving',
  headline: 'Rajanya Dey — Strategy & Business Portfolio',
  subHeadline: 'I solve business problems using market research, data analytics, strategic frameworks, and cross-functional collaboration — from field research across 9 Indian cities to building digital analytics systems and managing ₹7.8M go-to-market campaigns.',
  candidateStatus: "PGDM '27 candidate at GLIM Gurgaon | Open to full-time opportunities starting 2027",
  languages: 'English • Hindi • Gujarati • Bengali',
  metricBadges: [
    { label: '14.2M+ Reach', context: 'Rockwell Automotive GTM' },
    { label: '9 Pan-India Cities', context: 'Campa Qualitative Fieldwork' },
    { label: '100/100 SEO Score', context: 'Brewtopia Digital Flagship' },
    { label: '5 SBU Dashboard', context: 'Myntra Decision-Support System' },
    { label: '₹7.8M Campaign', context: 'Creator & Media Allocation' }
  ],
  phone: '+91 97230 40166',
  email: 'deyrajanya822@gmail.com',
  linkedin: 'https://www.linkedin.com',
  location: 'Gurgaon, India',
  profilePhoto: '', // Place your photo URL here (e.g. '/my-photo.jpg' or an uploaded image)
  heroImages: {
    mirrorSelfie: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80',
    golfCart: 'https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?auto=format&fit=crop&w=800&q=80',
    portraitGreen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    celebrationCoat: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80'
  },
  bio: "Business-oriented management professional skilled in market research, digital analytics, brand strategy, and cross-functional problem solving, with proven expertise in guiding teams and driving data-driven organizational outcomes.",
  experiencePhilosophy: "Connecting strategic problem solving, market intelligence, and structured execution to drive measurable organizational impact."
};

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-1',
    icon: 'Trophy',
    title: 'All-India Rank 2 — "Minutes Marvels"',
    organization: 'IIM Calcutta',
    year: '2025',
    description: 'National-level micro-writing competition (under 300 words). Ranked 2nd nationwide against participants from top B-schools across India, demonstrating concise written persuasion and executive communication under tight constraints.',
    badge: 'National Rank 2 • IIM Calcutta'
  },
  {
    id: 'ach-2',
    icon: 'Users',
    title: 'Member, Alumni Committee',
    organization: 'Great Lakes Institute of Management, Gurgaon',
    year: '2026',
    description: 'Elected student representative managing institutional alumni networks, corporate engagement channels, and executive networking initiatives across past and current cohorts.',
    badge: 'Alumni Committee • GLIM Gurgaon'
  },
  {
    id: 'ach-3',
    icon: 'Mic',
    title: 'Event Coordinator — "Crest" Flagship Conclave',
    organization: 'Great Lakes Institute of Management, Gurgaon',
    year: '2025',
    description: 'Sourced, briefed, and coordinated distinguished alumni judges and corporate panelists for "Crest", GLIM Gurgaon\'s flagship management and corporate leadership conclave.',
    badge: 'Flagship Event Coordinator'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-rockwell',
    title: 'Rockwell',
    subtitle: 'Influencer & GTM Strategy',
    description: 'Architected 7-creator multi-tier automotive influencer campaign (Macro 100K+ & Niche/Micro) targeting Indian heat-belt car cooler adoption with ₹7.8M allocation and 14.2M+ total reach.',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    badge: '₹7.8M GTM Allocation • 14.2M+ Reach',
    client: 'Rockwell • Storyboats',
    categoryTag: 'Influencer GTM & Budget Allocation'
  },
  {
    id: 'exp-campa',
    title: 'Campa CSD',
    subtitle: 'Brand Strategy, Research & Retail POS',
    description: 'Led 6-week qualitative research across 9 Indian cities, uncovering the "Passenger to Driver" insight and designing the 10-slide Campa Cards strategy with 4 physical retail displays.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    badge: '9-City Field Consumer Research',
    client: 'Campa CSD • Storyboats',
    categoryTag: 'Consumer Insights & Retail Merchandising'
  },
  {
    id: 'exp-myntra',
    title: 'Myntra — Marketing Decision-Support System',
    subtitle: 'KPI dashboards across 5 SBUs & 7 channels • ROAS & CPA tracking',
    description: 'Designed a unified business decision-support system mapping 5 Strategic Business Units and 7 marketing channels (35 performance cells) to optimize ROAS, CPA, and multi-channel budget allocation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    badge: 'Academic Project • Business Analytics',
    client: 'Myntra • PGDM GLIM',
    categoryTag: 'Marketing Analytics & Decision Architecture'
  },
  {
    id: 'exp-brewtopia',
    title: 'Brewtopia — Digital Transformation & Analytics',
    subtitle: 'Built consumer platform • Configured full analytics stack • 100/100 SEO',
    description: 'Designed & built the interactive "Living Cup Builder" consumer platform and configured full GA4 + GTM + Search Console stack, achieving a 100/100 SEO audit score.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    badge: 'Academic Project • Digital Marketing & Analytics',
    client: 'Brewtopia • PGDM GLIM',
    categoryTag: 'Digital Marketing & Web Analytics'
  },
  {
    id: 'exp-lotus',
    title: 'Lotus Chocolate',
    subtitle: 'Brand Strategy & AI TVC',
    description: 'Spearheaded brand positioning for High 5 countline, category whitespace audit across 10 FMCG brands, and directed the 38s AI commercial campaign "Some Fights End Better".',
    image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
    badge: 'Brand Strategy & AI TVC',
    client: 'Lotus Chocolate • Storyboats',
    categoryTag: 'FMCG Positioning & AI Commercial Direction'
  },
  {
    id: 'exp-toffeeman',
    title: 'Toffeeman',
    subtitle: 'Mascot Design & Consumer Psychology',
    description: 'Engineered brand mascot universe, 9-pose emotional action sheet, 6-panel "Desk Intruder" narrative, and neuroscience study on why consumers reach for toffee.',
    image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=800&q=80',
    badge: 'Mascot & Consumer Psychology',
    client: 'Toffeeman • Storyboats',
    categoryTag: 'Brand Mascot & Consumer Psychology'
  }
];

export const TOOL_BADGES: ToolBadge[] = [
  // 1. Research & Analysis
  { 
    name: 'Competitive Institute Benchmarking', 
    category: 'Research & Analysis', 
    description: 'Audited 30+ competitor institutes, mapping fee structures, faculty credentials, and programmatic positioning.',
    iconName: 'Layers',
    sourceTag: 'IMS Coaching Institute'
  },
  { 
    name: 'Qualitative Consumer Surveys', 
    category: 'Research & Analysis', 
    description: 'Conducted structured cohort interviews and feedback loops driving a 70% counseling conversion rate.',
    iconName: 'Users',
    sourceTag: 'IMS Coaching Institute'
  },
  { 
    name: '9-City Qualitative Field Research', 
    category: 'Research & Analysis', 
    description: 'Field consumer discovery across 9 Indian cities, synthesizing the "Passenger to Driver" category insight.',
    iconName: 'Compass',
    sourceTag: 'Storyboats: Campa CSD'
  },
  { 
    name: 'IBM SPSS Regression Modeling', 
    category: 'Research & Analysis', 
    description: 'Cronbach’s alpha reliability (α = .872) and moderated hierarchical regression (R² = .410) for academic research.',
    iconName: 'BarChart3',
    sourceTag: 'GLIM Econometrics'
  },
  { 
    name: 'FMCG Whitespace Category Audit', 
    category: 'Research & Analysis', 
    description: '10-brand competitive quadrant analysis isolating confectionery pricing and packaging opportunities.',
    iconName: 'Layers',
    sourceTag: 'Storyboats: Lotus'
  },
  { 
    name: 'Data-Driven Scorecards & As-Is Analysis', 
    category: 'Research & Analysis', 
    description: 'Systematic gap analysis, benchmarking operational performance against strategic KPIs.',
    iconName: 'CheckCircle2',
    sourceTag: 'Strategic Research'
  },

  // 2. Digital & Analytics Tools
  { 
    name: 'Google Analytics 4 (GA4)', 
    category: 'Digital & Analytics Tools', 
    description: 'Full custom event tracking, funnel drop-off diagnostics, and audience segmentation setup.',
    iconName: 'TrendingUp',
    sourceTag: 'Brewtopia Transformation'
  },
  { 
    name: 'Google Tag Manager (GTM)', 
    category: 'Digital & Analytics Tools', 
    description: 'Trigger configuration, DOM event listeners, and seamless tag deployment without code redeployments.',
    iconName: 'Sparkles',
    sourceTag: 'Brewtopia Analytics'
  },
  { 
    name: 'Google Search Console', 
    category: 'Digital & Analytics Tools', 
    description: 'Indexation monitoring, sitemap submissions, crawl budget optimization, and keyword query telemetry.',
    iconName: 'Search',
    sourceTag: 'Brewtopia SEO'
  },
  { 
    name: 'Technical SEO Auditing', 
    category: 'Digital & Analytics Tools', 
    description: '100/100 Core Web Vitals optimization, semantic schema markup, and metadata optimization.',
    iconName: 'CheckCircle2',
    sourceTag: 'Brewtopia 100/100 SEO'
  },
  { 
    name: 'KPI Dashboard Architecture', 
    category: 'Digital & Analytics Tools', 
    description: '35-cell matrix comparing ROAS, CPA, and budget allocation across 5 SBUs and 7 channels.',
    iconName: 'BarChart3',
    sourceTag: 'Myntra Decision System'
  },
  { 
    name: 'Advanced Microsoft Excel', 
    category: 'Digital & Analytics Tools', 
    description: 'Dynamic financial modeling, multi-variable lookup tables, sensitivity simulations, and scenario planning.',
    iconName: 'FileSpreadsheet',
    sourceTag: 'Business Modeling'
  },
  { 
    name: 'Python for Business & Analytics', 
    category: 'Digital & Analytics Tools', 
    description: 'Data manipulation, exploratory data analysis, and basic business script automation.',
    iconName: 'Code',
    sourceTag: 'Certified Foundations'
  },

  // 3. Strategy & Frameworks
  { 
    name: 'McKinsey MECE Issue Trees', 
    category: 'Strategy & Frameworks', 
    description: 'Mutually Exclusive, Collectively Exhaustive problem decomposition and root cause structuring.',
    iconName: 'Brain',
    sourceTag: 'McKinsey Forward'
  },
  { 
    name: 'Hypothesis-Driven Problem Solving', 
    category: 'Strategy & Frameworks', 
    description: 'Iterative hypothesis formulation, prioritization matrixes, and empirical validation under ambiguity.',
    iconName: 'Target',
    sourceTag: 'McKinsey Forward'
  },
  { 
    name: 'Go-to-Market (GTM) Campaign Design', 
    category: 'Strategy & Frameworks', 
    description: '₹7.8M multi-channel allocation, creator funnel architecture, and media efficiency modeling.',
    iconName: 'TrendingUp',
    sourceTag: 'Storyboats: Rockwell'
  },
  { 
    name: 'Brand Architecture & Positioning', 
    category: 'Strategy & Frameworks', 
    description: 'Value proposition design, brand narrative crafting, and consumer touchpoint choreography.',
    iconName: 'Sparkles',
    sourceTag: 'Lotus & Toffeeman'
  },
  { 
    name: 'Retail POS Merchandising Strategy', 
    category: 'Strategy & Frameworks', 
    description: '4 physical retail counter displays mapped to impulse purchase psychology in grocery channels.',
    iconName: 'Layers',
    sourceTag: 'Storyboats: Campa CSD'
  },
  { 
    name: 'Consumer Behavioral Neuroscience', 
    category: 'Strategy & Frameworks', 
    description: 'Dopamine trigger mapping and emotional stress relief mechanisms in impulse impulse-buy FMCG.',
    iconName: 'Brain',
    sourceTag: 'Toffeeman Mascot Study'
  },

  // 4. Communication & Client Work
  { 
    name: 'Executive Strategy Decks & Pitch Books', 
    category: 'Communication & Client Work', 
    description: 'Crafting high-conviction C-level presentation decks, pitch frameworks, and visual storytelling.',
    iconName: 'Presentation',
    sourceTag: 'Storyboats Deliverables'
  },
  { 
    name: 'Stakeholder Alignment & Management', 
    category: 'Communication & Client Work', 
    description: 'Navigating conflicting cross-functional priorities between creative, media, and finance teams.',
    iconName: 'Users',
    sourceTag: 'Cross-Functional Strategy'
  },
  { 
    name: 'Multi-Tier Creator Management', 
    category: 'Communication & Client Work', 
    description: 'Briefing, contract structuring, and compliance alignment across 7 automotive creator tiers.',
    iconName: 'Video',
    sourceTag: 'Rockwell GTM Pitch'
  },
  { 
    name: 'Event Coordination & Judge Relations', 
    category: 'Communication & Client Work', 
    description: 'Sourced, briefed, and hosted prominent alumni judges for GLIM Gurgaon\'s "Crest" conclave.',
    iconName: 'Award',
    sourceTag: 'GLIM "Crest" Conclave'
  },
  { 
    name: 'Consultative Counseling & Conversions', 
    category: 'Communication & Client Work', 
    description: 'Direct candidate consulting converting 70% of high-intent prospects into registered programs.',
    iconName: 'PhoneCall',
    sourceTag: 'IMS Coaching Institute'
  },
  { 
    name: 'National Award-Winning Micro-Writing', 
    category: 'Communication & Client Work', 
    description: 'Ranked 2nd nationwide in IIM Calcutta "Minutes Marvels" for hyper-concise written persuasion.',
    iconName: 'Trophy',
    sourceTag: 'IIM Calcutta AIR 2'
  }
];

export const SOCIAL_CASE_STUDIES: SocialMediaCaseStudy[] = [
  {
    id: 'case-myntra',
    studyId: 'study-2',
    organization: 'Myntra (Flipkart / Walmart Group)',
    role: 'Advisory Lead • Retail Strategy & Margin Architecture',
    consultingPillar: 'Enterprise Strategy & Margin Optimization',
    strategicProblem: 'Blended ROAS masked ₹2,300L+ cross-channel capital misallocation; 45% of paid conversions cannibalized organic high-intent shoppers.',
    analyticalApproach: 'Deconstructed 7 channels and 5 SBUs into a Star Schema data model with synthetic holdout incrementality and >15% anomaly tripwires.',
    executiveImpact: 'Protected operating contribution margin, decoupled 20% creator commerce attribution, and established 4-tier C-suite governance.',
    goal: 'Diagnose multi-channel attribution blindspots and design a unified 4-tier decision architecture across ₹2,300L+ quarterly spend and 5 SBUs to protect net contribution margin during peak festive surges (EORS).',
    results: 'Engineered automated anomaly detection (>15% delta), decoupled 20% creator commerce attribution, and established synthetic control governance to prevent cannibalization of organic demand.',
    metricHighlight: '₹2,300L+ Capital Allocation • 3.8x ROAS',
    categoryTag: 'Enterprise Retail Strategy • Profitability Architecture • Spend Attribution',
    liveUrl: 'https://6a8e992968712e23e267d5ed--prismatic-heliotrope-b13ea5.netlify.app/',
    liveButtonLabel: 'Open Live Netlify App',
    mockupStyle: 'browser',
    beforeFeed: {
      title: 'Diagnostic: Fragmented Silos & Margin Leakage',
      description: 'Disconnected channel spreadsheets, ungrounded multi-channel spend, and delayed attribution masking organic cannibalization.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      badgeLabel: 'Diagnostic: Siloed Spreadsheets'
    },
    afterFeed: {
      title: 'Strategic Intervention: 4-Tier Decision Engine',
      description: 'Unified Star Schema system answering "Are we winning?" (Leadership), "Where to reallocate capital?" (Operations), and "What broke?" (Diagnostics).',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      badgeLabel: 'Intervention: Live Decision Engine'
    }
  },
  {
    id: 'case-brewtopia',
    studyId: 'study-brewtopia',
    organization: 'Brewtopia Handcrafted Coffee Atelier',
    role: 'Strategy Consultant • Customer Experience (CX) & Brand Architecture',
    consultingPillar: 'Customer Experience (CX) & Brand Strategy',
    strategicProblem: 'Artisanal craft pedigree was diluted in traditional digital channels, reducing pricing power and leading to high bounce rates.',
    analyticalApproach: 'Formulated a tactile "Living Cup Builder" digital ceremony, paired with comprehensive GA4 journey telemetry and 100/100 Core Web Vitals.',
    executiveImpact: 'Established 30–50% premium pricing defensibility, captured organic search intent, and shifted one-off buyers to recurring subscribers.',
    goal: 'Formulate a premium D2C digital go-to-market strategy that translates physical artisanal coffee craftsmanship into a digital experience that commands a 30–50% craft pricing power.',
    results: 'Architected the tactile "Living Cup Builder" sensory ritual, configured end-to-end GA4 journey telemetry, and achieved a 100/100 Core Web Vitals technical SEO benchmark.',
    metricHighlight: '100/100 PageSpeed & SEO • GA4 Telemetry',
    categoryTag: 'D2C Brand Strategy • Digital Flagship Transformation • Organic Growth',
    liveUrl: 'https://brewtopia.ai.studio',
    liveButtonLabel: 'Visit Live Web App',
    mockupStyle: 'phone',
    beforeFeed: {
      title: 'Diagnostic: Flat E-Commerce & Brand Commoditization',
      description: 'Flat text-heavy menus, zero sensory immersion, no interactive blend customization, and zero structured search analytics.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
      badgeLabel: 'Diagnostic: Flat Static Menu'
    },
    afterFeed: {
      title: 'Strategic Intervention: Sensory Flagship & GA4 Engine',
      description: 'Dark luxury digital atelier with real-time cup builder, curated bakery pairings, GA4 event tracking, and 100/100 SEO index.',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      badgeLabel: 'Intervention: Sensory Flagship + GA4'
    }
  },
  {
    id: 'case-placement-copilot',
    studyId: 'study-placement-copilot',
    organization: 'Autonomous Placement Co-Pilot & ATS RAG Engine',
    role: 'Transformation Lead • Enterprise AI & Workflow Systems',
    consultingPillar: 'Operations Re-Engineering & Applied AI',
    strategicProblem: 'Severe operational latency, manual transcription errors, and low conversion in high-volume campus recruitment matching.',
    analyticalApproach: 'Architected an asynchronous n8n multi-agent DAG decoupling unstructured email intake, dual-vector embeddings, and LangChain LLM reasoning.',
    executiveImpact: 'Achieved 100% cycle-time compression on intake, automated corporate calendar synchronization, and sub-10s ATS resume customization.',
    goal: 'Re-engineer a high-friction, error-prone campus recruitment operations workflow into an autonomous, event-driven multi-agent AI system with zero manual data entry.',
    results: 'Compressed candidate intake cycle-time by 100%, automated multi-calendar sync, and reduced ATS resume tailoring latency to under 10 seconds with zero hallucination.',
    metricHighlight: '100% Automated Intake • Sub-10s ATS Tailoring',
    categoryTag: 'Operations Re-Engineering • Agentic AI Architecture • Process Automation',
    liveUrl: 'https://rajanya.app.n8n.cloud',
    liveButtonLabel: 'Explore n8n Workflow Architecture',
    mockupStyle: 'browser',
    beforeFeed: {
      title: 'Diagnostic: Operational Friction & Manual Bottlenecks',
      description: 'Overwhelmed by placement emails, manual spreadsheet entry, missed application deadlines, and hours spent manually tweaking CVs with poor ATS keyword match.',
      image: 'https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&w=800&q=80',
      badgeLabel: 'Diagnostic: Manual Inbox & Bottlenecks'
    },
    afterFeed: {
      title: 'Strategic Intervention: Autonomous Multi-Agent DAG',
      description: 'Automated Gmail extraction, Google Sheets & Calendar sync, dual vector stores (Master CV + JD), and OpenAI chat agent generating customized ATS resumes in seconds.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      badgeLabel: 'Intervention: Autonomous n8n RAG Co-Pilot'
    }
  },
  {
    id: 'case-trust-reconstruction',
    studyId: 'study-trust-reconstruction',
    organization: 'When Reviews Lose Their Credibility: Consumer Trust Reconstruction Engine',
    role: 'Principal Investigator • Behavioral Economics & Decision Science',
    consultingPillar: 'Behavioral Economics & Decision Science',
    strategicProblem: 'Review manipulation and synthetic 5-star inflation induce consumer skepticism, causing high cart abandonment in high-involvement e-commerce.',
    analyticalApproach: 'Conducted mixed-methods Grounded Theory coding (N=10) and IBM SPSS hierarchical moderated regression (N=64, Cronbach α = .872, R² = .410).',
    executiveImpact: 'Formulated the "Issue Tolerability & Return Reversibility" CRO framework, proving consumers purchase only after verifying manageable negative flaws.',
    goal: 'Investigate how modern consumers navigate information asymmetry and review skepticism to formulate an empirical, data-backed trust framework for enterprise e-commerce platforms.',
    results: 'Demonstrated that Issue Tolerability (r = .804, p < .001) and Return Reversibility (r = .752, p = .001) drive conversion confidence, establishing a predictive moderated regression model (R² = .410, α = .872).',
    metricHighlight: 'r = .804 (p < .001) • α = .872 • R² = .410 Model',
    categoryTag: 'Empirical Consumer Research • Econometric Risk Modeling • Conversion Optimization',
    liveUrl: 'https://docs.google.com/spreadsheets',
    liveButtonLabel: 'Inspect Evidence Master & Data Chain',
    mockupStyle: 'browser',
    beforeFeed: {
      title: 'Diagnostic: Review Manipulation & Trust Deficit',
      description: 'Consumers confronting manufactured 5-star ratings, generic sponsored feedback, and seller review manipulation, triggering cognitive skepticism and purchase hesitation.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      badgeLabel: 'Diagnostic: Review Distrust & Paralysis'
    },
    afterFeed: {
      title: 'Strategic Intervention: Econometric Trust & Risk Model',
      description: 'Empirically validated trust reconstruction: consumers cross-check Reddit/YouTube for consistent negative flaws, establishing issue tolerability bounded by return reversibility.',
      image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
      badgeLabel: 'Intervention: Multi-Source Econometric Model'
    }
  }
];

export const EMAIL_AND_WEB_PROJECTS: EmailWebProject[] = [
  {
    id: 'email-first-tee',
    type: 'email',
    title: 'Email Marketing',
    organization: 'First Tee West Michigan',
    objectiveOrDescription: 'Encourage community to donate to First Tee West Michigan and to increase volunteer sign ups.',
    results: [
      '40% open rate',
      '3 Mentor sign ups',
      '2 donations'
    ],
    mockupType: 'phone',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=700&q=80',
    additionalNotes: 'Campaign: "Meet & The Mentor" highlighting Tyler Series (Western Michigan Junior Coach) with a direct "Give Today!" call-to-action.'
  },
  {
    id: 'web-first-tee',
    type: 'web',
    title: 'Website Development',
    organization: 'First Tee West Michigan',
    objectiveOrDescription: "Updated First Tee West Michigan's 'Get Involved' webpage to explain how to send monetary and physical donations to the organization as well as events we host during the summer months.",
    results: [
      'Clarified donation channels (monetary & equipment)',
      'Organized summer tournament schedule',
      'Seamless volunteer onboarding flow'
    ],
    mockupType: 'desktop',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80',
    additionalNotes: 'Features transparent program needs, equipment drop-off guidance, and tiered donor impact milestones.'
  }
];

export const EVENT_MARKETING_CASE: EventMarketingCase = {
  id: 'event-sgbs',
  title: 'Event Marketing',
  organization: 'Social Girls Being Social',
  tagline: "Galentine's Day Virtual Card Event",
  description: 'Interactive event that connects the members of SGBS through Valentine’s Day cards.',
  learnings: [
    'Understanding and following given timelines for deliverables.',
    'Collaboration with a team of 5.',
    'Sending personalized email blast to all participants.'
  ],
  socialMediaText: 'Posted on LinkedIn and Instagram to encourage more sign ups',
  socialMediaImage: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80',
  emailMarketingText: 'Newsletter blast to all members + 40+ girls signed up for this event!',
  emailMarketingImage: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80',
  metricBadge: '40+ Member Registrations'
};

export const PHOTOGRAPHY_GALLERY: PhotoItem[] = [
  {
    id: 'photo-1',
    title: 'Serene Moments in the Grass',
    category: 'Portraiture',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    caption: 'Quiet outdoor couple portrait capturing golden light and natural presence.',
    span: 'col-span-1 md:col-span-2'
  },
  {
    id: 'photo-2',
    title: 'Youth Soccer Match Day',
    category: 'Sports & Action',
    image: 'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=800&q=80',
    caption: 'Capturing the teamwork and intensity of community athletics.',
    span: 'col-span-1'
  },
  {
    id: 'photo-3',
    title: 'Athlete in Motion',
    category: 'Athletics',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80',
    caption: 'Fast-shutter sports photography highlighting focus and determination.',
    span: 'col-span-1'
  },
  {
    id: 'photo-4',
    title: 'Chalk Art in the Sun',
    category: 'Candid Community',
    image: 'https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=800&q=80',
    caption: 'Playful moments of childhood creativity during outdoor summer festivals.',
    span: 'col-span-1'
  },
  {
    id: 'photo-5',
    title: 'Senior Stroll in the Park',
    category: 'Documentary',
    image: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?auto=format&fit=crop&w=800&q=80',
    caption: 'Warm connection and friendship during autumn morning walks.',
    span: 'col-span-1 md:col-span-2'
  },
  {
    id: 'photo-6',
    title: 'Summer Splash & Laughter',
    category: 'Candid Joy',
    image: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=800&q=80',
    caption: 'Pure uninhibited laughter as kids cool down on a warm day.',
    span: 'col-span-1'
  },
  {
    id: 'photo-7',
    title: 'Running Toward the Sunshine',
    category: 'Outdoor Moments',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    caption: 'Wide-angle golden hour snapshot of childhood freedom.',
    span: 'col-span-1'
  }
];

export const VIDEOGRAPHY_PROJECTS: VideoProject[] = [
  {
    id: 'vid-lotus',
    title: 'Lotus High 5 — "Some Fights End Better"',
    client: 'Lotus Chocolate (Hyderabad) via Storyboats',
    tag: 'Flagship AI TV Commercial (38s)',
    duration: '0:38',
    thumbnail: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80',
    description: 'A 38-second cinematic AI commercial exploring male friendship reconciliation on a sun-drenched Indian hilltop, engineered with Seedance 2.0, "THE HAND" visual throughline, and strategic diegetic audio silence.'
  },
  {
    id: 'vid-1',
    title: 'Miced Up with Maddie',
    client: 'GVSU Student Athletes',
    tag: 'Short-form Social Reel',
    duration: '0:45',
    thumbnail: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80',
    description: 'Dynamic mic’d up behind-the-scenes content that humanizes athletes and drives organic TikTok & Instagram engagement.'
  },
  {
    id: 'vid-2',
    title: 'River City Marathon 2024',
    client: 'Grand Rapids Community',
    tag: 'Event Recap & Promo',
    duration: '1:30',
    thumbnail: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=600&q=80',
    description: 'High-tempo documentary cut capturing pre-dawn warmups, cheering crowds, and triumphant finish-line emotions.'
  },
  {
    id: 'vid-3',
    title: 'Junior Golf Leadership Camp',
    client: 'First Tee West Michigan',
    tag: 'Mini Documentary',
    duration: '2:15',
    thumbnail: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80',
    description: 'Heartfelt storytelling video used in donor galas showing how mentorship builds resilience on and off the golf course.'
  }
];
