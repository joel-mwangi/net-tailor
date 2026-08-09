import Link from "next/link";

const quickLinks = [
  ["Home", "/"],
  ["Curtains", "/shop?category=curtains"],
  ["Sheers", "/shop?category=sheers"],
  ["Blackout", "/shop?category=blackout"],
  ["Projects", "/projects"],
  ["Gallery", "/gallery"],
  ["About Us", "/about"],
  ["FAQ", "/faq"],
  ["Contact Us", "/contact"],
] as const;

const services = [
  "Custom Curtains",
  "Sheers & Voiles",
  "Blackout Curtains",
  "Curtain Accessories",
  "Installation Service",
];

function CurtainMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 42" className="h-10 w-10 shrink-0 text-[#b88a2c]">
      <path d="M9 6h24v5c-3 0-5 2-5 5v18c-2-1-4-2-7-2s-5 1-7 2V16c0-3-2-5-5-5V6Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 9v20M18 9v17M24 9v17M29 9v20" stroke="currentColor" strokeWidth="1" opacity=".8" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[#211e1a] text-[#f3eee7]">
      <div className="mx-auto grid max-w-[1240px] gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.15fr] lg:px-8 lg:py-12">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <CurtainMark />
            <span>
              <span className="block text-[15px] font-semibold tracking-[0.03em]">CURTAIN HOUSE</span>
              <span className="mt-0.5 block text-[7px] tracking-[0.18em] text-[#bdb5ac]">TAILORED TO PERFECTION</span>
            </span>
          </Link>
          <p className="mt-5 max-w-[250px] text-[10px] leading-5 text-[#bdb5ac]">We design, tailor and install high quality curtains that bring beauty, comfort and elegance to your home or office.</p>
          <div className="mt-4 flex gap-2">
            {["f", "◎", "▶", "◉"].map((icon) => <span key={icon} className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-[10px] text-white">{icon}</span>)}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.08em]">Quick Links</h3>
          <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[10px] text-[#c5bdb4]">
            {quickLinks.map(([label, href]) => <Link key={label} href={href} className="hover:text-white">{label}</Link>)}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.08em]">Our Services</h3>
          <div className="mt-4 grid gap-2 text-[10px] text-[#c5bdb4]">
            {services.map((service) => <p key={service}><span className="mr-2 text-[#c4952e]">✓</span>{service}</p>)}
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.08em]">Contact Us</h3>
          <div className="mt-4 grid gap-2.5 text-[10px] text-[#c5bdb4]">
            <Link href="tel:+254712345678">☎ &nbsp;0712 345 678</Link>
            <Link href="mailto:hello@curtainhouse.co.ke">✉ &nbsp;hello@curtainhouse.co.ke</Link>
            <p>⌖ &nbsp;Nairobi, Kenya</p>
            <p>◷ &nbsp;Mon - Sat: 8:00 AM - 6:00 PM</p>
          </div>
        </div>

        <div>
          <h3 className="text-[10px] font-semibold uppercase tracking-[0.08em]">Newsletter</h3>
          <p className="mt-4 text-[10px] leading-4 text-[#bdb5ac]">Subscribe to get updates on new collections and offers.</p>
          <form className="mt-3 space-y-2">
            <input aria-label="Email address" type="email" placeholder="Enter your email" className="w-full rounded bg-white/10 px-3 py-2 text-[10px] text-white outline-none placeholder:text-[#8f8982] focus:ring-1 focus:ring-[#c4952e]" />
            <button type="submit" className="w-full rounded bg-[#b78a22] px-3 py-2 text-[10px] font-semibold text-white hover:bg-[#9f7619]">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-2 px-6 py-4 text-[9px] text-[#8e8881] sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2024 Curtain House. All Rights Reserved.</p>
          <div className="flex gap-4"><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms &amp; Conditions</Link></div>
        </div>
      </div>
    </footer>
  );
}
