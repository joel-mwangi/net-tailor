import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[640px] overflow-hidden bg-[#d9d0c3]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(255,255,255,.55),transparent_34%),linear-gradient(115deg,#e8e1d8,#c9bcae)]" />
      <div className="absolute inset-y-0 right-0 w-[58%] bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.25)_0,rgba(255,255,255,.25)_9px,rgba(126,111,96,.08)_9px,rgba(126,111,96,.08)_28px)] opacity-80" />
      <div className="relative z-10 mx-auto flex min-h-[640px] max-w-7xl items-center px-6 py-20 lg:px-10">
        <div className="max-w-xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.28em] text-[#655b51]">Tailored for your space</p>
          <h1 className="font-serif text-6xl leading-[0.95] tracking-[-0.035em] text-[#28231f] sm:text-7xl lg:text-8xl">Windows,<br />beautifully dressed.</h1>
          <p className="mt-7 max-w-md text-base leading-7 text-[#5b5148]">Made-to-measure curtains, sheers and blinds designed around the way you live.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/shop" className="rounded-full bg-[#28231f] px-7 py-3.5 text-sm font-medium text-white hover:bg-[#443c35]">Explore collection</Link>
            <Link href="/quote" className="rounded-full border border-[#5c534a]/35 bg-white/35 px-7 py-3.5 text-sm font-medium backdrop-blur hover:bg-white/60">Request a quote</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
