import Link from "next/link";
import { notFound } from "next/navigation";
import McqQuiz from "@/components/McqQuiz";
import { mcqs, getMcqQuestions } from "@/lib/data";

export default async function McqDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const chapter = mcqs.find((m) => m.id === id);

  if (!chapter) {
    notFound();
  }

  const questions = getMcqQuestions(chapter.id);

  return (
    <main className="bg-[var(--mcq-bg-slate-50)] min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[var(--mcq-border-slate-200)]">
        <img
          src={chapter.image}
          alt={chapter.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <Link
            href="/mcqs"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition hover:text-white"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to MCQs
          </Link>

          <div className="mt-6 flex items-center gap-3">
            {chapter.free && (
              <span className="rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-semibold text-white">
                Free
              </span>
            )}
            <span className="rounded-full bg-white/15 px-2.5 py-1 text-xs font-semibold text-white">
              {questions.length} questions
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {chapter.title} — Practice MCQs
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-white/80">
            Test yourself with these pharmacology questions. Pick an answer for
            each, then submit to see your score and explanations.
          </p>
        </div>
      </section>

      {/* Quiz */}
      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <McqQuiz questions={questions} />
      </section>
    </main>
  );
}
