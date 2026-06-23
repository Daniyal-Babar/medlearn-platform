import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-2 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-sm transition-transform group-hover:scale-105">
        {/* medical cross / pulse mark */}
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 12h3l2 5 4-12 2 7h4" />
        </svg>
      </span>
      <span className="text-lg font-bold tracking-tight text-slate-900">
        Med<span className="text-teal-600">Learn</span>
      </span>
    </Link>
  );
}
