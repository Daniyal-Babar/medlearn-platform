import Link from "next/link";
import LectureCard from "@/components/LectureCard";
import { lectures, stats, testimonials } from "@/lib/data";

const features = [
  {
    title: "Expert-led video lectures",
    description:
      "Learn from practising clinicians and professors with crystal-clear, exam-focused video lessons.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    ),
  },
  {
    title: "Comprehensive notes",
    description:
      "Downloadable summaries, high-yield notes and diagrams that map directly to each lecture.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
  },
  {
    title: "Practice & quizzes",
    description:
      "Test yourself with question banks and quizzes designed to mirror real exam conditions.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    ),
  },
  {
    title: "Learn anywhere",
    description:
      "Stream seamlessly across desktop, tablet and mobile — pick up exactly where you left off.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    ),
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute -top-24 left-1/2 -z-10 h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-gradient-to-br from-teal-200/50 to-emerald-200/40 blur-3xl" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center lg:px-8 lg:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-sm font-medium text-teal-700">
            <span className="h-2 w-2 rounded-full bg-teal-500" />
            Trusted by 60,000+ medical students
          </span>

          {/* <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl"> */}
          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-[var(--text-slate-900)] sm:text-6xl">
            Master medicine with{" "}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
              MedLearn
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-slate-600)]">
            Premium medical lectures, notes and resources in one subscription.
            Learn from expert clinicians and ace your exams with confidence.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/sign-up"
              className="rounded-xl bg-teal-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-600/20 transition-all hover:-translate-y-0.5 hover:bg-teal-700"
            >
              Start learning today
            </Link>
            <Link
              href="/lectures"
              className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-800 transition-colors hover:border-slate-400"
            >
              Browse lectures
            </Link>
          </div>

          {/* Stats */}
          <dl className="mt-20 grid w-full max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <dt className="text-3xl font-bold text-[var(--text-slate-900)]">{stat.value}</dt>
                <dd className="mt-1 text-sm text-[var(--text-slate-500)]">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold text-teal-600">Why MedLearn</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to succeed
            </p>
            <p className="mt-4 text-lg text-slate-600">
              One subscription. Lectures, notes, quizzes and a community — all in
              one focused platform.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition-colors hover:border-teal-200 hover:bg-teal-50/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600 text-white">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular lectures */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-base font-semibold text-teal-600">Popular right now</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Featured lectures
              </p>
            </div>
            <Link
              href="/lectures"
              className="text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700"
            >
              View all lectures →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lectures.slice(0, 3).map((lecture) => (
              <LectureCard key={lecture.id} lecture={lecture} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold text-teal-600">Loved by learners</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What our students say
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-8"
              >
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-slate-700">“{t.quote}”</blockquote>
                <figcaption className="mt-6 border-t border-slate-200 pt-4">
                  <div className="font-semibold text-slate-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-600 to-emerald-600 px-8 py-16 text-center shadow-xl sm:px-16">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to start learning?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-teal-50">
                Join thousands of medical students and professionals. Start free,
                upgrade whenever you&apos;re ready.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/sign-up"
                  className="rounded-xl bg-white px-7 py-3.5 text-base font-semibold text-teal-700 shadow-sm transition-transform hover:-translate-y-0.5"
                >
                  Create free account
                </Link>
                <Link
                  href="/pricing"
                  className="rounded-xl border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
                >
                  See pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
