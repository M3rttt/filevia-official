import { comparisonCards, comparisonRows } from "@/lib/site-data";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";

export function ComparisonSection() {
  return (
    <section className="site-shell py-16 sm:py-20">
      <div className="grid gap-4 md:grid-cols-3">
        {comparisonCards.map((item) => (
          <article key={item.title} className="glass-panel p-6">
            <div className="inline-flex rounded-2xl bg-white/5 p-3 text-accentWarm">
              <Icon name={item.iconName} className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow="Differentiation"
          title="Filevia is positioned to feel more trustworthy and mobile-native than Adobe or generic web PDF tools."
          description="The comparison is about product fit and workflow confidence, not feature noise."
        />
        <div className="glass-panel overflow-hidden">
          <div className="grid grid-cols-[1fr_0.9fr_0.9fr_0.9fr] border-b border-white/10 bg-white/[0.03] px-6 py-5 text-sm font-semibold text-white">
            <span>Compare</span>
            <span>Filevia</span>
            <span>Adobe</span>
            <span>Generic web tools</span>
          </div>
          {comparisonRows.map((row, index) => (
            <div
              key={row.label}
              className={`grid grid-cols-[1fr_0.9fr_0.9fr_0.9fr] px-6 py-5 ${
                index !== comparisonRows.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <div className="pr-4 text-sm font-medium text-white">{row.label}</div>
              <div className="pr-4 text-sm text-muted">{row.filevia}</div>
              <div className="pr-4 text-sm text-muted">{row.adobe}</div>
              <div className="text-sm text-muted">{row.generic}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
