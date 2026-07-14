"use client";

import { useMemo, useState } from "react";
import type { McqQuestion } from "@/lib/data";

type Props = {
  questions: McqQuestion[];
};

export default function McqQuiz({ questions }: Props) {
  // selected[i] = the option index the user picked for question i (or -1)
  const [selected, setSelected] = useState<number[]>(() =>
    questions.map(() => -1)
  );
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = selected.filter((s) => s !== -1).length;
  const score = useMemo(
    () =>
      questions.reduce(
        (acc, q, i) => (selected[i] === q.correctIndex ? acc + 1 : acc),
        0
      ),
    [questions, selected]
  );

  function choose(qIndex: number, optIndex: number) {
    if (submitted) return;
    setSelected((prev) => {
      const next = [...prev];
      next[qIndex] = optIndex;
      return next;
    });
  }

  function reset() {
    setSelected(questions.map(() => -1));
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const percent = Math.round((score / questions.length) * 100);

  return (
    <div>
      {/* Progress / score bar */}
      <div className="sticky top-0 z-10 -mx-6 mb-8 border-b border-[var(--mcq-border-slate-200)] bg-[var(--mcq-bg)]/90 px-6 py-4 backdrop-blur lg:-mx-8 lg:px-8">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-[var(--mcq-text-slate-600)]">
            {submitted
              ? `You scored ${score} / ${questions.length} (${percent}%)`
              : `${answeredCount} of ${questions.length} answered`}
          </span>
          {!submitted ? (
            <button
              onClick={() => {
                setSubmitted(true);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              disabled={answeredCount === 0}
              className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Submit answers
            </button>
          ) : (
            <button
              onClick={reset}
              className="rounded-lg border border-[var(--mcq-border-slate-300)] px-4 py-2 text-sm font-semibold text-[var(--mcq-text-slate-600)] transition hover:bg-[var(--mcq-bg-slate-50)]"
            >
              Try again
            </button>
          )}
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[var(--mcq-bg-slate-50)]">
          <div
            className="h-full rounded-full bg-teal-500 transition-all duration-300"
            style={{
              width: `${
                submitted
                  ? percent
                  : (answeredCount / questions.length) * 100
              }%`,
            }}
          />
        </div>
      </div>

      {/* Questions */}
      <ol className="space-y-6">
        {questions.map((q, qi) => {
          const picked = selected[qi];
          return (
            <li
              key={q.id}
              className="rounded-2xl border border-[var(--mcq-border-slate-200)] bg-[var(--mcq-bg)] p-6 shadow-sm"
            >
              <div className="flex gap-3">
                <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-teal-600/10 text-sm font-semibold text-teal-600">
                  {qi + 1}
                </span>
                <h3 className="mt-0.5 text-base font-semibold leading-snug text-[var(--mcq-text-slate-900)]">
                  {q.question}
                </h3>
              </div>

              <div className="mt-4 grid gap-2.5">
                {q.options.map((opt, oi) => {
                  const isPicked = picked === oi;
                  const isCorrect = q.correctIndex === oi;

                  // Colour states depend on whether the quiz was submitted.
                  let stateClasses =
                    "border-[var(--mcq-border-slate-200)] hover:border-teal-400";
                  if (submitted) {
                    if (isCorrect) {
                      stateClasses =
                        "border-emerald-500 bg-emerald-500/10 text-emerald-700";
                    } else if (isPicked) {
                      stateClasses =
                        "border-red-400 bg-red-500/10 text-red-600";
                    } else {
                      stateClasses = "border-[var(--mcq-border-slate-200)] opacity-70";
                    }
                  } else if (isPicked) {
                    stateClasses = "border-teal-500 bg-teal-500/10";
                  }

                  return (
                    <button
                      key={oi}
                      onClick={() => choose(qi, oi)}
                      disabled={submitted}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition disabled:cursor-default ${stateClasses} text-[var(--mcq-text-slate-900)]`}
                    >
                      <span
                        className={`flex h-6 w-6 flex-none items-center justify-center rounded-full border text-xs font-semibold ${
                          isPicked
                            ? "border-transparent bg-teal-600 text-white"
                            : "border-[var(--mcq-border-slate-300)] text-[var(--mcq-text-slate-500)]"
                        }`}
                      >
                        {String.fromCharCode(65 + oi)}
                      </span>
                      <span className="flex-1">{opt}</span>
                      {submitted && isCorrect && (
                        <svg className="h-5 w-5 flex-none text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      {submitted && isPicked && !isCorrect && (
                        <svg className="h-5 w-5 flex-none text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation shown after submitting */}
              {submitted && (
                <div className="mt-4 rounded-xl bg-[var(--mcq-bg-slate-50)] p-4 text-sm text-[var(--mcq-text-slate-600)]">
                  <span className="font-semibold text-[var(--mcq-text-slate-900)]">
                    Explanation:{" "}
                  </span>
                  {q.explanation}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
