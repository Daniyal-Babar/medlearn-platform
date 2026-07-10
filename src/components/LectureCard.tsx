import Link from "next/link";
import type { Lecture } from "@/lib/data";

export default function LectureCard({ lecture }: { lecture: Lecture }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--lc-border-slate-200)] bg-[var(--lc-bg)] shadow-2xl shadow-[0px_0px_10px_rgba(255,255,255,0.25)] transition-all hover:-translate-y-1">
      {/* Cover */}
      <div className={`relative h-40 bg-gradient-to-br ${lecture.accent}`}>
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-[var(--lc-bg)] px-2.5 py-1 text-xs font-semibold text-[var(--lc-text-slate-700)] backdrop-blur">
            {lecture.category}
          </span>
          {lecture.free && (
            <span className="rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-semibold text-white">
              Free
            </span>
          )}
        </div>
        <div className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--lc-bg)] text-teal-600 shadow-md transition-transform group-hover:scale-110">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 text-xs font-medium text-[var(--lc-level-text-slate-500)]">
          <span className="rounded bg-slate-100 px-2 py-0.5">{lecture.level}</span>
          <span className="flex items-center gap-1 text-amber-500">
            <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            {lecture.rating.toFixed(1)}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-semibold leading-snug text-[var(--lc-text-slate-900)]">
          {lecture.title}
        </h3>
        <p className="mt-1 text-sm text-[var(--lc-text-slate-500)]">{lecture.instructor}</p>

        <div className="mt-4 flex items-center gap-4 text-xs text-[var(--lc-text-slate-500)]">
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" d="M12 7v5l3 2" />
            </svg>
            {lecture.durationHours}h
          </span>
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h10" />
            </svg>
            {lecture.lessons} lessons
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[var(--lc-border-slate-100)] pt-4">
          <span className="text-xs text-[var(--lc-text-slate-500)]">
            {lecture.students.toLocaleString()} enrolled
          </span>
          <Link
            href="/sign-up"
            className="text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700"
          >
            {lecture.free ? "Watch free →" : "Unlock →"}
          </Link>
        </div>
      </div>
    </div>
  );
}
