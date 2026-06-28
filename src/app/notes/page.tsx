"use client";

import { useState } from "react";
import LectureCard from "@/components/LectureCard";
import { categories, lectures } from "@/lib/data";

export default function LecturesPage() {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = lectures.filter((l) => {
    const matchesCategory = active === "All" || l.category === active;
    const matchesQuery = l.title.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const tabs = ["All", ...categories];

  return (
    <main className="bg-slate-50">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Lecture library
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-slate-600">
            Browse our growing catalogue of expert-led medical lectures across
            every core subject.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-md">
            <div className="relative">
              <svg
                className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
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
                placeholder="Search lectures..."
                className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === tab
                  ? "bg-teal-600 text-white"
                  : "border border-slate-300 bg-white text-slate-600 hover:border-slate-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((lecture) => (
              <LectureCard key={lecture.id} lecture={lecture} />
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center">
            <p className="text-slate-500">No lectures match your search.</p>
          </div>
        )}
      </section>
    </main>
  );
}
