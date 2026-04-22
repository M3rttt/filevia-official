import { ToolCard } from "@/components/site/tool-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { toolDefinitions } from "@/lib/site-data";

export function ToolHighlightsSection() {
  return (
    <section className="site-shell py-16 sm:py-20">
      <SectionHeading
        eyebrow="Tool grid"
        title="Every core PDF workflow, designed to feel like part of one premium platform."
        description="Merge, split, compress, and convert with cleaner presentation, stronger hierarchy, and premium hover behavior that feels modern instead of template-driven."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {toolDefinitions.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </section>
  );
}
