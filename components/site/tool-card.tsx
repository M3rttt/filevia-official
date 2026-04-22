import Link from "next/link";

import { Icon } from "@/components/ui/icon";
import type { ToolDefinition } from "@/lib/site-data";

type ToolCardProps = {
  tool: ToolDefinition;
};

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <article className="group premium-card relative overflow-hidden p-6 transition duration-300 hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-[0_36px_110px_rgba(6,14,25,0.45)]">
      <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(110,231,200,0.7),transparent)] opacity-0 transition group-hover:opacity-100" />
      <div className={`inline-flex rounded-2xl bg-gradient-to-br ${tool.accent} p-3 text-white shadow-[0_18px_40px_rgba(4,10,18,0.32)] transition duration-300 group-hover:scale-105`}>
        <Icon name={tool.iconName} className="h-5 w-5" />
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-white">{tool.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{tool.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tool.stats.map((stat) => (
          <span key={stat} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white">
            {stat}
          </span>
        ))}
      </div>
      <Link href={`/tools/${tool.slug}`} className="secondary-button mt-6">
        Explore Tool
      </Link>
    </article>
  );
}
