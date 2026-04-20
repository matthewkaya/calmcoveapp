import analytics from "@/content/analytics.json";
import contentCalendar from "@/content/content-calendar.json";
import home from "@/content/home.json";
import influencerCampaign from "@/content/influencer-campaign.json";
import paidCampaign from "@/content/paid-campaign.json";
import personas from "@/content/personas.json";
import siteSettings from "@/content/site-settings.json";
import socialPosts from "@/content/social-posts.json";
import youtube from "@/content/youtube.json";
import type {
  AnalyticsContent,
  ContentCalendar,
  HomeContent,
  InfluencerCampaignContent,
  PaidCampaignContent,
  PersonasContent,
  SiteSettings,
  SocialPostsContent,
  YouTubeContent,
} from "@/lib/types";

export const siteContent = {
  siteSettings: siteSettings as SiteSettings,
  home: home as HomeContent,
  personas: personas as PersonasContent,
  calendar: contentCalendar as ContentCalendar,
  socialPosts: socialPosts as SocialPostsContent,
  youtube: youtube as YouTubeContent,
  paidCampaign: paidCampaign as PaidCampaignContent,
  influencerCampaign: influencerCampaign as InfluencerCampaignContent,
  analytics: analytics as AnalyticsContent,
};

