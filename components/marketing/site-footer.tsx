import Link from "next/link";

const exploreLinks = [
  ["Curtains", "/shop?category=curtains"],
  ["Sheers", "/shop?category=sheers"],
  ["Blackout", "/shop?category=blackout"],
  ["Projects", "/projects"],
  ["Gallery", "/gallery"],
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-[#28231f] text-[#f4f0ea]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <Link href="/" className="inline-block">
            <span className="block font-serif text-2xl tracking-[0.1em]">CURTAIN HOUSE</span>
            <span className="mt-1 block text-[9px] tracking-[0.28em] text-[#bcb3a8]">TAILORED TO PERFECTION</span>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-6 text-[#bcb3a8]">
            Custom curtains designed, measured and professionally installed for beautiful homes and spaces.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[#8f867c]">Explore</p>
          <div className="mt-5 grid gap-3 text-sm text-[#d8d1c8]">
            {exploreLinks.map(([label, href]) => <Link key={label} href={href} className="hover:text-white">{label}</Link>)}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[#8f867c]">Contact</p>
          <div className="mt-5 grid gap-3 text-sm text-[#d8d1c8]">
            <Link href="/quote" className="hover:text-white">Get a Free Quote</Link>
            <Link href="/about" className="hover:text-white">About Curtain House</Link>
            <Link href="/contact" className="hover:text-white">Contact us</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-[#8f867c] lg:px-10">
          © {new Date().getFullYear()} Curtain House. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
