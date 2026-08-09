import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <section>
      <div className="mb-8">
        <p className="text-sm font-medium text-zinc-500">Dashboard</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Welcome to Net Tailor</h1>
        <p className="mt-2 text-zinc-600">Your authenticated application foundation is ready.</p>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-zinc-500">Signed in as</p>
        <p className="mt-1 font-medium">{user?.email ?? "Authenticated user"}</p>
      </div>
    </section>
  );
}
