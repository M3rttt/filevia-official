export const appDownloadHref = "#android-app";

export type ToolIconName = "merge" | "split" | "compress" | "pdfToWord" | "wordToPdf" | "imageToPdf";
export type AdvantageIconName = "privacy" | "offline" | "speed" | "android";
export type ComparisonIconName = "shield" | "wifi" | "spark";

export type ToolDefinition = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  actionLabel: string;
  iconName: ToolIconName;
  accepts: string;
  output: string;
  accent: string;
  stats: string[];
};

export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "Pricing", href: "/pricing" }
];

export const toolDefinitions: ToolDefinition[] = [
  {
    slug: "merge",
    title: "Merge PDF",
    shortTitle: "Merge",
    description: "Combine multiple PDFs into one polished file without the usual upload-and-wait workflow.",
    actionLabel: "Merge files",
    iconName: "merge",
    accepts: ".pdf",
    output: "Single merged PDF",
    accent: "from-[#6EE7C8]/18 via-[#112437] to-[#6EE7C8]/6",
    stats: ["Keep page order", "Combine reports", "Ready to export"]
  },
  {
    slug: "split",
    title: "Split PDF",
    shortTitle: "Split",
    description: "Extract pages into a lighter file for sharing, archiving, or quick follow-up tasks.",
    actionLabel: "Split document",
    iconName: "split",
    accepts: ".pdf",
    output: "Selected page PDF",
    accent: "from-[#FFB86B]/16 via-[#112437] to-[#FFB86B]/6",
    stats: ["Pick page ranges", "Trim big files", "Fast cleanup"]
  },
  {
    slug: "compress",
    title: "Compress PDF",
    shortTitle: "Compress",
    description: "Reduce file size for messaging, email, and mobile sharing without turning the workflow into a cloud chore.",
    actionLabel: "Compress file",
    iconName: "compress",
    accepts: ".pdf",
    output: "Compressed PDF",
    accent: "from-[#8FBCFF]/16 via-[#112437] to-[#6EE7C8]/6",
    stats: ["Smaller exports", "Share faster", "No server queue"]
  },
  {
    slug: "pdf-to-word",
    title: "PDF to Word",
    shortTitle: "PDF to Word",
    description: "Convert PDFs into editable Word drafts with a workflow that feels product-ready and mobile aware.",
    actionLabel: "Convert to Word",
    iconName: "pdfToWord",
    accepts: ".pdf",
    output: ".docx file",
    accent: "from-[#8FBCFF]/18 via-[#0E1F31] to-[#FFB86B]/6",
    stats: ["Editable output", "Great for forms", "Quick handoff"]
  },
  {
    slug: "word-to-pdf",
    title: "Word to PDF",
    shortTitle: "Word to PDF",
    description: "Turn Word files into clean PDFs before sending contracts, resumes, or invoices.",
    actionLabel: "Convert to PDF",
    iconName: "wordToPdf",
    accepts: ".doc,.docx",
    output: "PDF file",
    accent: "from-[#6EE7C8]/14 via-[#0E1F31] to-[#8FBCFF]/8",
    stats: ["Clean export", "Share-ready", "Reliable formatting"]
  },
  {
    slug: "image-to-pdf",
    title: "Image to PDF",
    shortTitle: "Image to PDF",
    description: "Bundle scans, screenshots, and photos into a single PDF that feels ready for work.",
    actionLabel: "Create PDF",
    iconName: "imageToPdf",
    accepts: ".png,.jpg,.jpeg,.webp",
    output: "Image-based PDF",
    accent: "from-[#FFB86B]/14 via-[#0E1F31] to-[#8FBCFF]/8",
    stats: ["Perfect for receipts", "Merge images", "Simple export"]
  }
];

export const toolMap = Object.fromEntries(toolDefinitions.map((tool) => [tool.slug, tool])) as Record<string, ToolDefinition>;

export const homeAdvantages = [
  {
    iconName: "privacy" as const,
    title: "Privacy-first by design",
    description: "Filevia is positioned around sensitive documents staying in your control instead of being routed through a generic upload funnel."
  },
  {
    iconName: "offline" as const,
    title: "Offline-friendly workflow",
    description: "The product story is Android-first and mobile-first, designed for real moments when signal is unreliable and time is tight."
  },
  {
    iconName: "speed" as const,
    title: "Fast where it matters",
    description: "The experience is shaped to feel direct, quick, and free of account friction or heavy cloud dependencies."
  },
  {
    iconName: "android" as const,
    title: "Made for Android users",
    description: "Filevia feels like a product for the phone in your hand, not a shrunk desktop PDF tool pretending to be mobile."
  }
];

export const comparisonCards = [
  {
    iconName: "shield" as const,
    title: "No upload-first feel",
    description: "Unlike Adobe-style browser flows and generic PDF sites, Filevia leads with control, speed, and on-device trust."
  },
  {
    iconName: "wifi" as const,
    title: "Built for imperfect connections",
    description: "The messaging stays grounded in mobile reality instead of assuming a desktop browser and stable cloud workflow."
  },
  {
    iconName: "spark" as const,
    title: "Premium, not bloated",
    description: "The brand feels polished and modern without leaning on enterprise complexity or noisy gimmicks."
  }
];

export const comparisonRows = [
  {
    label: "Workflow feel",
    filevia: "Android-first and privacy-first",
    adobe: "Cloud ecosystem and account-driven",
    generic: "Utility website with upload dependency"
  },
  {
    label: "File handling",
    filevia: "No unnecessary cloud-upload feel",
    adobe: "Often centered on cloud workflows",
    generic: "Upload, process, download"
  },
  {
    label: "Speed perception",
    filevia: "Fast and direct",
    adobe: "Heavier full-suite experience",
    generic: "Varies with browser and queue"
  },
  {
    label: "Mobile fit",
    filevia: "Designed around mobile usage",
    adobe: "Desktop-first heritage",
    generic: "Web-first, not phone-first"
  }
];

export const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    cadence: "start now",
    description: "A polished starting point for quick PDF fixes and light everyday use.",
    features: ["3 operations per day", "Basic processing speed", "Core PDF workflows", "Android app CTA"],
    cta: "Start Free",
    href: "/tools",
    featured: false
  },
  {
    name: "Pro",
    price: "$12",
    cadence: "one-time upgrade",
    description: "A premium option for people who want Filevia as their regular PDF workspace.",
    features: ["Unlimited operations", "Faster processing experience", "Full tool access", "Best for recurring document work"],
    cta: "Get the App",
    href: "/pricing#plans",
    featured: true
  }
];
