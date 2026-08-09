import Link from "next/link";
import { signIn } from "@/lib/auth/actions";

export default async function LoginPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const error = typeof params.error === "string" ? params.error : null;
  const message = typeof params.message === "string" ? params.message : null;
  const next = typeof params.next === "string" ? params.next : "/dashboard";

  return <section className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
    <p className="text-sm font-medium text-zinc-500">Net Tailor</p>
    <h1 className="mt-2 text-2xl font-semibold tracking-tight">Welcome back</h1>
    <p className="mt-2 text-sm text-zinc-600">Sign in to continue to your workspace.</p>
    {error && <p className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
    {message && <p className="mt-5 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700">{message}</p>}
    <form action={signIn} className="mt-6 space-y-4">
      <input type="hidden" name="next" value={next} />
      <label className="block text-sm font-medium">Email<input name="email" type="email" autoComplete="email" required className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3 py-2.5" /></label>
      <label className="block text-sm font-medium">Password<input name="password" type="password" autoComplete="current-password" required className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3 py-2.5" /></label>
      <button className="w-full rounded-lg bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white">Sign in</button>
    </form>
    <div className="mt-6 flex justify-between text-sm"><Link href="/forgot-password" className="text-zinc-600">Forgot password?</Link><Link href="/signup" className="font-medium">Create account</Link></div>
  </section>;
}
