export interface CampaSlide {
  pageNumber: number;
  title: string;
  category: string;
  headline: string;
  subheadline?: string;
  cardRank?: string; // 'A', 'K', 'Q', 'J', '9'
  cardSuit?: string; // '♥'
  quotes?: {
    speaker: string;
    text: string;
  }[];
  bullets?: {
    num?: string;
    title: string;
    description: string;
  }[];
  insightCallout?: string;
  footerTag?: string;
}

export const CAMPA_DECK_SLIDES: CampaSlide[] = [
  {
    pageNumber: 1,
    title: 'Cover: Campa Cards',
    category: 'Brand Strategy Pitch Deck',
    headline: 'CAMPA CARDS',
    subheadline: 'A Strategy Deck • Campa Brand Strategy 2024',
    insightCallout: 'Re-imagining an iconic Indian heritage beverage brand through the cultural lens of Gen Z authenticity & self-authorship.',
    footerTag: 'Storyboats × Campa CSD'
  },
  {
    pageNumber: 2,
    title: 'The Brand Belief',
    category: 'Core Brand Philosophy',
    cardRank: 'A',
    cardSuit: '♥',
    headline: 'WHEN YOU’RE AT EASE WITH WHO YOU ARE, THE WORLD OPENS UP TO YOU.',
    subheadline: 'Not by trying. Not by performing. Simply by being completely, comfortably yourself.',
    insightCallout: 'There is a powerful presence when someone is authentically themselves—when differences coexist without adjustment. Ease becomes an opening, not an absence of difference.',
    quotes: [
      {
        speaker: 'Brand Belief Tenet',
        text: 'When you are at ease with who you are, the world opens up to you. Not by trying. Not by performing. Simply by being completely, comfortably yourself.'
      }
    ],
    footerTag: 'Lumios Typewriter Edition • Card Ace of Hearts'
  },
  {
    pageNumber: 3,
    title: 'Why Playing Cards?',
    category: 'Visual Metaphor & Symbolism',
    headline: 'WHY PLAYING CARDS?',
    bullets: [
      {
        num: '01',
        title: 'Social Hierarchies in Symbols',
        description: 'Playing card characters—Kings, Queens, Jacks—represent rigid social hierarchies and differing standings that have existed throughout history.'
      },
      {
        num: '02',
        title: 'Breaking Historical Barriers',
        description: 'Historically, commoners would never drink with the king or choose their own drink. Social rules dictated rigid separation between classes.'
      },
      {
        num: '03',
        title: 'Freedom of Choice',
        description: 'Here, characters make their own choices—symbolizing the breaking of social barriers. Authenticity unites and equalizes all at one table.'
      }
    ],
    footerTag: 'Hierarchy Demolition • Symbol of Inclusivity'
  },
  {
    pageNumber: 4,
    title: 'Old Meets New',
    category: 'Visual Bridge & Heritage Relaunch',
    headline: 'OLD MEETS NEW',
    bullets: [
      {
        num: '[01]',
        title: 'Heritage Reimagined',
        description: "Campa is an iconic Indian brand relaunching with fresh ideology. The fusion of medieval playing card characters with modern Campa bottles creates a powerful visual metaphor—honoring the brand's rich heritage while embracing contemporary values."
      },
      {
        num: '[02]',
        title: 'Evolution Without Compromise',
        description: 'The pairing of royal card characters with vibrant Campa bottles symbolizes brand evolution while maintaining core values. Old-world elegance meets new-world authenticity—a visual bridge between tradition and modern relevance.'
      }
    ],
    footerTag: 'Campa Orange & Cola in Royal Court Hands'
  },
  {
    pageNumber: 5,
    title: 'The Human Insight',
    category: 'Cultural Qualitative Truth',
    cardRank: 'K',
    cardSuit: '♥',
    headline: 'INDIA IS NOT ONE THING AND YET, TOGETHER.',
    subheadline: 'Closeness pulls to adjust, but grounded people stay rooted and open.',
    insightCallout: 'The Delhi Metro serves as a unifying space across social divides, where our medieval characters remain completely themselves amidst a diverse crowd—a powerful symbol of unity in diversity and authentic presence.',
    quotes: [
      {
        speaker: 'King of Hearts Insight Card',
        text: "Closeness always carries a quiet pull to adjust, to fit, to drift toward a version of yourself that isn't quite you. The most grounded people stay rooted in who they are and open to everyone around them. Something unexpected happens."
      }
    ],
    footerTag: 'Field Research: Delhi Metro Unity Phenomenon'
  },
  {
    pageNumber: 6,
    title: 'The Brand Stance',
    category: 'Strategic Territory',
    cardRank: 'Q',
    cardSuit: '♥',
    headline: 'ASSURED ME. RICHER WE.',
    subheadline: 'Individual truth creates space for collective openness.',
    insightCallout: 'The Queen of Hearts stands at the center of a vibrant Diwali celebration, holding Campa Orange with quiet confidence. She is not performing, simply present and settled. Her rootedness opens up the world around her, inviting others to be authentic too.',
    quotes: [
      {
        speaker: 'Queen of Hearts Card Stance',
        text: 'People so at ease with who they are that the world around them becomes more alive. Their rootedness is not a wall. It is an opening.'
      }
    ],
    footerTag: 'Positioning: Assured Me. Richer We.'
  },
  {
    pageNumber: 7,
    title: 'The White Space',
    category: 'Market & Category Positioning',
    cardRank: 'J',
    cardSuit: '♥',
    headline: 'OWNS: ROOTED BELONGING.',
    subheadline: 'Being yourself in a shared world, where differences attract and connect.',
    insightCallout: 'Jack’s authenticity draws genuine connection—no universality, no manufactured swagger, just real. His table fills with others drawn naturally to his presence.',
    quotes: [
      {
        speaker: 'Jack of Hearts Card Text',
        text: 'Being yourself in a shared world — and the beautiful, surprising things that follow. Built on differences that attract, connect and hold together. No universality. No swagger. Just real.'
      }
    ],
    footerTag: 'Category White Space: Rooted Belonging'
  },
  {
    pageNumber: 8,
    title: 'The Character',
    category: 'Persona Architecture',
    cardRank: '9',
    cardSuit: '♥',
    headline: 'ROOTED AND OPEN. WARM WITHOUT PERFORMING WARMTH.',
    bullets: [
      {
        num: '01',
        title: 'Rooted and Open',
        description: 'In a formal reception hall designed for performance, a young Indian woman in casual kurta and dupatta stands warmly present—not defensive, not performing, simply herself.'
      },
      {
        num: '02',
        title: 'Choosing Authenticity Over Performance',
        description: 'The room is designed for performance and social posturing, but she chooses authenticity instead—remaining grounded in who she truly is.'
      },
      {
        num: '03',
        title: 'Genuinely Present, Not Performative',
        description: 'She is not defensive or performative. Her warmth is real, not manufactured. Being simply yourself creates the warmest presence of all.'
      }
    ],
    quotes: [
      {
        speaker: 'Card 9 of Hearts',
        text: 'Simply themselves — and because of that, the most generous presence in any room.'
      }
    ],
    footerTag: 'The Antidote to Social Posturing'
  },
  {
    pageNumber: 9,
    title: 'The Packaging Concept',
    category: 'Product & Merchandise Design',
    headline: 'CARD BACK DESIGN OPTIONS',
    subheadline: 'Iconic Campa Brush Stroke + Storyboats Co-Branding',
    bullets: [
      {
        num: '01',
        title: 'Minimalist Heritage White',
        description: 'Clean crisp white stock card back with energetic purple-crimson brush stroke framing the iconic Campa logotype and Storyboats watermark.'
      },
      {
        num: '02',
        title: 'Gradient Royale Deck (Midnight Crimson)',
        description: 'Rich royal purple-to-crimson gradient card back featuring the full fan-deck array with pure white bold typography.'
      }
    ],
    footerTag: 'Custom Collectible Deck for Festival Drops'
  },
  {
    pageNumber: 10,
    title: 'The Outer Packaging',
    category: 'Structural Packaging & Retail POS',
    headline: 'THE OUTER PACKAGING TUCK-BOX',
    subheadline: 'Baroque Silver Engraving × Modern Campa Beverage Lineup',
    insightCallout: 'Intricate silver-foiled Victorian/Baroque filigree frame centering modern Campa pet bottles (Campa Cola, Campa Orange, Campa Lemon, Campa Energy Drink) and cans. Merging antique playing card craft with contemporary FMCG shelf punch.',
    footerTag: 'Tuck-Box Outer Box • Silver Foil Emboss'
  }
];

export interface QualitativeEvidenceSlide {
  pageNumber: number;
  section: string;
  title: string;
  subtitle?: string;
  leadQuote?: {
    speaker: string;
    text: string;
  };
  quotes: {
    speaker: string;
    text: string;
    highlight?: string;
  }[];
  analysis: string[];
  takeaway: string;
  badge?: string;
}

export const QUALITATIVE_RESEARCH_SLIDES: QualitativeEvidenceSlide[] = [
  {
    pageNumber: 1,
    section: '01 • CHILDHOOD FESTIVALS',
    title: 'GROWING UP WITH FESTIVALS',
    subtitle: 'Warm and rich — but not yet theirs to shape.',
    leadQuote: {
      speaker: 'Risham',
      text: 'My parents and elders decided what clothes I wore, which relatives we visited, and what the whole day looked like.'
    },
    quotes: [
      {
        speaker: 'Soumya',
        text: 'Whatever our parents are doing, we have to do that.'
      },
      {
        speaker: 'Dhwani',
        text: 'My grandmother decided what rituals had to be done and what would happen throughout the day.'
      }
    ],
    analysis: [
      'Structured rituals pre-decided by elders',
      'Clothes and outfits selected for them',
      'Preset relative visit rosters',
      'Emotionally warm, culturally rich — but not yours to design'
    ],
    takeaway: 'Before 18, festivals happen TO them. Children inherit a fully scripted cultural pageant.',
    badge: 'Inherited Structure'
  },
  {
    pageNumber: 2,
    section: '02 • WHAT WAS MISSING',
    title: 'BUT THERE WAS SOMETHING CLEARLY MISSING',
    subtitle: 'What was absent in childhood celebrations.',
    quotes: [
      {
        speaker: 'Risham',
        text: 'Sometimes it felt like festivals were happening around me rather than with me.',
        highlight: 'No choice'
      },
      {
        speaker: 'Soumya',
        text: 'I wanted to go out with friends during nighttime but didn’t get permission.',
        highlight: 'No permission'
      },
      {
        speaker: 'Dhwani',
        text: 'I wanted to be part of the decision-making, but that autonomy was not allowed.',
        highlight: 'No authorship'
      }
    ],
    analysis: [
      'Absence 1: Choice of who to celebrate with',
      'Absence 2: Choice of what activities to do',
      'Absence 3: Permission for night plans or self-directed movement',
      'Absence 4: Ownership over the narrative of the celebration'
    ],
    takeaway: 'The gap was never cultural apathy; it was an absence of personal agency and authorship.',
    badge: 'The Missing Choice'
  },
  {
    pageNumber: 3,
    section: '03 • HOW IT WAS MISSING',
    title: 'THE CELEBRATION WAS ALREADY DECIDED',
    subtitle: 'How authorship was structured in family spaces.',
    quotes: [
      {
        speaker: 'Risham',
        text: 'My parents and elders decided what clothes I wore, which relatives we visited, and what the whole day looked like.'
      },
      {
        speaker: 'Soumya',
        text: 'Whatever our parents are doing, we have to do that.'
      },
      {
        speaker: 'Dhwani',
        text: 'My grandmother decided what rituals had to be done and what would happen throughout the day.'
      }
    ],
    analysis: [
      'Guided participation with no veto power',
      'Inherited social obligations passed down through generations',
      'Predefined festive choreography',
      'Limited voice in the scheduling and guest lists'
    ],
    takeaway: 'The festival felt meaningful, but youth felt like passengers in an adult vehicle.',
    badge: 'Passenger Stage'
  },
  {
    pageNumber: 4,
    section: '04 • THE EMOTIONAL EFFECT',
    title: 'THEY SAW IT BEFORE THEY COULD LIVE IT',
    subtitle: 'Older cousins. Adults. Didi. Bhaiya. Staying out late. Making their own plans.',
    leadQuote: {
      speaker: 'Emotional Synthesis',
      text: 'The emotion was not sadness. It was anticipation.'
    },
    quotes: [
      {
        speaker: 'Risham',
        text: 'I always wanted to stay out late during festivals the way older cousins or adults did.'
      },
      {
        speaker: 'Soumya',
        text: 'I wanted to go out with friends during nighttime but didn’t get permission.'
      },
      {
        speaker: 'Dhwani',
        text: 'I wanted to be part of the decision-making.'
      }
    ],
    analysis: [
      'They witnessed older brothers, sisters, and cousins holding the "hall pass"',
      'Nighttime celebrations represented freedom, laughter, and personal territory',
      'The longing was not rebellion against tradition, but wanting to experience it as an adult'
    ],
    takeaway: 'Anticipation builds across years: waiting for the day when the hall pass is handed over.',
    badge: 'The Longing'
  },
  {
    pageNumber: 5,
    section: '05 • ENTERING 18–22',
    title: 'AND NOW THAT THEY ARE FINALLY AN ADULT…',
    subtitle: 'Not just growing up — becoming someone.',
    quotes: [
      {
        speaker: 'Soumya',
        text: 'I know how to take my stand now.'
      },
      {
        speaker: 'Risham',
        text: 'Friends allow a version of me that feels more relaxed and unfiltered.'
      },
      {
        speaker: 'Dhwani',
        text: 'I can do what I want without taking permission.'
      },
      {
        speaker: 'Kartikey',
        text: 'I looked forward to travelling and making my own choices once I became an adult.'
      }
    ],
    analysis: [
      'Individuality has become emotionally paramount',
      'Identity is actively forming in real time',
      'Peer validation overtakes parental approval',
      'The self transitions from passive recipient to active driver'
    ],
    takeaway: '18–22 is not just an age bracket: it is the precise threshold where selfhood awakens.',
    badge: 'Awakening Agency'
  },
  {
    pageNumber: 6,
    section: '06 & 07 • THE GRADUAL SHIFT',
    title: 'THE TRANSITION HAPPENS GRADUALLY',
    subtitle: 'It starts with permission. Then it becomes expectation. Then it becomes theirs.',
    leadQuote: {
      speaker: 'Soumya',
      text: 'Now I got permission to hang out with friends on the actual festival day.'
    },
    quotes: [
      {
        speaker: 'Risham',
        text: 'After turning 18, I started making my own plans with friends.'
      },
      {
        speaker: 'Dhwani',
        text: 'I can now skip things I don’t find meaningful.'
      },
      {
        speaker: 'Kartikey',
        text: 'I went on solo trips during festivals.'
      }
    ],
    analysis: [
      'Stage 1 (Child): Everything decided by family',
      'Stage 2 (Early Teens): Watching cousins, wanting more',
      'Stage 3 (16–17): Some freedom, but curfew remains strict',
      'Stage 4 (Turns 18): First real night permissions granted',
      'Stage 5 (18–22): Full self-authorship of festive rituals'
    ],
    takeaway: 'This is not sudden rebellion. It is a graceful, negotiated evolution of independence.',
    badge: 'Timeline of Agency'
  },
  {
    pageNumber: 7,
    section: '08 & 09 • WHY FESTIVALS BECOME THE PERFECT SPACE',
    title: 'SOME SPACES ALLOW MORE OF YOU',
    subtitle: 'Festivals temporarily loosen routine, expectation, and social rigidity.',
    quotes: [
      {
        speaker: 'Risham',
        text: 'Now festivals feel more personal.'
      },
      {
        speaker: 'Dhwani',
        text: 'I can celebrate festivals on my own terms now.'
      }
    ],
    analysis: [
      'Festivals temporarily soften social structures',
      'Families are joyful and more permissive',
      'Curfew boundaries relax organically',
      'More relaxed, authentic versions of self emerge naturally',
      'Festivals do not create individuality — they create the safe container for it'
    ],
    takeaway: 'Festivals are cultural hall-passes: the one time when family sanction and youth independence coexist.',
    badge: 'Cultural Hall-Pass'
  },
  {
    pageNumber: 8,
    section: '10–13 • CHOSEN SPACES & CHOSEN BELONGING',
    title: 'IN CHOSEN SPACES: "I CHOSE THIS. NOBODY CHOSE IT FOR ME."',
    subtitle: 'Inherited belonging offers stability. Chosen belonging offers space to become.',
    leadQuote: {
      speaker: 'Core Insight Line',
      text: '"I chose this. Nobody chose it for me." It isn’t about partying or wild rebellion. It is about agency.'
    },
    quotes: [
      {
        speaker: 'Risham',
        text: 'Friends allow a version of me that feels more relaxed and unfiltered. What made it feel personal was that I was celebrating because I wanted to.'
      },
      {
        speaker: 'Dhwani',
        text: 'There is an absence of judgment around friends.'
      },
      {
        speaker: 'Kartikey',
        text: 'We can chill and talk openly.'
      }
    ],
    analysis: [
      'Emotional openness feels effortless without social posturing',
      'Individuality feels celebrated rather than judged',
      'Connection is deliberate, chosen, and voluntary',
      'Togetherness feels authentic because everyone elected to show up'
    ],
    takeaway: 'Belonging feels deepest where nothing has to be performed.',
    badge: 'Chosen Belonging'
  },
  {
    pageNumber: 9,
    section: '14 & 15 • THE OUTCOME & EMOTIONAL OWNERSHIP',
    title: 'BEFORE, THEY INHERITED IT. NOW, THEY SHAPE IT TOO.',
    subtitle: 'Festivals evolve from inherited participation into self-authored belonging.',
    quotes: [
      {
        speaker: 'Research Synthesis',
        text: 'The activities are varied (rooftops, midnight drives, chai stalls, quiet talks). The emotional outcomes are universal.'
      }
    ],
    analysis: [
      'Autonomy: Making decisions without having to ask',
      'Identity Exploration: Testing who they actually are',
      'Authenticity: Being completely unfiltered',
      'Emotional Freedom: Feeling without performance',
      'Chosen Belonging: Picked, not assigned',
      'Feeling Trusted: Parents recognizing their adulthood',
      'Ownership Over Celebration: Self-authored, not inherited'
    ],
    takeaway: 'For the first time in their lives, the celebration reflects who they actually are.',
    badge: 'Emotional Ownership'
  },
  {
    pageNumber: 10,
    section: '16–20 • BRAND CONNECTION & CAMPAIGN',
    title: 'WHERE CAMPA CSD LIVES: "ASSURED ME. RICHER WE."',
    subtitle: 'The category owns the moment. Campa owns the meaning.',
    leadQuote: {
      speaker: 'Billboard Campaign Headline',
      text: 'THIS FESTIVALS: UNLOCK THE VERSION WHICH MAKES YOU FEEL LIKE MORE YOU. — CAMPA'
    },
    quotes: [
      {
        speaker: 'Brand Architecture Alignment',
        text: 'Campa stands for Rooted Belonging. The research proves: Belonging no longer comes from fitting in. It comes from being able to belong as yourself.'
      }
    ],
    analysis: [
      'Cultural Territory: Festivals as identity-safe, self-authored spaces',
      'Role of Brand: Not an intrusive party sponsor, but a quiet, reassuring cultural witness',
      'Creative Expression: Rooftop Diwali night, friends mid-laugh, quiet confidence, authentic Indian youth',
      'Key Distinction: Coca-Cola sells synthetic youth swagger; Campa witnesses rooted self-authorship'
    ],
    takeaway: 'Position Campa as the beverage of rooted self-assurance at the shared festival table.',
    badge: 'Campaign Rationale'
  }
];

export interface RetailPosItem {
  id: string;
  title: string;
  clientBrand: string;
  category: string;
  visualSummary: string;
  structuralFeatures: string[];
  strategicPurpose: string;
  productsCarried: string[];
}

export const RETAIL_POS_PROJECTS: RetailPosItem[] = [
  {
    id: 'pos-toffeeman-wooden',
    title: 'Toffeeman Traditional Haveli Wooden FSDU',
    clientBrand: 'Toffeeman (Sweet Confections)',
    category: 'Heritage Retail Display (Free-Standing Display Unit)',
    visualSummary: 'Carved heritage arched timber shelving unit with balcony illustration: young boy leaning over rooftop railing passing toffee to girl with heart bubbles; father gifting sweets to mother below.',
    structuralFeatures: [
      'Intricate wooden fretwork / jali cutouts along balcony shelf lips',
      'Die-cut arched crest featuring Toffeeman Victorian gentleman logo and red sun',
      'Built-in central monitor / POS acrylic sample dispenser window',
      'Golden brass accent plaques: "A little love. A little indulgence."'
    ],
    strategicPurpose: 'Transforms a mundane supermarket confectionery aisle into a nostalgic Indian neighborhood balcony story that stops foot traffic.',
    productsCarried: ['Chuckles', 'Toffeeman Toffee', 'Rose Delights']
  },
  {
    id: 'pos-lotus-stepped',
    title: 'Lotus Multi-Tier Sweet Tooth Balcony Floor Stand',
    clientBrand: 'Lotus Chocolate & Confections',
    category: 'High-Capacity Supermarket Island Display',
    visualSummary: 'Stepped color-coded 4-tier gravity-feed shelf with full-height 3D side panels showing generational romance and sibling chases across residential balconies.',
    structuralFeatures: [
      'Top arch header: "SOMETHING FOR every sweet tooth"',
      'Dual full-length side wings with multi-story apartment illustrations (youth in Nirvana tee, sister waving, grandfather smiling, kids racing with baskets)',
      'Front shelf-lip product strips: Lotus High 5, Chuckles, Eclairs',
      'Heavyweight corrugated fiberboard core with high-gloss laminated exterior'
    ],
    strategicPurpose: 'Maximizes vertical stock density while appealing to 3 generations simultaneously: children, teens, and nostalgic parents.',
    productsCarried: ['Lotus High 5', 'Lotus Chuckles', 'Lotus Eclairs', 'Centerfruit']
  },
  {
    id: 'pos-shared-table',
    title: '"Sweetness that Travels Around the Table" Family Feast Merchandiser',
    clientBrand: 'Lotus • Toffeeman • Ravalgaon Consolidated Portfolio',
    category: 'Interactive Festival Dining-Table Experience Display',
    visualSummary: 'Vibrant dining scene key-visual and matching POS island: multigenerational family sharing dinner while secretly passing sweets under the table and behind backs.',
    structuralFeatures: [
      'Central key art: grandmother smiling, uncle winking, mother offering laddoos, boy clutching Ravalgaon Pops',
      'Integrated table-mat branding: "Shared • Saved • Passed on • Loved"',
      'Co-branded header highlighting 3 iconic heritage candy houses under one unified sweet moment',
      'Side shelves dedicated to impulse pick-up sizes for modern retail checkout counters'
    ],
    strategicPurpose: 'Establishes toffees and candies not as solitary snacks, but as the universal dessert ritual that bonds Indian family meals.',
    productsCarried: ['Lotus High 5', 'Toffeeman Coffee Break', 'Ravalgaon Pops', 'Eclairs']
  },
  {
    id: 'pos-modern-retail-3panel',
    title: 'Modern Trade Endcap Hero Display ("For Every Sweet Tooth")',
    clientBrand: 'Lotus × Toffeeman × Ravalgaon Modern Retail',
    category: 'Modern Trade (Reliance Retail / D-Mart) Supermarket Endcap',
    visualSummary: 'Full-height 3-panel curved wing display placed at supermarket hypermarket grocery checkout aisle, displaying multi-brand hanging pouch clips and shelf trays.',
    structuralFeatures: [
      'Tri-brand co-branded base podium: Lotus (Yellow) | Toffeeman (Crimson) | Ravalgaon (Green/Red)',
      'Full-depth gravity-fed shelf trays organized by product price tiers (₹1, ₹5, ₹10)',
      'Dual side wings showing the iconic brother-sister high-five and father-daughter moments',
      'Top curved arched header with 3D embossed logo lettering and LED spotlight mounting'
    ],
    strategicPurpose: 'Engineered specifically for hypermarket FMCG retail environments to claim prime checkout line-of-sight and cross-brand bundle sales.',
    productsCarried: ['Lotus Chuckles / High 5', 'Toffeeman Coconut / Rose / Coffee', 'Ravalgaon Lollipops']
  }
];
