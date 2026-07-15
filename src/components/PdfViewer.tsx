"use client";

import { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";

// Worker is served from /public so it resolves the same in dev and prod.
pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

type Props = {
  /** Endpoint that streams the PDF bytes. */
  url: string;
};

export default function PdfViewer({ url }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pdfRef = useRef<pdfjsLib.PDFDocumentProxy | null>(null);

  const [numPages, setNumPages] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [scale, setScale] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Load the document once.
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(false);

    const task = pdfjsLib.getDocument({
      url,
      // Sent so the API route serves the file; a direct visit lacks this.
      httpHeaders: { "x-medlearn-viewer": "1" },
      withCredentials: false,
    });

    task.promise.then(
      (pdf) => {
        if (cancelled) return;
        pdfRef.current = pdf;
        setNumPages(pdf.numPages);
        setLoading(false);
      },
      () => {
        if (cancelled) return;
        setError(true);
        setLoading(false);
      }
    );

    return () => {
      cancelled = true;
      task.destroy();
    };
  }, [url]);

  // Track available width so pages fit the column responsively.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect.width ?? 0;
      if (w) setContainerWidth(w);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Render (or re-render) all pages when the doc, width, or zoom changes.
  useEffect(() => {
    const pdf = pdfRef.current;
    const container = containerRef.current;
    if (!pdf || !container || !containerWidth) return;

    let cancelled = false;
    const tasks: pdfjsLib.RenderTask[] = [];

    (async () => {
      container.replaceChildren();
      const dpr = window.devicePixelRatio || 1;

      for (let n = 1; n <= pdf.numPages; n++) {
        if (cancelled) return;
        const page = await pdf.getPage(n);
        const base = page.getViewport({ scale: 1 });
        // Fit page to the column, then apply the user's zoom factor.
        const fit = (containerWidth / base.width) * scale;
        const viewport = page.getViewport({ scale: fit });

        const canvas = document.createElement("canvas");
        canvas.className =
          "mx-auto mb-4 max-w-full rounded-lg bg-white shadow-md";
        canvas.width = Math.floor(viewport.width * dpr);
        canvas.height = Math.floor(viewport.height * dpr);
        canvas.style.width = `${viewport.width}px`;
        canvas.style.height = `${viewport.height}px`;

        const ctx = canvas.getContext("2d");
        if (!ctx) continue;
        container.appendChild(canvas);

        const task = page.render({
          canvasContext: ctx,
          viewport,
          transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : undefined,
        });
        tasks.push(task);
        try {
          await task.promise;
        } catch {
          // Render cancelled (e.g. zoom changed mid-render) — ignore.
        }
      }
    })();

    return () => {
      cancelled = true;
      tasks.forEach((t) => t.cancel());
    };
  }, [numPages, containerWidth, scale]);

  return (
    <div className="rounded-2xl border border-[var(--note-border-slate-200)] bg-[var(--note-bg-slate-50)]">
      {/* Toolbar */}
      <div className="sticky top-0 z-10 flex items-center justify-between gap-4 rounded-t-2xl border-b border-[var(--note-border-slate-200)] bg-[var(--note-bg)]/90 px-4 py-3 backdrop-blur">
        <span className="text-sm text-[var(--note-text-slate-500)]">
          {loading
            ? "Loading…"
            : error
              ? "Failed to load"
              : `${numPages} page${numPages === 1 ? "" : "s"}`}
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setScale((s) => Math.max(0.5, +(s - 0.15).toFixed(2)))}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--note-border-slate-300)] text-[var(--note-text-slate-600)] transition hover:bg-[var(--note-bg-slate-50)]"
            aria-label="Zoom out"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </button>
          <span className="w-12 text-center text-sm tabular-nums text-[var(--note-text-slate-600)]">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={() => setScale((s) => Math.min(2.5, +(s + 0.15).toFixed(2)))}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--note-border-slate-300)] text-[var(--note-text-slate-600)] transition hover:bg-[var(--note-bg-slate-50)]"
            aria-label="Zoom in"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
            </svg>
          </button>
        </div>
      </div>

      {/* Page canvases. Right-click and selection disabled to deter saving. */}
      <div
        ref={containerRef}
        onContextMenu={(e) => e.preventDefault()}
        className="max-h-[80vh] select-none overflow-auto p-4"
      >
        {loading && (
          <div className="flex h-64 items-center justify-center text-[var(--note-text-slate-500)]">
            <span className="h-6 w-6 animate-spin rounded-full border-2 border-teal-500 border-t-transparent" />
          </div>
        )}
        {error && (
          <div className="flex h-64 items-center justify-center text-[var(--note-text-slate-500)]">
            This document could not be displayed.
          </div>
        )}
      </div>
    </div>
  );
}
