import Link from "next/link";
import AuthShell from "@/components/AuthShell";
import Field from "@/components/Field";

export default function SignInPage() {
  return (
    <AuthShell title="Welcome back" subtitle="Sign in to continue your learning.">
      <form className="space-y-5" action="/dashboard">
        <Field
          label="Email address"
          type="email"
          name="email"
          placeholder="you@example.com"
          autoComplete="email"
        />
        <div>
          <Field
            label="Password"
            type="password"
            name="password"
            placeholder="••••••••"
            autoComplete="current-password"
          />
          <div className="mt-2 text-right">
            <Link href="#" className="text-xs font-medium text-teal-600 hover:text-teal-700">
              Forgot password?
            </Link>
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
        >
          Sign in
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-slate-200" />
        <span className="text-xs text-slate-400">or</span>
        <span className="h-px flex-1 bg-slate-200" />
      </div>

      <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400">
        <svg className="h-5 w-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.26 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0012 23z" />
          <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 010-4.2V7.06H2.18a11 11 0 000 9.88l3.66-2.84z" />
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 002.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
        </svg>
        Continue with Google
      </button>

      <p className="mt-8 text-center text-sm text-[var(--signin-text-slate-600)]">
        Don&apos;t have an account?{" "}
        <Link href="/sign-up" className="font-semibold text-teal-600 hover:text-teal-700">
          Sign up
        </Link>
      </p>
    </AuthShell>
  );
}
