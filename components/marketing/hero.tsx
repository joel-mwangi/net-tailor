import Link from "next/link";

const heroImage =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=88";

const avatars = [
  "https://i.pravatar.cc/80?img=47",
  "https://i.pravatar.cc/80?img=32",
  "https://i.pravatar.cc/80?img=12",
  "https://i.pravatar.cc/80?img=44",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f6f2eb]">
      <div className="grid min-h-[430px] lg:grid-cols-[42%_58%] lg:min-h-[490px]">
        <div className="relative z-10 flex items-center px-6 py-14 sm:px-10 lg:px-[max(4vw,56px)] lg:py-20">
          <div className="max-w-[520px]">
            <h1 className="font-serif text-[44px] leading-[1.05] tracking-[-0.035em] text-[#28231f] sm:text-[54px] lg:text-[60px]">
              Beautiful Curtains.
              <br />
              Beautiful Homes.
            </h1>
            <p className="mt-6 max-w-[430px] text-[15px] leading-6 text-[#413b36] sm:text-[16px]">
              Custom curtains designed and tailored for every space with elegance and care.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center rounded-md bg-[#ad7b19] px-5 py-3 text-[12px] font-semibold text-white shadow-sm transition hover:bg-[#936613]"
              >
                Request Free Quote <span className="ml-2 text-base">→</span>
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center rounded-md border border-[#4c463f]/50 bg-transparent px-6 py-3 text-[12px] font-semibold text-[#28231f] transition hover:bg-white"
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
                    className="h-8 w-8 rounded-full border-2 border-[#f6f2eb] bg-cover bg-center"
                    style={{ backgroundImage: `url(${avatar})` }}
                  />
                ))}
              </div>
              <div>
                <p className="text-[11px] font-medium text-[#3e3832]">
                  <strong className="font-semibold">500+</strong> Happy Customers
                </p>
                <div className="mt-1 text-[10px] tracking-[1px] text-[#b17b16]" aria-label="5 star rating">★★★★★</div>
              </div>
            </div>
          </div>
        </div>

        <div
          role="img"
          aria-label="Elegant living room with custom curtains"
          className="min-h-[330px] bg-cover bg-center lg:min-h-0"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      </div>
    </section>
  );
}
