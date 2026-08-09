import Link from "next/link";

const heroImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85";
const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=80&q=80",
];

export function Hero() {
  return (
    <section className="relative min-h-[560px] overflow-hidden bg-[#f5f1eb] sm:min-h-[610px]">
      <div
        role="img"
        aria-label="Elegant living room with tailored curtains"
        className="absolute inset-y-0 right-0 w-full bg-cover bg-center lg:w-[62%]"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#f7f3ed] via-[#f7f3ed]/95 via-42% to-[#f7f3ed]/10 lg:to-transparent" />
      <div className="absolute inset-y-0 left-0 w-full bg-[#f7f3ed]/25 lg:w-[52%]" />

      <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1440px] items-center px-6 py-16 sm:min-h-[610px] lg:px-14">
        <div className="max-w-[500px] pt-4 lg:pt-0">
          <h1 className="font-serif text-[48px] leading-[1.02] tracking-[-0.035em] text-[#28231f] sm:text-[60px] lg:text-[64px]">
            Beautiful Curtains.
            <br />
            Beautiful Homes.
          </h1>
          <p className="mt-6 max-w-[430px] text-[15px] leading-6 text-[#39322c] sm:text-base">
            Custom curtains designed and tailored for every space with elegance and care.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 rounded-md bg-[#ad7b19] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#936613]"
            >
              Request Free Quote <span aria-hidden="true" className="text-lg leading-none">→</span>
            </Link>
            <Link
              href="/shop"
              className="inline-flex items-center rounded-md border border-[#554d46] bg-white/40 px-6 py-3.5 text-sm font-semibold text-[#28231f] backdrop-blur-sm transition hover:bg-white/75"
            >
              View Collection
            </Link>
          </div>

          <div className="mt-7 flex items-center gap-3">
            <div className="flex -space-x-2">
              {avatars.map((avatar) => (
                <div
                  key={avatar}
                  role="img"
                  aria-label="Curtain House customer"
                  className="h-8 w-8 rounded-full border-2 border-[#f7f3ed] bg-cover bg-center shadow-sm"
                  style={{ backgroundImage: `url(${avatar})` }}
                />
              ))}
            </div>
            <p className="text-xs text-[#403932]">
              <strong className="font-semibold">500+</strong> Happy Customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
