import Link from "next/link";
import { Hero } from "@/components/marketing/hero";
import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";

const rooms = [
  { name: "Living Room", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85" },
  { name: "Bedroom", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85" },
  { name: "Office", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85" },
  { name: "Hotel", image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=900&q=85" },
  { name: "Sheers", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85" },
  { name: "Blackout", image: "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=900&q=85" },
  { name: "Kids Room", image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=900&q=85" },
];

const featured = [
  { name: "Luxury Velvet Curtain", price: "KSh 5,500", reviews: "56", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=85" },
  { name: "Linen Textured Curtain", price: "KSh 4,200", reviews: "42", image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=900&q=85" },
  { name: "Blackout Premium Curtain", price: "KSh 4,800", reviews: "63", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=85" },
  { name: "Sheer Elegant Curtain", price: "KSh 3,200", reviews: "38", image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=900&q=85" },
  { name: "Patterned Designer Curtain", price: "KSh 4,600", reviews: "47", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=85" },
];

const trustItems = [
  ["◉", "10+ Years", "Experience"],
  ["⌘", "Custom Made", "Perfect Fit"],
  ["▱", "Free Measurement", "At Your Home"],
  ["⚒", "Professional", "Installation"],
  ["☺", "Hundreds of", "Happy Customers"],
];

const steps = [
  ["1", "Contact Us", "Tell us your needs"],
  ["2", "Home Measurement", "We measure your space"],
  ["3", "Choose Fabric", "Select from our collection"],
  ["4", "Tailoring", "Custom made for you"],
  ["5", "Installation", "Professional installation"],
];

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-7 flex items-center justify-center gap-3 text-center">
      <span className="hidden h-px w-8 bg-[#c9a35a] sm:block" />
      <h2 className="font-serif text-[21px] font-semibold tracking-[0.01em] text-[#28231f] sm:text-[23px]">{title}</h2>
      <span className="hidden h-px w-8 bg-[#c9a35a] sm:block" />
    </div>
  );
}

export default function MarketingHomePage() {
  return (
    <main className="bg-[#fbfaf7] text-[#28231f]">
      <SiteHeader />
      <Hero />

      <section aria-label="Curtain House benefits" className="border-b border-[#e4ded4] bg-white">
        <div className="mx-auto grid max-w-[1320px] grid-cols-2 divide-x divide-[#e6e0d7] lg:grid-cols-5">
          {trustItems.map(([icon, title, subtitle]) => (
            <div key={title} className="flex min-h-[78px] items-center justify-center gap-3 border-b border-[#e6e0d7] px-3 py-4 last:border-b-0 lg:border-b-0 lg:px-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#c9972f] font-serif text-[17px] text-[#ad7b19]">{icon}</span>
              <div className="leading-tight">
                <p className="text-[11px] font-semibold">{title}</p>
                <p className="mt-1 text-[10px] text-[#5d554e]">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 py-10 sm:px-8 sm:py-12">
        <SectionHeading title="SHOP BY ROOM" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
          {rooms.map((room) => (
            <Link key={room.name} href={`/shop?room=${room.name.toLowerCase().replaceAll(" ", "-")}`} className="group overflow-hidden rounded-md border border-[#e7e1d8] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div role="img" aria-label={room.name} className="aspect-[1.18] bg-cover bg-center transition duration-500 group-hover:scale-[1.02]" style={{ backgroundImage: `url(${room.image})` }} />
              <div className="px-2 py-2.5 text-center">
                <h3 className="text-[11px] font-semibold">{room.name}</h3>
                <span className="mt-1 block text-[9px] text-[#514a44]">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 pb-10 sm:px-8 sm:pb-12">
        <SectionHeading title="FEATURED CURTAINS" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {featured.map((product) => (
            <article key={product.name} className="overflow-hidden rounded-md border border-[#e6dfd6] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="relative aspect-[1.3] overflow-hidden bg-[#e8e0d6]">
                <div role="img" aria-label={product.name} className="absolute inset-0 bg-cover bg-center transition duration-500 hover:scale-105" style={{ backgroundImage: `url(${product.image})` }} />
                <button type="button" aria-label={`Save ${product.name}`} className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur-sm transition hover:bg-[#ad7b19]">♡</button>
              </div>
              <div className="p-2.5">
                <h3 className="truncate text-[10px] font-semibold sm:text-[11px]">{product.name}</h3>
                <p className="mt-1 text-[10px] text-[#514a44]">{product.price}</p>
                <div className="mt-1 flex items-center gap-1 text-[#b17b16]">
                  <span className="text-[10px] tracking-[-1px]">★★★★★</span>
                  <span className="text-[9px] text-[#645c54]">({product.reviews})</span>
                </div>
                <Link href="/shop" className="mt-2.5 flex items-center justify-center rounded border border-[#c99836] py-1.5 text-[9px] font-medium text-[#6d511d] transition hover:bg-[#fbf4e6]">View Details</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] gap-4 px-5 pb-10 sm:px-8 lg:grid-cols-[1.1fr_1.35fr_1fr]">
        <div className="rounded-lg bg-[#f3eee7] p-4 sm:p-5">
          <SectionHeading title="BEFORE & AFTER" />
          <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-md">
            {[
              "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=85",
              "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=700&q=85",
            ].map((image, index) => (
              <div key={image} className="relative aspect-square bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
                <span className="absolute bottom-2 left-2 rounded bg-black/55 px-2 py-1 text-[9px] font-medium text-white">{index === 0 ? "Before" : "After"}</span>
              </div>
            ))}
          </div>
          <Link href="/projects" className="mt-3 flex justify-center rounded border border-[#c99836] bg-white py-2 text-[9px] font-medium text-[#6d511d]">View More Transformations</Link>
        </div>

        <div className="rounded-lg bg-white p-4 sm:p-5">
          <SectionHeading title="HOW IT WORKS" />
          <div className="grid grid-cols-5 gap-1">
            {steps.map(([number, title, description]) => (
              <div key={number} className="relative text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#d8b26a] bg-[#fffaf0] font-serif text-[#9a6d13]">{number}</div>
                <h3 className="mt-2 text-[9px] font-semibold sm:text-[10px]">{title}</h3>
                <p className="mt-1 text-[8px] leading-3 text-[#6b635c]">{description}</p>
                {number !== "5" ? <span className="absolute right-[-5px] top-5 text-[#b4872e]">→</span> : null}
              </div>
            ))}
          </div>
          <Link href="/quote" className="mx-auto mt-5 flex max-w-[180px] justify-center rounded border border-[#c99836] bg-white py-2 text-[9px] font-medium text-[#6d511d]">Book a Free Measurement</Link>
        </div>

        <div className="rounded-lg bg-[#f3eee7] p-5">
          <SectionHeading title="WHAT OUR CLIENTS SAY" />
          <div className="rounded-md bg-white p-5 shadow-sm">
            <p className="font-serif text-4xl leading-none text-[#b68a2d]">“</p>
            <p className="mt-1 text-[11px] leading-5 text-[#443c36]">Our living room looks absolutely amazing! The quality is top-notch and the team was so professional.</p>
            <p className="mt-3 text-[10px] font-semibold">— Mary Wanjiku</p>
            <p className="text-[9px] text-[#756c64]">Nairobi</p>
            <p className="mt-3 text-[11px] tracking-[1px] text-[#b17b16]">★★★★★</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-5 pb-10 sm:px-8">
        <div className="relative overflow-hidden rounded-xl bg-cover bg-center px-6 py-12 text-center text-white sm:px-10" style={{ backgroundImage: "linear-gradient(rgba(35,25,17,.76),rgba(35,25,17,.76)), url(https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85)" }}>
          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#d5ad59] bg-[#8c671d]/70">▣</div>
            <h2 className="font-serif text-3xl sm:text-4xl">Ready to Transform Your Home?</h2>
            <p className="mt-2 text-sm text-white/90">Book a free consultation and measurement with our experts today.</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <a href="https://wa.me/254712345678" className="rounded-md bg-[#ad7b19] px-5 py-2.5 text-xs font-semibold text-white">◔ WhatsApp Us</a>
              <a href="tel:+254712345678" className="rounded-md border border-white/70 px-5 py-2.5 text-xs font-semibold text-white">♧ Call Now</a>
            </div>
          </div>
        </div>
      </section>

      <a href="https://wa.me/254712345678" aria-label="Chat with Curtain House on WhatsApp" className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-lg transition hover:scale-105">◔</a>

      <SiteFooter />
    </main>
  );
}
