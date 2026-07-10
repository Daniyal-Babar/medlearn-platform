import Link from "next/link";

const highlights = [
  "Unlimited expert-led medical lectures",
  "Downloadable notes & high-yield summaries",
  "Quizzes and practice question banks",
  "Learn on any device, anytime",
];

export default function AuthShell({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <main className="grid min-h-[calc(100vh-4rem)] lg:grid-cols-2">
      {/* Left: form */}
      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-sm">
          <h1 className="text-2xl font-bold tracking-tight text-[var(--auth-text-slate-900)]">{title}</h1>
          <p className="mt-2 text-sm text-[var(--auth-text-slate-600)]">{subtitle}</p>
          <div className="mt-8">{children}</div>
        </div>
      </div>

      {/* Right: brand panel */}
      <div className="relative hidden overflow-hidden bg-gradient-to-br from-teal-600 to-emerald-700 lg:block">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative flex h-full flex-col justify-center px-12 text-white">
          <h2 className="text-3xl font-bold leading-tight">
            Your fast track to mastering medicine.
          </h2>
          <p className="mt-4 max-w-md text-teal-50">
            Join 60,000+ students learning smarter with MedLearn&apos;s lectures,
            notes and practice tools.
          </p>
          <ul className="mt-8 space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-teal-50">
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/20">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42l2.79 2.79 6.79-6.79a1 1 0 011.42 0z" clipRule="evenodd" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Link href="/" className="mt-10 text-sm font-medium text-teal-100 hover:text-white">
            ← Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
