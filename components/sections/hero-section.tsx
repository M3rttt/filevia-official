import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="site-shell grid gap-14 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-28 lg:pt-20">
      <div className="space-y-8">
        <span className="eyebrow">Mobile-first PDF product</span>
        <div className="space-y-6">
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Private PDF workflows that feel built for your phone, not the cloud.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Filevia brings a premium, Android-first approach to merge, split, compress, and convert PDF work without the generic upload-first vibe of typical web tools.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/tools" className="primary-button">
            Start Free
          </Link>
          <Link href="/pricing" className="secondary-button">
            See Pricing
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="glass-panel p-5 sm:p-6">
        <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(17,36,55,0.96),rgba(8,16,27,0.96))] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-accent">Filevia workspace</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Fast, calm, and private</h2>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-accent">
              Android-first
            </div>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">No upload ritual</p>
              <p className="mt-2 text-sm leading-6 text-muted">The brand experience is built around trust and directness, not browser friction.</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">Premium tool flows</p>
              <p className="mt-2 text-sm leading-6 text-muted">Every page feels like a product, not a list of utilities stitched together.</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">Mobile-aware design</p>
              <p className="mt-2 text-sm leading-6 text-muted">Rounded cards, strong contrast, and touch-friendly spacing keep the experience polished.</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">Lightweight product feel</p>
              <p className="mt-2 text-sm leading-6 text-muted">Enough interactivity to feel real, while staying stable for deployment and demos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
