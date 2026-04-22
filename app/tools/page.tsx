import type { Metadata } from "next";

import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { ToolHighlightsSection } from "@/components/sections/tool-highlights-section";
import { SiteBackground } from "@/components/site/background";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Tools | Filevia",
  description: "Explore Filevia's premium PDF workflows including merge, split, compress, and conversion tools."
};

export default function ToolsPage() {
  return (
    <main className="page-bottom-safe relative overflow-hidden">
      <SiteBackground />
      <Header />
      <PageHero
        eyebrow="Product tools"
        title="A cleaner way to explore the PDF workflows Filevia is built around."
        description="Every tool is presented as part of a consistent product experience, with premium styling and stable frontend-only interactions."
        actions={[
          { href: "/pricing", label: "View Pricing", variant: "secondary" },
          { href: "/", label: "Back Home", variant: "secondary" }
        ]}
      />
      <ToolHighlightsSection />
      <Footer />
    </main>
  );
}
