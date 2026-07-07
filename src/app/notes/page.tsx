"use client";

import { useState } from "react";
import NotesCard from "@/components/NotesCard";
import { notes } from "@/lib/data";

export default function NotesPage() {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = notes.filter((l) => {
    const matchesQuery = l.title.toLowerCase().includes(query.toLowerCase());
    return matchesQuery;
  });

  return (
    <main className="bg-[var(--note-bg-slate-50)]">
      {/* Header */}
      <section className="border-b border-[var(--note-border-slate-200)] bg-[var(--note-bg)]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--note-text-slate-900)] sm:text-4xl">
            Notes
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-[var(--note-text-slate-600)]">
            Browse our chapter wise notes from pharmacology book.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-md">
            <div className="relative">
              <svg
                className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-[var(--note-text-slate-400)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search notes..."
                className="w-full rounded-xl border border-[var(--note-border-slate-300)] bg-[var(--note-bg)] py-2.5 pl-10 pr-4 text-sm text-[var(--note-text-slate-900)] outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        

        {filtered.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((note) => (
              <NotesCard key={note.id} Note={note} />
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-2xl border border-dashed border-[var(--note-border-slate-300)] bg-[var(--note-bg)] py-20 text-center">
            <p className="text-[var(--note-text-slate-500)]">No chapter match your search.</p>
          </div>
        )}
      </section>
    </main>
  );
}
