import Link from "next/link";

const collections = [
  { name: "Curtains", href: "/shop?category=curtains" },
  { name: "Blinds", href: "/shop?category=blinds" },
  { name: "Sheers", href: "/shop?category=sheers" },
];

const products = [
  { name: "Linen Wave", category: "Curtains", price: "KES 8,500" },
  { name: "Ivory Sheer", category: "Sheers", price: "KES 6,900" },
  { name: "Natural Weave", category: "Curtains", price: "KES 9,800" },
  { name: "Soft Sand", category: "Blinds", price: "KES 7,500" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ProductCard({
  name,
  category,
  price,
}: (typeof products)[number]) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-[#eee9e1]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#e8e0d4,#f7f3ed_48%,#d7cbbd)] transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.2)_0,rgba(255,255,255,.2)_2px,transparent_2px,transparent_13px)] opacity-70" />
        <Link
          href="#"
          className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/90 text-[#302b26] opacity-0 shadow-sm transition-opacity group-hover:opacity-100"
          aria-label={`View ${name}`}
        >
          <Arrow />
        </Link>
      </div>
      <div className="flex items-start justify-between gap-4 pt-4">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[#81786e]">{category}</p>
          <h3 className="mt-1 font-serif text-lg text-[#28231f]">{name}</h3>
        </div>
        <p className="text-sm text-[#4d463f]">{price}</p>
      </div>
    </article>
  );
}

export default function MarketingHomePage() {
  return (
    <main className="bg-[#f8f6f2] text-[#28231f]">
      <section className="relative min-h-[720px] overflow-hidden bg-[#d9d0c3]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,255,255,.55),transparent_34%),linear-gradient(115deg,#e8e1d8,#c9bcae)]" />
        <div className="absolute inset-y-0 right-0 w-[58%] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.25)_0,rgba(255,255,255,.25)_9px,rgba(126,111,96,.08)_9px,rgba(126,111,96,.08)_28px)] opacity-80" />
        <header className="relative z-10 border-b border-[#4d463f]/15">
          <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
            <Link href="/" className="font-serif text-2xl tracking-[0.08em] text-[#28231f]">
              NET TAILOR
            </Link>
            <nav className="hidden items-center gap-8 text-sm md:flex">
              <Link href="/" className="text-[#28231f]">Home</Link>
              <Link href="/shop" className="text-[#5f564d] transition-colors hover:text-[#28231f]">Shop</Link>
              <Link href="/services" className="text-[#5f564d] transition-colors hover:text-[#28231f]">Services</Link>
              <Link href="/projects" className="text-[#5f564d] transition-colors hover:text-[#28231f]">Projects</Link>
              <Link href="/about" className="text-[#5f564d] transition-colors hover:text-[#28231f]">About</Link>
            </nav>
            <div className="flex items-center gap-3 text-sm">
              <Link href="/login" className="hidden sm:inline">Sign in</Link>
              <Link href="/shop" className="rounded-full bg-[#28231f] px-5 py-2.5 text-white transition hover:bg-[#443c35]">Shop now</Link>
            </div>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[640px] max-w-7xl items-center px-6 py-20 lg:px-10">
          <div className="max-w-xl">
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-[#655b51]">Tailored for your space</p>
            <h1 className="font-serif text-6xl leading-[0.95] tracking-[-0.035em] text-[#28231f] sm:text-7xl lg:text-8xl">
              Windows,
              <br />beautifully dressed.
            </h1>
            <p className="mt-7 max-w-md text-base leading-7 text-[#5b5148]">
              Made-to-measure curtains, sheers and blinds designed around the way you live.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/shop" className="rounded-full bg-[#28231f] px-7 py-3.5 text-sm font-medium text-white hover:bg-[#443c35]">Explore collection</Link>
              <Link href="/quote" className="rounded-full border border-[#5c534a]/35 bg-white/35 px-7 py-3.5 text-sm font-medium backdrop-blur hover:bg-white/60">Request a quote</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d8d1c8] bg-[#f8f6f2]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:grid-cols-3 lg:px-10">
          {collections.map((collection) => (
            <Link key={collection.name} href={collection.href} className="group flex items-center justify-between border-b border-[#d8d1c8] pb-5">
              <span className="font-serif text-2xl">{collection.name}</span>
              <span className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><Arrow /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#81786e]">The collection</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">Designed to belong.</h2>
          </div>
          <Link href="/shop" className="hidden text-sm underline underline-offset-4 sm:block">View all products</Link>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => <ProductCard key={product.name} {...product} />)}
        </div>
      </section>

      <section className="bg-[#e8e1d8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#81786e]">Made for you</p>
            <h2 className="mt-4 max-w-lg font-serif text-5xl leading-tight tracking-tight">A better fit starts with your room.</h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="max-w-lg text-base leading-7 text-[#5b5148]">Book a free consultation and let our team help you choose fabric, finish, fullness and fit. Every piece is measured and made for its final home.</p>
            <Link href="/quote" className="mt-7 inline-flex w-fit items-center gap-3 border-b border-[#28231f] pb-2 text-sm font-medium">Book a free measurement <Arrow /></Link>
          </div>
        </div>
      </section>

      <footer className="bg-[#28231f] text-[#f4f0ea]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          <div className="lg:col-span-2">
            <p className="font-serif text-2xl tracking-[0.08em]">NET TAILOR</p>
            <p className="mt-5 max-w-sm text-sm leading-6 text-[#bcb3a8]">Thoughtful window treatments, measured and made for your space.</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#8f867c]">Explore</p>
            <div className="mt-5 grid gap-3 text-sm text-[#d8d1c8]"><Link href="/shop">Shop</Link><Link href="/services">Services</Link><Link href="/projects">Projects</Link><Link href="/about">About</Link></div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#8f867c]">Contact</p>
            <div className="mt-5 grid gap-3 text-sm text-[#d8d1c8]"><Link href="/quote">Request a quote</Link><Link href="/contact">Contact us</Link><Link href="/faq">FAQ</Link></div>
          </div>
        </div>
        <div className="border-t border-white/10"><div className="mx-auto max-w-7xl px-6 py-5 text-xs text-[#8f867c] lg:px-10">© {new Date().getFullYear()} Net Tailor. All rights reserved.</div></div>
      </footer>
    </main>
  );
}
