import Link from "next/link";
import Logo from "./Logo";

const footerSections = [
  {
    title: "Platform",
    links: [
      { href: "/lectures", label: "Browse lectures" },
      { href: "/pricing", label: "Pricing" },
      { href: "/dashboard", label: "Dashboard" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#", label: "About us" },
      { href: "#", label: "Instructors" },
      { href: "#", label: "Careers" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "#", label: "Help center" },
      { href: "#", label: "Contact" },
      { href: "#", label: "Privacy & terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--footer-border-slate-200)] bg-[var(--footer-bg)]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-6 text--[var(--footer-text-slate-600)]">
              Premium medical lectures, notes and resources — built to help you
              ace your exams and care for your patients.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text--[var(--footer-text-slate-900)]">{section.title}</h3>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text--[var(--footer-text-slate-600)] transition-colors hover:text-teal-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--footer-border-slate-100)] pt-8 sm:flex-row">
          <p className="text-sm text--[var(--footer-text-slate-500)]">
            © {new Date().getFullYear()} MedLearn. All rights reserved.
          </p>
          <p className="text-sm text--[var(--footer-text-slate-500)]">Made for medical learners worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
