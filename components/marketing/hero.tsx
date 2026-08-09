import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#d9d0c3]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,255,255,.55),transparent_34%),linear-gradient(115deg,#e8e1d8,#c9bcae)]" />
      <div className="absolute inset-y-0 right-0 w-[58%] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.25)_0,rgba(255,255,255,.25)_9px,rgba(126,111,96,.08)_9px,rgba(126,111,96,.08)_28px)] opacity-80" />

      <div className="relative z-10 mx-auto flex min-h-[590px] max-w-7xl items-center px-6 py-20 lg:min-h-[650px] lg:px-10">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#6b5b4d]">Tailored to perfection</p>
          <h1 className="max-w-xl font-serif text-5xl leading-[1.02] tracking-[-0.035em] text-[#28231f] sm:text-6xl lg:text-7xl">
            Beautiful Curtains. Beautiful Homes.
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-[#5b5148] sm:text-lg">
            Custom curtains designed and tailored for every space with elegance and care.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/quote" className="inline-flex items-center rounded-sm bg-[#6b422c] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#573622]">
              Request Free Quote <span className="ml-2" aria-hidden="true">→</span>
            </Link>
            <Link href="/shop" className="inline-flex items-center rounded-sm border border-[#6b422c]/45 bg-white/30 px-7 py-3.5 text-sm font-semibold text-[#4d392b] backdrop-blur transition hover:bg-white/60">
              View Collection
            </Link>
          </div>

          <div className="mt-9 flex items-center gap-3">
            <div className="flex -space-x-2" aria-hidden="true">
              {["JD", "AM", "SK", "LW", "N"].map((initials, index) => (
                <span key={initials} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#d9d0c3] bg-[#8f7967] text-[9px] font-semibold text-white" style={{ opacity: 1 - index * 0.07 }}>
                  {initials}
                </span>
              ))}
            </div>
            <div>
              <p className="text-sm font-semibold text-[#3d332b]">500+ Happy Customers</p>
              <p className="text-xs text-[#6f6258]">Trusted for beautiful, tailored spaces</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
