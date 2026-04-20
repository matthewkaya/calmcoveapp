import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AnalyticsSection } from "@/components/sections/AnalyticsSection";
import { BrandIdentitySection } from "@/components/sections/BrandIdentitySection";
import { ContentStrategySection } from "@/components/sections/ContentStrategySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InfluencerCampaignSection } from "@/components/sections/InfluencerCampaignSection";
import { OverviewSection } from "@/components/sections/OverviewSection";
import { PaidCampaignSection } from "@/components/sections/PaidCampaignSection";
import { PersonasSection } from "@/components/sections/PersonasSection";
import { PlatformStrategySection } from "@/components/sections/PlatformStrategySection";
import { SocialPostsSection } from "@/components/sections/SocialPostsSection";
import { SummarySection } from "@/components/sections/SummarySection";
import { TargetMarketSection } from "@/components/sections/TargetMarketSection";
import { YouTubeStrategySection } from "@/components/sections/YouTubeStrategySection";
import { siteContent } from "@/lib/content";

export default function Home() {
  const {
    siteSettings,
    home,
    personas,
    calendar,
    socialPosts,
    youtube,
    paidCampaign,
    influencerCampaign,
    analytics,
  } = siteContent;

  return (
    <main className="min-h-screen">
      <Navbar
        brand={siteSettings.brand}
        navigation={siteSettings.navigation}
        logo={siteSettings.logos.mark}
      />
      <HeroSection
        brand={siteSettings.brand}
        hero={home.hero}
        logo={siteSettings.logos.mark}
      />
      <OverviewSection overview={home.brandOverview} logo={siteSettings.logos.primary} />
      <TargetMarketSection targetMarket={home.targetMarket} />
      <PersonasSection personas={personas} />
      <BrandIdentitySection
        brandIdentity={home.brandIdentity}
        mark={siteSettings.logos.mark}
      />
      <PlatformStrategySection platformStrategy={home.platformStrategy} />
      <ContentStrategySection strategy={home.contentStrategy} calendar={calendar} />
      <SocialPostsSection socialPosts={socialPosts} />
      <YouTubeStrategySection youtube={youtube} />
      <PaidCampaignSection paidCampaign={paidCampaign} />
      <InfluencerCampaignSection influencerCampaign={influencerCampaign} />
      <AnalyticsSection analytics={analytics} />
      <SummarySection summary={home.summary} />
      <Footer siteSettings={siteSettings} />
    </main>
  );
}
