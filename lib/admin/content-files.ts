export const contentFiles = [
  {
    key: "site-settings",
    label: "Site Settings",
    path: "content/site-settings.json",
    description: "Brand name, nav links, social links, and logos.",
  },
  {
    key: "home",
    label: "Home Sections",
    path: "content/home.json",
    description:
      "Hero, overview, target market, brand identity, strategy, and summary content.",
  },
  {
    key: "personas",
    label: "Personas",
    path: "content/personas.json",
    description: "Persona cards, narratives, and profile image paths.",
  },
  {
    key: "content-calendar",
    label: "Content Calendar",
    path: "content/content-calendar.json",
    description: "One month content calendar entries.",
  },
  {
    key: "social-posts",
    label: "Sample Social Posts",
    path: "content/social-posts.json",
    description: "Post titles, captions, hashtags, CTAs, and visuals.",
  },
  {
    key: "youtube",
    label: "YouTube Strategy",
    path: "content/youtube.json",
    description: "YouTube strategy copy and storyboard visual paths.",
  },
  {
    key: "paid-campaign",
    label: "Paid Campaign",
    path: "content/paid-campaign.json",
    description: "Campaign copy, budget, metrics, and ad mockups.",
  },
  {
    key: "influencer-campaign",
    label: "Influencer Campaign",
    path: "content/influencer-campaign.json",
    description: "Influencer profile, outreach, mockups, and tactics.",
  },
  {
    key: "analytics",
    label: "Analytics",
    path: "content/analytics.json",
    description: "KPI cards, chart data, and optimization notes.",
  },
] as const;

export type ContentFile = (typeof contentFiles)[number];

