import Link from "next/link";

export type ProductCardData = { name: string; category: string; price: string };

export function ProductCard({ name, category, price }: ProductCardData) {
  return <article className="group"><div className="relative aspect-[4/5] overflow-hidden bg-[#eee9e1]"><div className="absolute inset-0 bg-[linear-gradient(135deg,#e8e0d4,#f7f3ed_48%,#d7cbbd)] transition-transform duration-500 group-hover:scale-105" /><div className="absolute inset-x-0 bottom-0 h-2/3 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,.2)_0,rgba(255,255,255,.2)_2px,transparent_2px,transparent_13px)] opacity-70" /><Link href="#" className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/90 text-[#302b26] opacity-0 shadow-sm transition-opacity group-hover:opacity-100" aria-label={`View ${name}`}><span aria-hidden="true">↗</span></Link></div><div className="flex items-start justify-between gap-4 pt-4"><div><p className="text-xs uppercase tracking-[0.18em] text-[#81786e]">{category}</p><h3 className="mt-1 font-serif text-lg text-[#28231f]">{name}</h3></div><p className="text-sm text-[#4d463f]">{price}</p></div></article>;
}
