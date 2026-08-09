import { createClient } from "@/lib/supabase/server";
import { signOut } from "@/lib/auth/actions";
import { redirect } from "next/navigation";

export default async function AppLayout({ children }: LayoutProps<"/">) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div>
            <p className="text-sm font-semibold">Net Tailor</p>
            <p className="text-xs text-zinc-500">Authenticated workspace</p>
          </div>
          <form action={signOut}>
            <button type="submit" className="rounded-lg border border-zinc-300 px-3 py-2 text-sm font-medium hover:bg-zinc-100">
              Sign out
            </button>
          </form>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-8">{children}</main>
    </div>
  );
}
