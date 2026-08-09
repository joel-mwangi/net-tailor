import Link from "next/link";
import { Hero } from "@/components/marketing/hero";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";

const trustItems = [
  "10+ Years Experience",
  "Custom Made Perfect Fit",
  "Free Measurement At Your Home",
  "Professional Installation",
  "Hundreds of Happy Customers",
];

const rooms = [
  { name: "Living Room", href: "/shop?room=living-room", image: "/assets/HOMEPAGE.png", position: "center" },
  { name: "Bedroom", href: "/shop?room=bedroom", image: "/assets/Curtain House Collection Shop.png", position: "center" },
  { name: "Office", href: "/shop?room=office", image: "/assets/PRODUCT DETAILS .png", position: "center" },
  { name: "Hotel", href: "/shop?room=hotel", image: "/assets/Our Projects Gallery.png", position: "center" },
  { name: "Sheers", href: "/shop?category=sheers", image: "/assets/Curtain House Collection Shop.png", position: "left" },
  { name: "Blackout", href: "/shop?category=blackout", image: "/assets/Curtain House Products Dashboard.png", position: "center" },
  { name: "Kids Room", href: "/shop?room=kids-room", image: "/assets/Fabric Collection E-commerce Showcase.png", position: "center" },
] as const;

export default function MarketingHomePage() {
  return (
    <main className="bg-[#f8f6f2] text-[#28231f]">
      <SiteHeader />
      <Hero />

      <section aria-label="Why choose Curtain House" className="border-b border-[#d8d1c8] bg-[#f3eee7]">
        <div className="mx-auto grid max-w-7xl divide-y divide-[#d8d1c8] px-6 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5 lg:px-10">
          {trustItems.map((item, index) => (
            <div key={item} className="flex min-h-28 items-center justify-center px-4 py-7 text-center lg:px-5">
              <div>
                <span className="mb-2 block font-serif text-lg text-[#6b422c]">0{index + 1}</span>
                <p className="text-xs font-semibold leading-5 text-[#4d4036]">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#81786e]">Find your perfect fit</p>
            <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">SHOP BY ROOM</h2>
          </div>
          <Link href="/shop" className="hidden text-sm font-semibold text-[#6b422c] underline underline-offset-4 sm:block">View collection →</Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((room, index) => (
            <Link
              key={room.name}
              href={room.href}
              className={`group relative min-h-[270px] overflow-hidden bg-[#e5ded5] ${index === 0 || index === 5 ? "lg:row-span-2 lg:min-h-[560px]" : ""} ${index === 6 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <img
                src={room.image}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 ${room.position === "left" ? "object-left" : "object-center"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f1915]/75 via-[#1f1915]/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
                <h3 className="font-serif text-2xl">{room.name}</h3>
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/60 text-lg transition group-hover:-translate-y-1 group-hover:translate-x-1">↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#e8e1d8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:px-10 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#81786e]">Made for your home</p>
            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl">Beautiful curtains, measured and tailored with care.</h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="max-w-lg text-base leading-7 text-[#5b5148]">From choosing the right fabric to professional installation, our team makes every step simple. Start with a free measurement at your home.</p>
            <Link href="/quote" className="mt-7 inline-flex w-fit items-center gap-2 bg-[#6b422c] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#573622]">Get a Free Quote <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
