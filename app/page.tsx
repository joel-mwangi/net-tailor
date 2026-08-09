import Link from "next/link";

export default function Home() {
  return <main className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 py-16">
    <section className="w-full max-w-3xl rounded-3xl border border-zinc-200 bg-white p-10 shadow-sm">
      <p className="text-sm font-semibold text-zinc-500">Net Tailor</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Application foundation ready.</h1>
      <p className="mt-4 max-w-2xl text-zinc-600">Next.js and Supabase Auth are now the foundation for the product represented by the repository wireframes.</p>
      <div className="mt-8 flex gap-3">
        <Link href="/login" className="rounded-lg bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white">Sign in</Link>
        <Link href="/signup" className="rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium">Create account</Link>
      </div>
    </section>
  </main>;
}
