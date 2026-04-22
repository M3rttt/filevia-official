import type { Metadata } from "next";

import { AndroidAppSection } from "@/components/sections/android-app-section";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { PricingPreviewSection } from "@/components/sections/pricing-preview-section";
import { SiteBackground } from "@/components/site/background";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Pricing | Filevia",
  description: "Choose the Filevia plan that fits your PDF workflow, with a polished premium presentation and clear CTA."
};

export default function PricingPage() {
  return (
    <main className="page-bottom-safe relative overflow-hidden">
      <SiteBackground />
      <Header />
      <PageHero
        eyebrow="Pricing"
        title="Simple pricing for a premium PDF product that values clarity over clutter."
        description="Start with the free experience or move up to Pro for a more flexible, faster workflow."
        actions={[
          { href: "/tools", label: "Start Free" },
          { href: "/", label: "Learn More", variant: "secondary" }
        ]}
      />
      <PricingPreviewSection />
      <AndroidAppSection />
      <Footer />
    </main>
  );
}
