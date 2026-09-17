export interface ExternalLinkItem {
  label: string;
  url: string;
  type: 'analytics' | 'search-console' | 'pagespeed' | 'live' | 'github' | 'general';
  description?: string;
}

export interface Project {
  id: string;
  number: string;
  client: string;
  clientSubtitle?: string;
  title: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  deliverables: string[];
  tools: string[];
  metrics?: { label: string; value: string }[];
  mainImage: string;
  secondaryImage: string;
  gallery: string[];
  liveUrl?: string;
  externalLinks?: ExternalLinkItem[];
  role?: string;
  scopeOfWork?: { title: string; description: string }[];
  pageSpeedScores?: { performance: number; accessibility: number; bestPractices: number; seo: number };
  analyticsToolsTable?: { tool: string; purpose: string }[];
  keyHighlightsTable?: { area: string; detail: string }[];
  resultsBullets?: string[];
  designSheets?: StudyDesignSheet[];
  featured?: boolean;
  hasAdFilm?: boolean;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  tools: string[];
  timeline: string;
  featuredRate?: string;
}

export interface StudyDesignSheet {
  title: string;
  subtitle: string;
  type: 'mascot-matrix' | 'action-sheet' | 'storyboard' | 'generic';
  image?: string;
  tags: string[];
  description: string;
  items?: {
    label: string;
    description: string;
    badge?: string;
    subtext?: string;
  }[];
}

export interface StrategicStudy {
  id: string;
  title: string;
  medium: string;
  category: 'Brand Strategy' | 'Market Research' | 'Campaigns & AI' | 'Consumer Psychology' | 'Analytics';
  image: string;
  colorScheme: string;
  impactMetric: string;
  likes: number;
  client?: string;
  liveUrl?: string;
  externalLinks?: ExternalLinkItem[];
  role?: string;
  scopeOfWork?: { title: string; description: string }[];
  pageSpeedScores?: { performance: number; accessibility: number; bestPractices: number; seo: number };
  analyticsToolsTable?: { tool: string; purpose: string }[];
  keyHighlightsTable?: { area: string; detail: string }[];
  resultsBullets?: string[];
  executiveSummary?: string;
  problemStatement?: string;
  strategicOutcome?: string;
  designSheets?: StudyDesignSheet[];
}

export interface ClientLogo {
  id: string;
  name: string;
  role: string;
  svgIcon: string;
}

export interface EducationItem {
  degree: string;
  institute: string;
  city: string;
  score: string;
  year: string;
}

export interface AchievementItem {
  title: string;
  organizer: string;
  year: string;
  badge: string;
  desc: string;
}

