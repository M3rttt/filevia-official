import { ToolCard } from "@/components/site/tool-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { toolDefinitions } from "@/lib/site-data";

export function ToolHighlightsSection() {
  return (
    <section className="site-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Tool highlights"
        title="The core Filevia workflows are presented like product features, not disposable utilities."
        description="Each page is styled to feel real and stable so the overall platform reads as usable today, not like a waitlist or landing-only concept."
      />
      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {toolDefinitions.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  );
}
