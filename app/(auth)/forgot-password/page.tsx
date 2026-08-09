import Link from "next/link";
import { requestPasswordReset } from "@/lib/auth/actions";

export default async function ForgotPasswordPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const error = typeof params.error === "string" ? params.error : null;
  const message = typeof params.message === "string" ? params.message : null;
  return <section className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
    <p className="text-sm font-medium text-zinc-500">Net Tailor</p>
    <h1 className="mt-2 text-2xl font-semibold tracking-tight">Reset your password</h1>
    <p className="mt-2 text-sm text-zinc-600">We&apos;ll send a secure reset link to your email.</p>
    {error && <p className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
    {message && <p className="mt-5 rounded-lg bg-emerald-50 p-3 text-sm text-emerald-700">{message}</p>}
    <form action={requestPasswordReset} className="mt-6 space-y-4">
      <label className="block text-sm font-medium">Email<input name="email" type="email" autoComplete="email" required className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3 py-2.5" /></label>
      <button className="w-full rounded-lg bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white">Send reset link</button>
    </form>
    <p className="mt-6 text-center text-sm"><Link href="/login" className="font-medium">Back to sign in</Link></p>
  </section>;
}
