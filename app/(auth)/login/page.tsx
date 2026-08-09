import Link from "next/link";
import { signIn } from "@/lib/auth/actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const error = typeof params.error === "string" ? params.error : null;
  const message = typeof params.message === "string" ? params.message : null;
  const next = typeof params.next === "string" ? params.next : "/dashboard";

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
      <div className="mb-8">
        <p className="text-sm font-medium text-zinc-500">Net Tailor</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">Welcome back</h1>
        <p className="mt-2 text-sm text-zinc-600">Sign in to continue to your workspace.</p>
      </div>

      {error && <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
      {message && <p className="mb-4 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700">{message}</p>}

      <form action={signIn} className="space-y-4">
        <input type="hidden" name="next" value={next} />
        <label className="block text-sm font-medium text-zinc-800">
          Email
          <input name="email" type="email" autoComplete="email" required className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3 py-2.5 outline-none focus:border-zinc-900" />
        </label>
        <label className="block text-sm font-medium text-zinc-800">
          Password
          <input name="password" type="password" autoComplete="current-password" required className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3 py-2.5 outline-none focus:border-zinc-900" />
        </label>
        <button type="submit" className="w-full rounded-lg bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800">
          Sign in
        </button>
      </form>

      <div className="mt-6 flex justify-between text-sm">
        <Link href="/forgot-password" className="text-zinc-600 hover:text-zinc-950">Forgot password?</Link>
        <Link href="/signup" className="font-medium text-zinc-950">Create account</Link>
      </div>
    </section>
  );
}
