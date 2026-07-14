import Link from "next/link";
import { notFound } from "next/navigation";
import PdfViewer from "@/components/PdfViewer";
import { notes } from "@/lib/data";

export default async function NoteDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const note = notes.find((n) => n.id === id);

  if (!note) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--note-bg-slate-50)]">
      {/* Header */}
      <section className="border-b border-[var(--note-border-slate-200)] bg-[var(--note-bg)]">
        <div className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
          <Link
            href="/notes"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--note-text-slate-500)] transition hover:text-teal-600"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Notes
          </Link>

          <div className="mt-5 flex items-center gap-3">
            {note.free && (
              <span className="rounded-full bg-emerald-500 px-2.5 py-1 text-xs font-semibold text-white">
                Free
              </span>
            )}
            <span className="rounded-full bg-teal-600/10 px-2.5 py-1 text-xs font-semibold text-teal-600">
              {note.pages} pages
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[var(--note-text-slate-900)] sm:text-4xl">
            {note.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-[var(--note-text-slate-600)]">
            Read this chapter online. Downloading and printing are disabled — the
            notes are available for viewing within MedLearn only.
          </p>
        </div>
      </section>

      {/* Viewer */}
      <section className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
        <PdfViewer url="/api/pdf" />
      </section>
    </main>
  );
}
