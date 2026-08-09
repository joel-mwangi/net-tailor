"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

const redirectWith = (path: string, key: "error" | "message", value: string) =>
  redirect(`${path}?${key}=${encodeURIComponent(value)}`);

export async function signIn(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const next = String(formData.get("next") ?? "/dashboard");

  if (!email || !password) redirectWith("/login", "error", "Email and password are required.");

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) redirectWith("/login", "error", error.message);

  redirect(next.startsWith("/") ? next : "/dashboard");
}

export async function signUp(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) redirectWith("/signup", "error", "Email and password are required.");
  if (password.length < 8) redirectWith("/signup", "error", "Password must be at least 8 characters.");

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/auth/callback?next=/dashboard`,
    },
  });

  if (error) redirectWith("/signup", "error", error.message);
  if (!data.session) redirectWith("/login", "message", "Check your email to confirm your account, then sign in.");
  redirect("/dashboard");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

export async function requestPasswordReset(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  if (!email) redirectWith("/forgot-password", "error", "Email is required.");

  const supabase = await createClient();
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}/auth/callback?next=/reset-password`,
  });

  if (error) redirectWith("/forgot-password", "error", error.message);
  redirectWith("/forgot-password", "message", "If an account exists for that email, a reset link has been sent.");
}

export async function updatePassword(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  if (password.length < 8) redirectWith("/reset-password", "error", "Password must be at least 8 characters.");

  const supabase = await createClient();
  const { error } = await supabase.auth.updateUser({ password });
  if (error) redirectWith("/reset-password", "error", error.message);
  redirect("/dashboard");
}
