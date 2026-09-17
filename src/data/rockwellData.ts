export interface InfluencerCreator {
  id: string;
  name: string;
  handle: string;
  tier: 'macro' | 'micro';
  category: string;
  youtubeSubs: string;
  instagramFollowers: string;
  totalViews?: string;
  language: string;
  contentStyle: string;
  audienceGeo: string;
  avatar: string;
  verified?: boolean;
  whyPick: {
    title: string;
    description: string;
  }[];
  currentPerformance: string[];
  strategicAngle: string;
  contentPillars: string[];
}

export interface SlideItem {
  pageNumber: number;
  type: 'cover' | 'divider' | 'creator-metrics' | 'creator-strategy';
  title: string;
  subtitle?: string;
  creatorId?: string;
}

export const ROCKWELL_INFLUENCERS: InfluencerCreator[] = [
  {
    id: 'faisal-khan',
    name: 'Faisal Khan (FasBeam / MotorBeam)',
    handle: 'fasbeam',
    tier: 'macro',
    category: 'Macro Influencer — Automotive Journalist',
    youtubeSubs: '~2.33M subscribers',
    instagramFollowers: '~1.0–1.7M followers',
    totalViews: '900M+ lifetime views',
    language: 'English + Hindi (Hinglish style)',
    contentStyle: 'In-depth technical reviews, POV drives, industry analysis',
    audienceGeo: 'India (primary), Middle East, UK, USA (Indian diaspora)',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80',
    verified: true,
    whyPick: [
      {
        title: 'Pioneer credibility',
        description: "India's original auto blogger (MotorBeam, est. 2007) — trusted by enthusiasts and casual buyers alike."
      },
      {
        title: 'Bilingual reach',
        description: 'Hindi + English — Tier-1 metros to Tier-2/3 Hindi belt in one single high-impact channel.'
      },
      {
        title: 'Technical reviewer',
        description: 'Data-driven reviews ensure product is perceived as an honest, rigorous assessment, not a paid spot.'
      },
      {
        title: 'International audience',
        description: 'Middle East, UK, USA Indian diaspora who actively shop for premium car accessories online.'
      },
      {
        title: 'Natural fit',
        description: 'Regularly covers best car upgrades and road trip essentials — your car cooler slots in organically.'
      }
    ],
    currentPerformance: [
      '900M+ lifetime views across YouTube channels',
      '~0.24% ER — exceptionally high absolute engagement at scale',
      'Top 10 India automotive creator rankings',
      'Multi-platform presence: YouTube, Instagram, Twitter/X, MotorBeam portal'
    ],
    strategicAngle: 'Technical Pioneer & Upgrade Authority',
    contentPillars: ['POV Road Trip with Rockwell Cooler', 'Top 5 Summer Car Upgrades', '12V Power Consumption & Cooling Speed Test']
  },
  {
    id: 'gagan-choudhary',
    name: 'Gagan Choudhary (@ganikgagan)',
    handle: 'ganikgagan',
    tier: 'macro',
    category: 'Macro Influencer — Automotive Reviewer',
    youtubeSubs: '~2.11M subscribers',
    instagramFollowers: '600K+ followers (growing)',
    totalViews: '900M+ total views',
    language: 'Primarily Hindi + English technical terms',
    contentStyle: 'Data-driven reviews, safety ratings, specs deep-dives',
    audienceGeo: 'India (Hindi belt dominant), growing international',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    verified: true,
    whyPick: [
      {
        title: 'Unbiased trust',
        description: 'Audience acts on his word — essential for a product where buyers need to trust technical performance claims.'
      },
      {
        title: 'Hindi-first reach',
        description: 'Reaches Tier-2/3 heat-belt India (Rajasthan, UP, MP, Punjab, Haryana) — the core domestic car cooler market.'
      },
      {
        title: 'Specs-obsessed viewers',
        description: 'They compare stats and thermodynamic efficiency before buying; technical cooling data will resonate deeply.'
      },
      {
        title: 'Diaspora reach',
        description: 'Indian international viewers follow his channel religiously for in-depth comparisons and long-distance travel gear.'
      }
    ],
    currentPerformance: [
      '900M+ total lifetime views',
      '~0.24% ER — thousands of likes and technical comments per video',
      'Consistent upload cadence with high watch-time completion',
      'Comment sections full of active pre-purchase advice-seeking buyers'
    ],
    strategicAngle: 'Heat-Belt Heartland Trust & Spec Deep-Dive',
    contentPillars: ['45°C Extreme Heat Challenge in Thar Desert', 'Compressor vs Thermoelectric Real-World Test', 'Battery Drain Safety Audit']
  },
  {
    id: 'powerdrift',
    name: 'PowerDrift',
    handle: 'powerdrift',
    tier: 'macro',
    category: 'Macro Influencer — Premium Automotive Media House',
    youtubeSubs: '~3.23M subscribers',
    instagramFollowers: '~1.01M followers',
    totalViews: '1.2B+ views',
    language: 'English + Hindi (cinematic, bilingual narration)',
    contentStyle: 'High-production car reviews, travelogues, lifestyle films',
    audienceGeo: 'Pan-India + international automotive enthusiasts',
    avatar: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=400&q=80',
    verified: true,
    whyPick: [
      {
        title: 'Premium production',
        description: 'Brand integrations look like TV commercials, not YouTube ads — delivering instant brand elevation and luxury appeal.'
      },
      {
        title: 'Proven collab playbook',
        description: 'Trusted track record with Hyundai, Tata, MG — knows how to weave a product into human narrative without feeling forced.'
      },
      {
        title: 'Cinematic positioning',
        description: 'Hinglish narration frames your cooler as an essential premium overland accessory, not a cheap plastic gadget.'
      },
      {
        title: 'Perfect road-trip placement',
        description: 'Rajasthan dunes, Ladakh high passes, and coastal highways provide genuine extreme-heat showcases for product durability.'
      }
    ],
    currentPerformance: [
      '3.23M YouTube subscribers (crossed 3M milestone Feb 2025)',
      'Instagram ER: 2.99% — 3x above average benchmark for their audience size',
      'Seamlessly spans automotive engineering and aspirational lifestyle/travel',
      'Prestigious international automotive media recognition and award winner'
    ],
    strategicAngle: 'Cinematic Brand Elevation & Overland Expeditions',
    contentPillars: ['Trans-Himalayan Overlanding Expedition', 'Coastal Highway Escapes: Keeping Supplies Icy', 'Cinematic Product Integration Film']
  },
  {
    id: 'bikewithgirl',
    name: 'Priyanka Kochhar (Bikewithgirl)',
    handle: 'bikewithgirl',
    tier: 'macro',
    category: 'Macro Influencer — Automotive + Lifestyle',
    youtubeSubs: '~575K subscribers',
    instagramFollowers: '~2.2M followers',
    totalViews: '350M+ views',
    language: 'Hindi + English (conversational bilingual)',
    contentStyle: 'Authentic reviews, driving/riding experiences, lifestyle',
    audienceGeo: 'India (urban metros) + international female automotive audience',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    verified: true,
    whyPick: [
      {
        title: 'Untapped female audience',
        description: 'Women are key decision-makers for family car comfort and weekend trips — competitors frequently ignore this demographic.'
      },
      {
        title: 'Instagram power',
        description: '2.2M followers — highly viral Reels & Stories drive massive spontaneous accessory discovery and impulse clicks.'
      },
      {
        title: 'Authentic voice',
        description: 'Reviews feel like trusted friend advice rather than sterile corporate sponsorship.'
      },
      {
        title: 'Positive brand signal',
        description: 'Partnering communicates loud and clear: car comfort and travel independence are for everyone.'
      }
    ],
    currentPerformance: [
      '2.2M Instagram followers with exceptional Story engagement and link clicks',
      '575K YouTube subscribers with steady, high-credibility growth',
      'Active automotive + premium lifestyle brand collaborations'
    ],
    strategicAngle: 'Lifestyle Relatability & Female Travel Decision-Makers',
    contentPillars: ['Weekend Getaway Car Packing Hack', 'Family Road Trip Comfort Must-Haves', 'Ice Cream Kept Cold at 40°C in Mumbai Traffic']
  },
  {
    id: 'garima-avtar',
    name: 'Garima Avtar (@garimaavtar)',
    handle: 'garimaavtar',
    tier: 'micro',
    category: 'Micro/Mid-tier Influencer — Automotive + Luxury Lifestyle',
    youtubeSubs: '"Live Up With Garima" (growing channel)',
    instagramFollowers: '~470K followers (verified)',
    totalViews: '65M+ views',
    language: 'English + Hindi',
    contentStyle: 'Supercars, rally driving, luxury lifestyle, automotive coaching',
    audienceGeo: 'India (metros) + international motorsport/luxury community',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    verified: true,
    whyPick: [
      {
        title: 'Rally driver credibility',
        description: 'Raid de Himalaya & Desert Storm veteran — recommends gear from real extreme, harsh-condition terrain experience.'
      },
      {
        title: 'Premium brand halo',
        description: 'Mercedes-Benz, Lamborghini, Ferrari, Audi, BMW collaboration history creates instant premium-by-association.'
      },
      {
        title: 'Industry awards',
        description: 'Gold ETBrandEquity 2022 · Petrolhead of the Year (Female) 2024.'
      },
      {
        title: 'Aspirational female demographic',
        description: 'Significantly underserved by car accessory brands — represents strong high-ticket cross-sell potential.'
      }
    ],
    currentPerformance: [
      '470K Instagram followers (verified badge)',
      'Active podcast: #TheGarimaAvtarShow featuring top motorsport leaders',
      'Regular premium automotive and endurance brand collaborations'
    ],
    strategicAngle: 'Extreme Rally Endurance & Luxury Automotive Halo',
    contentPillars: ['Desert Rally Survival Essentials', 'Luxury SUV Road Trip Equipment', 'Podcast Deep-Dive on Automotive Gear']
  },
  {
    id: 'dds-ravi',
    name: 'DDS (Desi Driving School / @DDSravi)',
    handle: 'DDSravi',
    tier: 'micro',
    category: 'Micro-turning-Macro Influencer — Practical Car Ownership',
    youtubeSubs: '~1.81M subscribers',
    instagramFollowers: '152K+ followers',
    totalViews: '450M+ views',
    language: 'Hindi + English',
    contentStyle: 'Long-term ownership reviews, driving lessons, practical car tips',
    audienceGeo: 'India (pan-India, heavy in North India)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    verified: false,
    whyPick: [
      {
        title: 'Buyers, not dreamers',
        description: 'Ownership-focused audience already spending on car maintenance, interior comforts, and practical upgrades.'
      },
      {
        title: 'Real-world testing',
        description: 'No launch hype — long-term honest feedback creates durable, lasting product credibility and word-of-mouth.'
      },
      {
        title: 'First-time buyer goldmine',
        description: 'Driving lesson viewers are actively outfitting and accessorizing their brand-new family vehicles.'
      },
      {
        title: 'Community trust',
        description: 'Viewers openly seek his advice before purchasing — extraordinarily active comment engagement and questions.'
      }
    ],
    currentPerformance: [
      '1.81M subscribers with industry-leading long-form video retention',
      'Consistent long-form deep-dives + Shorts publishing cadence',
      'Comments packed with genuine product discussions and buying queries'
    ],
    strategicAngle: 'Practical Family Buyer Conversion & Ownership Value',
    contentPillars: ['New Car Accessories You Actually Need', 'Does a Car Cooler Ruin Your Car Battery?', 'Long-Term 6-Month Review in Indian Summers']
  },
  {
    id: 'arun-smoki',
    name: 'Arun Smoki',
    handle: 'arunsmoki',
    tier: 'micro',
    category: 'Micro-turning-Macro — Car Modification & Lifestyle',
    youtubeSubs: '~1.93M subscribers',
    instagramFollowers: '2.4M followers (~1–2M on core accounts)',
    totalViews: '600M+ views',
    language: 'Hindi + English (casual, relatable)',
    contentStyle: 'Car modifications, custom builds, road trips, garage content',
    audienceGeo: 'India (youth demographic, 18–35) + international car mod community',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80',
    verified: true,
    whyPick: [
      {
        title: 'Modification mindset',
        description: 'His audience enthusiastically buys wraps, sound systems, auxiliary lights — car coolers fit into their builds naturally.'
      },
      {
        title: '18–35 youth demographic',
        description: 'Highest accessory disposable spend, most socially active — primed to amplify your product via User-Generated Content (UGC).'
      },
      {
        title: 'Native content format',
        description: 'Smoki Garage installation and modding videos feel completely organic and hands-on, not sponsored.'
      },
      {
        title: 'Road trip storytelling',
        description: 'Summer road trip vlogs + car cooler = aspirational AND undeniably practical in a single viral video.'
      }
    ],
    currentPerformance: [
      '1.93M YouTube subscribers with explosive organic growth',
      '1–2M+ Instagram followers across lifestyle and automotive handles',
      'High modification-community engagement and meetup participation',
      '"Smoki Garage" commercial enterprise brand adds serious mechanical credibility'
    ],
    strategicAngle: 'Youth Modding Culture & Garage Lifestyle Appeal',
    contentPillars: ['Custom Overland Boot Setup with Rockwell Cooler', 'Modifying My Thar with Built-In Refrigerator', 'Summer Goa Road Trip Garage Diaries']
  }
];

export const ROCKWELL_SLIDES: SlideItem[] = [
  { pageNumber: 1, type: 'cover', title: 'ROCKWELL', subtitle: 'Influencer Marketing & Go-To-Market Strategic Pitch' },
  { pageNumber: 2, type: 'divider', title: 'MACRO INFLUENCERS (100K+ Followers)', subtitle: 'Tier-1 National Reach & Brand Authority' },
  { pageNumber: 3, type: 'creator-metrics', title: '1. Faisal Khan (FasBeam / MotorBeam)', creatorId: 'faisal-khan' },
  { pageNumber: 4, type: 'creator-strategy', title: 'Why Pick Faisal Khan & Performance', creatorId: 'faisal-khan' },
  { pageNumber: 5, type: 'creator-metrics', title: '2. Gagan Choudhary (@ganikgagan)', creatorId: 'gagan-choudhary' },
  { pageNumber: 6, type: 'creator-strategy', title: 'Why Pick Gagan Choudhary & Performance', creatorId: 'gagan-choudhary' },
  { pageNumber: 7, type: 'creator-metrics', title: '3. PowerDrift', creatorId: 'powerdrift' },
  { pageNumber: 8, type: 'creator-strategy', title: 'Why Pick PowerDrift & Performance', creatorId: 'powerdrift' },
  { pageNumber: 9, type: 'creator-metrics', title: '4. Priyanka Kochhar (Bikewithgirl)', creatorId: 'bikewithgirl' },
  { pageNumber: 10, type: 'creator-strategy', title: 'Why Pick Priyanka Kochhar & Performance', creatorId: 'bikewithgirl' },
  { pageNumber: 11, type: 'divider', title: 'MICRO INFLUENCERS (10K–100K or Niche 100K–500K)', subtitle: 'High-Intent Niche Trust & Practical Buying Catalysts' },
  { pageNumber: 12, type: 'creator-metrics', title: '1. Garima Avtar (@garimaavtar)', creatorId: 'garima-avtar' },
  { pageNumber: 13, type: 'creator-strategy', title: 'Why Pick Garima Avtar & Performance', creatorId: 'garima-avtar' },
  { pageNumber: 14, type: 'creator-metrics', title: '2. DDS (Desi Driving School / @DDSravi)', creatorId: 'dds-ravi' },
  { pageNumber: 15, type: 'creator-strategy', title: 'Why Pick DDS & Performance', creatorId: 'dds-ravi' },
  { pageNumber: 16, type: 'creator-metrics', title: '3. Arun Smoki', creatorId: 'arun-smoki' },
  { pageNumber: 17, type: 'creator-strategy', title: 'Why Pick Arun Smoki & Performance', creatorId: 'arun-smoki' }
];

export const ROCKWELL_METRICS_SUMMARY = {
  totalYouTubeReach: '14.2M+',
  totalInstagramReach: '10.5M+',
  totalLifetimeViews: '3.5B+',
  macroCreatorsCount: 4,
  microCreatorsCount: 3,
  targetAudienceClusters: [
    { name: 'Tier-1 Metros & Tech Enthusiasts', share: '32%', leaders: 'Faisal Khan, PowerDrift' },
    { name: 'Tier-2/3 Heat-Belt India (Hindi Core)', share: '38%', leaders: 'Gagan Choudhary, DDS' },
    { name: 'Youth Modding & Overlanding', share: '18%', leaders: 'Arun Smoki, Garima Avtar' },
    { name: 'Family Comfort & Female Drivers', share: '12%', leaders: 'Priyanka Kochhar, Garima Avtar' }
  ]
};
