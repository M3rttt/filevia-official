import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { SiteBackground } from "@/components/site/background";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Contact | Filevia",
  description: "Contact the Filevia team."
};

export default function ContactPage() {
  return (
    <main className="page-bottom-safe relative overflow-hidden">
      <SiteBackground />
      <Header />
      <PageHero eyebrow="Contact" title="Talk to the Filevia team." description="A direct, trustworthy contact route completes the product experience." />
      <section className="site-shell pb-20">
        <div className="premium-card max-w-4xl p-8">
          <p className="text-sm leading-8 text-muted">For partnerships, support, or launch questions, use your preferred contact destination below.</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="mailto:hello@filevia.app" className="primary-button">
              hello@filevia.app
            </Link>
            <Link href="/pricing" className="secondary-button">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
