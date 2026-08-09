import Link from "next/link";
import { signUp } from "@/lib/auth/actions";

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const error = typeof params.error === "string" ? params.error : null;

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
      <div className="mb-8">
        <p className="text-sm font-medium text-zinc-500">Net Tailor</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950">Create your account</h1>
        <p className="mt-2 text-sm text-zinc-600">Set up your account to access the workspace.</p>
      </div>

      {error && <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}

      <form action={signUp} className="space-y-4">
        <label className="block text-sm font-medium text-zinc-800">
          Email
          <input name="email" type="email" autoComplete="email" required className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3 py-2.5 outline-none focus:border-zinc-900" />
        </label>
        <label className="block text-sm font-medium text-zinc-800">
          Password
          <input name="password" type="password" autoComplete="new-password" minLength={8} required className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3 py-2.5 outline-none focus:border-zinc-900" />
        </label>
        <button type="submit" className="w-full rounded-lg bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white hover:bg-zinc-800">
          Create account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-zinc-600">
        Already have an account? <Link href="/login" className="font-medium text-zinc-950">Sign in</Link>
      </p>
    </section>
  );
}
