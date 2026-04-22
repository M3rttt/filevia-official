const trustStats = [
  { label: "10,000+", copy: "files processed" },
  { label: "Fast", copy: "private workflows" },
  { label: "Zero", copy: "sketchy ads" },
  { label: "Built", copy: "mobile-first" }
];

export function TrustSection() {
  return (
    <section className="site-shell pb-8 pt-2 sm:pb-10">
      <div className="premium-card overflow-hidden p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-lg font-semibold text-white">⭐⭐⭐⭐⭐ Loved by modern users</p>
            <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
              Filevia is designed for people who want PDF tools to feel calm, fast, trustworthy, and actually pleasant to use on mobile.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-4">
            {trustStats.map((stat) => (
              <div key={stat.label} className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-5 text-center">
                <p className="text-2xl font-semibold text-white">{stat.label}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted">{stat.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
