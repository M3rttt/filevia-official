import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Layers3, Smartphone, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="site-shell grid gap-16 pb-20 pt-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:pb-28 lg:pt-20">
      <div className="space-y-8">
        <span className="eyebrow">Modern private PDF tools</span>
        <div className="space-y-6">
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] text-white sm:text-6xl lg:text-7xl">
            The fastest <span className="gradient-text">private PDF tools</span> for Android.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            Merge, split, compress and convert PDFs in seconds — secure, mobile-first, and built for real users.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link href="/pricing#plans" className="primary-button">
            Download App
          </Link>
          <Link href="/tools" className="secondary-button">
            Try Web Tools
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-4">
            <p className="text-sm font-semibold text-white">Private by default</p>
            <p className="mt-2 text-sm leading-6 text-muted">A cleaner alternative to cluttered upload-first PDF sites.</p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-4">
            <p className="text-sm font-semibold text-white">Built for Android</p>
            <p className="mt-2 text-sm leading-6 text-muted">Designed for mobile-first users who want speed and clarity.</p>
          </div>
          <div className="rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-4">
            <p className="text-sm font-semibold text-white">Feels like a product</p>
            <p className="mt-2 text-sm leading-6 text-muted">Premium layout, strong hierarchy, and trustworthy interaction design.</p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[560px]">
        <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-12 bottom-12 h-36 w-36 rounded-full bg-accentWarm/20 blur-3xl" />
        <div className="relative">
          <div className="absolute -left-6 top-20 hidden rounded-[28px] border border-white/10 bg-[#0A1622]/90 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl lg:block">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-accent/10 p-3 text-accent">
                <Layers3 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Merge PDF</p>
                <p className="text-xs text-muted">Preview ready in seconds</p>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 bottom-16 hidden rounded-[28px] border border-white/10 bg-[#0A1622]/90 p-4 shadow-[0_28px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl lg:block">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-accentWarm/10 p-3 text-accentWarm">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Secure workflow</p>
                <p className="text-xs text-muted">No ugly utility-site feel</p>
              </div>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[360px] rounded-[42px] border border-white/10 bg-[#030B13] p-3 shadow-[0_40px_140px_rgba(0,0,0,0.45)]">
            <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,_rgba(17,36,55,0.98),_rgba(8,16,27,0.98))] p-5">
              <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-white/10" />
              <div className="premium-card p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-accent">Filevia</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Tool dashboard</h2>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-2 text-accent">
                    <Sparkles className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white">Merge PDF</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white">Compress</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white">Split PDF</div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white">PDF to Word</div>
                </div>
              </div>

              <div className="mt-4 rounded-[28px] border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white">Merge preview</p>
                    <p className="mt-1 text-sm text-muted">2 files selected</p>
                  </div>
                  <div className="rounded-full bg-accent/15 p-2 text-accent">
                    <Smartphone className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#091420] px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-white">project-brief.pdf</p>
                      <p className="text-xs text-muted">5 pages</p>
                    </div>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">Queued</span>
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#091420] px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-white">design-notes.pdf</p>
                      <p className="text-xs text-muted">8 pages</p>
                    </div>
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white">Ready</span>
                  </div>
                </div>
                <button type="button" className="primary-button mt-4 w-full">
                  Merge now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
