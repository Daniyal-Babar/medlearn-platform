import Link from "next/link";
import AuthShell from "@/components/AuthShell";
import Field from "@/components/Field";

export default function SignUpPage() {
  return (
    <AuthShell
      title="Create your account"
      subtitle="Start free — no credit card required."
    >
      <form className="signup-form space-y-5" action="/dashboard">
        <Field
          label="Full name"
          name="name"
          placeholder="Jane Doe"
          autoComplete="name"
        />
        <Field
          label="Email address"
          type="email"
          name="email"
          placeholder="you@example.com"
          autoComplete="email"
        />
        <Field
          label="Password"
          type="password"
          name="password"
          placeholder="Create a password"
          autoComplete="new-password"
        />

        <label className="flex items-start gap-2 text-xs text-[var(--signup-text-slate-600)]">
          <input
            type="checkbox"
            className="mt-0.5 h-4 w-4 rounded border-[var(--signup-border-slate-300)] text-teal-600 focus:ring-teal-500"
          />
          <span>
            I agree to the{" "}
            <Link href="#" className="font-medium text-teal-600 hover:text-teal-700">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="#" className="font-medium text-teal-600 hover:text-teal-700">
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        <button
          type="submit"
          className="w-full rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
        >
          Create account
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-[var(--signup-text-slate-600)]">
        Already have an account?{" "}
        <Link href="/sign-in" className="font-semibold text-teal-600 hover:text-teal-700">
          Sign in
        </Link>
      </p>
    </AuthShell>
  );
}
