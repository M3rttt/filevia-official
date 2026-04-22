import { homeAdvantages } from "@/lib/site-data";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyFileviaSection() {
  return (
    <section className="site-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Why Filevia"
        title="Everything about the experience points to a faster, calmer PDF workflow."
        description="Instead of mimicking a desktop suite, Filevia focuses on the core reasons people need PDF tools on mobile: speed, clarity, privacy, and confidence."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {homeAdvantages.map((item) => (
          <article key={item.title} className="glass-panel p-6">
            <div className="inline-flex rounded-2xl bg-white/5 p-3 text-accent">
              <Icon name={item.iconName} className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
