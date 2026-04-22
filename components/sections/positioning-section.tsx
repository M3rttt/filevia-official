import { SectionHeading } from "@/components/ui/section-heading";

export function PositioningSection() {
  return (
    <section className="site-shell py-16 sm:py-20">
      <div className="glass-panel p-8 sm:p-10 lg:p-12">
        <SectionHeading
          eyebrow="Product positioning"
          title="Filevia is not another generic PDF site with a dark theme pasted on top."
          description="It is framed as a premium mobile-first PDF product for Android users who want privacy, speed, and clean execution without the noise of a heavy cloud suite."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <article className="rounded-[24px] border border-white/10 bg-[#09131E] p-6">
            <h3 className="text-xl font-semibold text-white">Privacy-first</h3>
            <p className="mt-3 text-sm leading-7 text-muted">The site language stays anchored in control and trust instead of generic upload convenience.</p>
          </article>
          <article className="rounded-[24px] border border-white/10 bg-[#09131E] p-6">
            <h3 className="text-xl font-semibold text-white">Android-focused</h3>
            <p className="mt-3 text-sm leading-7 text-muted">The product feels native to mobile workflows, with clear signaling that the real power fits the device in your hand.</p>
          </article>
          <article className="rounded-[24px] border border-white/10 bg-[#09131E] p-6">
            <h3 className="text-xl font-semibold text-white">Premium SaaS polish</h3>
            <p className="mt-3 text-sm leading-7 text-muted">Dark gradients, rounded surfaces, and restrained motion give the site a trustworthy high-end finish.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
