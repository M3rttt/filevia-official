import Link from "next/link";

const footerLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Tools", href: "/tools" },
  { label: "Android App", href: "/pricing#plans" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Contact", href: "/contact" }
];

export function Footer() {
  return (
    <footer className="site-shell pb-10 pt-8">
      <div className="premium-card px-6 py-8 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-sm font-black text-slate-950">F</span>
              <div>
                <p className="font-semibold text-white">Filevia</p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted">Private PDF power</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-muted">
              Premium PDF tools for Android-first users who want speed, trust, and a much better alternative to ugly utility sites.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {footerLinks.map((item) => (
              <Link key={item.label} href={item.href} className="text-sm text-muted transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
