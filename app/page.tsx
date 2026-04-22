import { AndroidAppSection } from "@/components/sections/android-app-section";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PositioningSection } from "@/components/sections/positioning-section";
import { PricingPreviewSection } from "@/components/sections/pricing-preview-section";
import { TrustSection } from "@/components/sections/trust-section";
import { ToolHighlightsSection } from "@/components/sections/tool-highlights-section";
import { WhyFileviaSection } from "@/components/sections/why-filevia-section";
import { SiteBackground } from "@/components/site/background";

export default function HomePage() {
  return (
    <main className="page-bottom-safe relative overflow-hidden">
      <SiteBackground />
      <Header />
      <HeroSection />
      <TrustSection />
      <PositioningSection />
      <WhyFileviaSection />
      <ToolHighlightsSection />
      <ComparisonSection />
      <AndroidAppSection />
      <PricingPreviewSection />
      <Footer />
    </main>
  );
}
