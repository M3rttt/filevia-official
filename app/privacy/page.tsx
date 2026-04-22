import type { Metadata } from "next";

import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { SiteBackground } from "@/components/site/background";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy | Filevia",
  description: "Read Filevia's privacy policy."
};

export default function PrivacyPage() {
  return (
    <main className="relative overflow-hidden">
      <SiteBackground />
      <Header />
      <PageHero eyebrow="Privacy Policy" title="Privacy that matches the product promise." description="Filevia is positioned around trust, control, and respectful handling of user workflows." />
      <section className="site-shell pb-20">
        <div className="premium-card max-w-4xl p-8">
          <p className="text-sm leading-8 text-muted">
            Filevia is designed to prioritize privacy-conscious workflows. This placeholder policy page is intentionally simple, professional, and ready to be replaced with your final legal copy before launch.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
