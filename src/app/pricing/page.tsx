import Link from "next/link";
import { plans } from "@/lib/data";

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel your subscription at any time from your dashboard — you'll keep access until the end of your billing period.",
  },
  {
    q: "Do you offer student discounts?",
    a: "We offer special pricing for verified students and institutional bulk plans. Reach out to our team for details.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards. Institutional plans can also be invoiced.",
  },
  {
    q: "Is there a free trial?",
    a: "The Free plan gives you ongoing access to selected lectures so you can explore the platform before subscribing.",
  },
];

function CheckIcon() {
  return (
    <svg className="h-5 w-5 flex-none text-teal-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42l2.79 2.79 6.79-6.79a1 1 0 011.42 0z" clipRule="evenodd" />
    </svg>
  );
}

export default function PricingPage() {
  return (
    <main className="bg-slate-50">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative mx-auto max-w-3xl px-6 py-20 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Start free and upgrade when you&apos;re ready. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-3xl border bg-white p-8 ${
                plan.highlighted
                  ? "border-teal-500 shadow-xl shadow-teal-600/10 ring-1 ring-teal-500"
                  : "border-slate-200 shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal-600 px-4 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-500">{plan.tagline}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-slate-900">
                  ${plan.price}
                </span>
                <span className="text-sm text-slate-500">/ {plan.period}</span>
              </div>

              <Link
                href="/sign-up"
                className={`mt-6 rounded-xl px-4 py-3 text-center text-sm font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-teal-600 text-white hover:bg-teal-700"
                    : "border border-slate-300 text-slate-800 hover:border-slate-400"
                }`}
              >
                {plan.cta}
              </Link>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-slate-600">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900">
            Frequently asked questions
          </h2>
          <dl className="mt-12 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6">
                <dt className="font-semibold text-slate-900">{faq.q}</dt>
                <dd className="mt-2 text-sm leading-6 text-slate-600">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
