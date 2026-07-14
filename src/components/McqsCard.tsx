import Link from "next/link";
import type { Mcq } from "@/lib/data";

export default function McqCard({ Mcq }: { Mcq: Mcq }) {
  return (
    <Link
      href={`/mcqs/${Mcq.id}`}
      className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-[var(--mc-border-slate-200)] bg-[var(--mc-bg)] shadow-[0px_0px_10px_rgba(255,255,255,0.25)] shadow-2xl transition-all hover:-translate-y-1"
    >
      {/* Cover */}
      <div className="relative h-40">
        <img src={Mcq.image} alt={Mcq.title} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute left-4 top-4 flex gap-2">
          {Mcq.free && (
            <span className="rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-semibold text-white">
              Free
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">

        <h3 className="mt-3 text-lg font-semibold leading-snug text-[var(--mc-text-slate-900)]">
          {Mcq.title}
        </h3>

        <div className="mt-4 flex items-center gap-4 text-xs text-[var(--mc-text-slate-500)]">
          <span className="flex items-center gap-1">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h10" />
            </svg>
            {Mcq.number_of_mcqs} MCQs
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-[var(--mc-border-slate-100)] pt-4">
          <span className="text-xs text-[var(--mc-text-slate-500)]">
            {Mcq.students.toLocaleString()} enrolled
          </span>
          <span className="text-sm font-semibold text-teal-600 transition-colors group-hover:text-teal-700">
            {Mcq.free ? "Start free →" : "Practice →"}
          </span>
        </div>
      </div>
    </Link>
  );
}
