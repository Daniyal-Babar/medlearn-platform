"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { SignInButton, SignUpButton, UserButton, useAuth } from "@clerk/nextjs";

const navLinks = [
  { href: "/lectures", label: "Lectures" },
  { href: "/notes", label: "Notes" },
  { href: "/mcqs", label: "MCQs" },
  { href: "/pricing", label: "Pricing" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { isSignedIn } = useAuth();

  return (
    // <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[var(--background)] backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Logo />

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${active ? "text-teal-600" : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {!isSignedIn ? (
            <>
              <SignInButton mode="modal">
                <button className="text-sm font-semibold text-slate-700 transition-colors hover:text-slate-900">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-700">
                  Get started
                </button>
              </SignUpButton>
            </>
          ) : (
            <UserButton />
          )}
          {/* <ThemeToggle /> */}
        </div>

        {/* Mobile toggle */}
        <div>
          <ThemeToggle />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-slate-100 pt-3">
              {!isSignedIn ? (
                <>
                  <SignInButton mode="modal">
                    <button
                      onClick={() => setOpen(false)}
                      className="w-full rounded-lg px-3 py-2 text-center text-sm font-semibold text-slate-700 hover:bg-slate-100"
                    >
                      Sign in
                    </button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button
                      onClick={() => setOpen(false)}
                      className="w-full rounded-lg bg-teal-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-teal-700"
                    >
                      Get started
                    </button>
                  </SignUpButton>
                </>
              ) : (
                <div className="px-3 py-2 flex justify-center">
                  <UserButton />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
