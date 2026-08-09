import { updatePassword } from "@/lib/auth/actions";

export default async function ResetPasswordPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const params = await searchParams;
  const error = typeof params.error === "string" ? params.error : null;
  return <section className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
    <p className="text-sm font-medium text-zinc-500">Net Tailor</p>
    <h1 className="mt-2 text-2xl font-semibold tracking-tight">Choose a new password</h1>
    <p className="mt-2 text-sm text-zinc-600">Use at least 8 characters.</p>
    {error && <p className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-700">{error}</p>}
    <form action={updatePassword} className="mt-6 space-y-4">
      <label className="block text-sm font-medium">New password<input name="password" type="password" autoComplete="new-password" minLength={8} required className="mt-1.5 w-full rounded-lg border border-zinc-300 px-3 py-2.5" /></label>
      <button className="w-full rounded-lg bg-zinc-950 px-4 py-2.5 text-sm font-medium text-white">Update password</button>
    </form>
  </section>;
}
