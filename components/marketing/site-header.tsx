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

function CurtainMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 42" className="h-10 w-10 text-[#a97714]">
      <path d="M9 6h24v5c-3 0-5 2-5 5v18c-2-1-4-2-7-2s-5 1-7 2V16c0-3-2-5-5-5V6Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 9v20M18 9v17M24 9v17M29 9v20" stroke="currentColor" strokeWidth="1" opacity=".8" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="relative z-30 border-b border-[#2d2823]/10 bg-[#f7f4ef]/95 backdrop-blur">
      <div className="mx-auto flex min-h-[62px] max-w-[1440px] items-center gap-4 px-4 sm:px-5 lg:px-7">
        <Link href="/" className="flex min-w-fit items-center gap-2.5 text-[#28231f]">
          <CurtainMark />
          <span>
            <span className="block text-[16px] font-semibold tracking-[0.02em] sm:text-[18px]">CURTAIN HOUSE</span>
            <span className="mt-0.5 block text-[8px] tracking-[0.18em] text-[#3e3934]">TAILORED TO PERFECTION</span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-6 text-[11px] font-medium xl:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <Link
              key={label}
              href={href}
              className={`relative whitespace-nowrap py-5 transition hover:text-[#a97714] ${label === "Home" ? "text-[#a97714]" : "text-[#28231f]"}`}
            >
              {label}
              {label === "Curtains" ? <span className="ml-1 text-[9px]">⌄</span> : null}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3 xl:ml-4">
          <button type="button" aria-label="Search" className="hidden h-9 w-9 items-center justify-center rounded-full text-[#28231f] transition hover:bg-black/5 sm:flex">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
              <circle cx="11" cy="11" r="6.5" />
              <path d="m16 16 4.5 4.5" />
            </svg>
          </button>

          <details className="relative xl:hidden">
            <summary className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-full border border-[#28231f]/15 text-[#28231f]" aria-label="Open menu">
              <span className="text-lg leading-none">☰</span>
            </summary>
            <nav className="absolute right-0 top-11 w-56 rounded-md border border-[#ded6ca] bg-[#fffdf9] p-2 shadow-xl" aria-label="Mobile navigation">
              {links.map(([label, href]) => (
                <Link key={label} href={href} className="block rounded px-3 py-2.5 text-xs text-[#28231f] hover:bg-[#f3ede4]">
                  {label}
                </Link>
              ))}
            </nav>
          </details>

          <Link href="/quote" className="inline-flex shrink-0 items-center gap-2 rounded-md bg-[#ad7b19] px-3.5 py-2.5 text-[11px] font-semibold text-white shadow-sm transition hover:bg-[#936613] sm:px-4">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="4.5" width="18" height="16" rx="2" />
              <path d="M16 2.5v4M8 2.5v4M3 9h18" />
            </svg>
            <span className="hidden sm:inline">Get a Free Quote</span>
            <span className="sm:hidden">Quote</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
