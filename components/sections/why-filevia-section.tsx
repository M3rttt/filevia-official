import { homeAdvantages } from "@/lib/site-data";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyFileviaSection() {
  return (
    <section className="site-shell py-16 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
        <SectionHeading
          eyebrow="Why Filevia"
          title="A premium PDF experience built for people who are done with ugly, noisy tool sites."
          description="Filevia focuses on the things modern users actually care about: privacy, cleaner flows, and mobile speed that feels intentional."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {homeAdvantages.map((item) => (
            <article key={item.title} className="premium-card p-6">
              <div className="inline-flex rounded-2xl bg-white/5 p-3 text-accent">
                <Icon name={item.iconName} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
