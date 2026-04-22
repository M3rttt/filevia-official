import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";

export function AndroidAppSection() {
  return (
    <section id="android-app" className="site-shell py-16 sm:py-20">
      <div className="grid gap-6 rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(110,231,200,0.15),rgba(9,19,29,0.96)_42%,rgba(143,188,255,0.18))] p-8 shadow-glow sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:p-12">
        <div className="space-y-5">
          <span className="eyebrow">Available on Android</span>
          <h2 className="max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            The Filevia story becomes even stronger when the workflow lives in your pocket.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            The web platform introduces the product clearly. The Android app carries the brand promise forward with a more direct, privacy-first workflow.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/tools" className="primary-button">
              Download App
              <Download className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/tools" className="secondary-button">
              Explore Tools
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="rounded-[32px] border border-white/10 bg-[#09131D] p-5 sm:p-6">
          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-6">
            <p className="text-sm font-semibold text-white">Android product traits</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.18em] text-accent">Private</p>
                <p className="mt-2 text-sm leading-6 text-muted">Sensitive documents feel safer when the experience does not revolve around upload-first messaging.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                <p className="text-xs uppercase tracking-[0.18em] text-accentWarm">Mobile</p>
                <p className="mt-2 text-sm leading-6 text-muted">The layout, pacing, and tone stay aligned with phone-first usage instead of browser-heavy workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
