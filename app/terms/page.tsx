import type { Metadata } from "next";

import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { SiteBackground } from "@/components/site/background";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Terms | Filevia",
  description: "Read Filevia's terms of service."
};

export default function TermsPage() {
  return (
    <main className="page-bottom-safe relative overflow-hidden">
      <SiteBackground />
      <Header />
      <PageHero eyebrow="Terms" title="Simple terms for a modern product." description="This page is structured and deployable, ready for your final legal wording." />
      <section className="site-shell pb-20">
        <div className="premium-card max-w-4xl p-8">
          <p className="text-sm leading-8 text-muted">
            These terms are a placeholder route included so the premium footer is complete and production-safe. Replace with finalized legal content when ready.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
