import Link from "next/link";
import { lectures } from "@/lib/data";

const enrolled = lectures.slice(0, 4).map((l, i) => ({
  ...l,
  progress: [72, 40, 15, 100][i],
}));

const summary = [
  { label: "Courses enrolled", value: "4" },
  { label: "Hours watched", value: "37" },
  { label: "Certificates", value: "1" },
  { label: "Day streak", value: "12" },
];

export default function DashboardPage() {
  return (
    <main className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Greeting */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Welcome back, Jane 👋
            </h1>
            <p className="mt-1 text-slate-600">Pick up where you left off.</p>
          </div>
          <Link
            href="/lectures"
            className="inline-flex items-center justify-center rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
          >
            Browse more lectures
          </Link>
        </div>

        {/* Subscription banner */}
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 p-6 text-white sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-teal-50">Current plan</p>
            <p className="text-xl font-bold">Pro — $19/month</p>
            <p className="mt-1 text-sm text-teal-50">Renews on 23 July 2026</p>
          </div>
          <Link
            href="/pricing"
            className="rounded-xl bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/25"
          >
            Manage subscription
          </Link>
        </div>

        {/* Summary stats */}
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {summary.map((s) => (
            <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-2xl font-bold text-slate-900">{s.value}</div>
              <div className="mt-1 text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Continue learning */}
        <h2 className="mt-12 text-xl font-bold text-slate-900">Continue learning</h2>
        <div className="mt-6 space-y-4">
          {enrolled.map((course) => {
            const done = course.progress === 100;
            return (
              <div
                key={course.id}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center"
              >
                <div className={`h-16 w-24 flex-none rounded-xl bg-gradient-to-br ${course.accent}`} />

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500">
                      {course.category}
                    </span>
                    {done && (
                      <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-700">
                        Completed
                      </span>
                    )}
                  </div>
                  <h3 className="mt-1.5 truncate font-semibold text-slate-900">{course.title}</h3>

                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className={`h-full rounded-full ${done ? "bg-emerald-500" : "bg-teal-500"}`}
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-500">{course.progress}%</span>
                  </div>
                </div>

                <button className="flex-none rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:border-teal-500 hover:text-teal-700">
                  {done ? "Review" : "Resume"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
