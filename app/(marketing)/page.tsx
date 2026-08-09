import Link from "next/link";
import { Hero } from "@/components/marketing/hero";
import { ProductCard } from "@/components/marketing/product-card";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";

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

export default function MarketingHomePage() {
  return (
    <main className="bg-[#f8f6f2] text-[#28231f]">
      <section className="relative overflow-hidden bg-[#d9d0c3]">
        <SiteHeader />
        <Hero />
      </section>

      <section className="border-b border-[#d8d1c8] bg-[#f8f6f2]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:grid-cols-3 lg:px-10">
          {collections.map((collection) => (
            <Link key={collection.name} href={collection.href} className="group flex items-center justify-between border-b border-[#d8d1c8] pb-5">
              <span className="font-serif text-2xl">{collection.name}</span>
              <span aria-hidden="true" className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
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
            <Link href="/quote" className="mt-7 inline-flex w-fit items-center gap-3 border-b border-[#28231f] pb-2 text-sm font-medium">Book a free measurement <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
