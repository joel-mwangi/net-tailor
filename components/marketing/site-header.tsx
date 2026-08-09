import Link from "next/link";

const links = [
  ["Home", "/"],
  ["Curtains", "/shop?category=curtains"],
  ["Sheers", "/shop?category=sheers"],
  ["Blackout", "/shop?category=blackout"],
  ["Projects", "/projects"],
  ["Gallery", "/gallery"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-[#4d463f]/15 bg-[#f8f6f2]/90 backdrop-blur">
      <div className="mx-auto flex min-h-[86px] max-w-7xl items-center justify-between gap-6 px-6 lg:px-10">
        <Link href="/" className="shrink-0 text-[#28231f]">
          <span className="block font-serif text-xl tracking-[0.12em] sm:text-2xl">CURTAIN HOUSE</span>
          <span className="mt-1 block text-[9px] font-medium tracking-[0.28em] text-[#81786e]">TAILORED TO PERFECTION</span>
        </Link>

        <nav className="hidden items-center gap-5 text-[12px] font-medium xl:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link key={label} href={href} className="text-[#5f564d] transition hover:text-[#28231f]">
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="/quote"
          className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-[#6b422c] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#573622] sm:px-5"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="4.5" width="18" height="16" rx="2" />
            <path d="M16 2.5v4M8 2.5v4M3 9h18" />
          </svg>
          <span className="hidden sm:inline">Get a Free Quote</span>
          <span className="sm:hidden">Quote</span>
        </Link>
      </div>
    </header>
  );
}
