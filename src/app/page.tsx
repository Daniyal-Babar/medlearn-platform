import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative px-6 py-32 lg:px-8 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl mb-6">
          Master Medicine with <span className="text-blue-600">MedLearn</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl">
          Premium medical lectures, notes, and resources. Subscribe to unlock the path to acing your medical exams with expert-led content.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
          >
            Get Started
          </a>
          <a href="#" className="text-lg font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors">
            View Pricing <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      {/* Features Outline */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Faster Learning</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              High-quality video lectures, comprehensive notes, and a supportive community.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
