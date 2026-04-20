export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  platform: string;
  url: string;
};

export type MetricStat = {
  label: string;
  value: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
};

export type SiteSettings = {
  metadata: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    tagline: string;
    projectLabel: string;
    footerNote: string;
  };
  navigation: NavItem[];
  socialLinks: SocialLink[];
  logos: {
    primary: string;
    mark: string;
  };
};

export type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCtaLabel: string;
    primaryCtaHref: string;
    secondaryCtaLabel: string;
    secondaryCtaHref: string;
    stats: MetricStat[];
    visual: ImageAsset & { caption: string };
  };
  brandOverview: {
    title: string;
    intro: string;
    whatItIs: string;
    whatItOffers: string;
    whyItExists: string;
    whoItIsFor: string;
    differentiator: string;
    mission: string;
    positioning: string;
    appPreviewImage: string;
    appPreviewAlt: string;
  };
  targetMarket: {
    title: string;
    intro: string;
    demographics: string[];
    psychographics: string[];
    behavioralInsights: string[];
    onlineHabitText: string;
  };
  brandIdentity: {
    title: string;
    intro: string;
    personality: string[];
    toneOfVoice: string;
    valueProposition: string;
    colors: Array<{
      name: string;
      hex: string;
    }>;
    typography: {
      heading: string;
      body: string;
      accent: string;
    };
    imageryDirection: string;
    logoDirection: string;
  };
  platformStrategy: {
    title: string;
    intro: string;
    platforms: Array<{
      name: string;
      role: string;
      why: string;
      focusAreas: string[];
    }>;
  };
  contentStrategy: {
    title: string;
    intro: string;
    contentPillars: string[];
    postFormats: string[];
    postingFrequency: string;
    engagementMethods: string[];
    calendarIntro: string;
  };
  summary: {
    title: string;
    intro: string;
    successPoints: string[];
    groupMembers: string[];
  };
};

export type PersonasContent = {
  title: string;
  intro: string;
  items: Array<{
    name: string;
    age: string;
    lifestyle: string;
    painPoints: string[];
    goals: string[];
    platformsUsed: string[];
    purchaseBehavior: string;
    narrative: string;
    image: string;
    imageAlt: string;
  }>;
};

export type ContentCalendar = {
  month: string;
  entries: Array<{
    date: string;
    platform: string;
    theme: string;
    format: string;
    purpose: string;
    cta: string;
  }>;
};

export type SocialPostsContent = {
  title: string;
  intro: string;
  posts: Array<{
    title: string;
    objective: string;
    caption: string;
    hashtags: string[];
    cta: string;
    visual: string;
    visualAlt: string;
  }>;
};

export type YouTubeContent = {
  title: string;
  intro: string;
  whyItFits: string;
  concepts: Array<{
    title: string;
    purpose: string;
    targetViewer: string;
    keyMessage: string;
    cta: string;
    storyboardVisual: string;
    storyboardAlt: string;
  }>;
};

export type PaidCampaignContent = {
  title: string;
  intro: string;
  campaign: {
    name: string;
    objective: string;
    bigIdea: string;
    emotionalHook: string;
    tagline: string;
    audienceSummary: string;
    targetingPlan: string[];
    placementPlan: string[];
    mockBudget: Array<{
      item: string;
      amount: string;
    }>;
    expectedOutcomes: string[];
    adMockups: Array<{
      headline: string;
      adCopy: string;
      cta: string;
      visual: string;
      visualAlt: string;
    }>;
    metrics: Array<{
      label: string;
      value: string;
      detail: string;
    }>;
  };
};

export type InfluencerCampaignContent = {
  title: string;
  intro: string;
  campaign: {
    name: string;
    handle: string;
    followerCount: string;
    primaryPlatform: string;
    audienceDemographics: string;
    contentStyle: string;
    whyFit: string;
    outreachEmail: string;
    concept: string;
    deliverables: string[];
    mockups: Array<{
      caption: string;
      hashtags: string[];
      cta: string;
      visual: string;
      visualAlt: string;
    }>;
    organicGrowthTactics: string[];
  };
};

export type AnalyticsContent = {
  title: string;
  intro: string;
  kpis: Array<{
    label: string;
    value: string;
    trend: string;
  }>;
  channelPerformance: Array<{
    channel: string;
    reach: number;
    engagementRate: number;
    ctr: number;
    conversions: number;
  }>;
  weeklyTrend: Array<{
    week: string;
    reach: number;
    engagement: number;
    conversions: number;
  }>;
  recommendations: string[];
};

