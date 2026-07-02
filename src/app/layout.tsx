import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MedLearn",
  icons: {
    icon: "/iconPulse.svg",
  },
  description:
    "Premium medical lectures, notes and resources. Subscribe to unlock expert-led video courses and ace your medical exams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html
        lang="en"
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      // data-scroll-behavior="smooth"
      >
        <body className="flex min-h-full flex-col bg-slate-50 text-slate-900">
          <Providers>
            <ScrollToTop />
            <Navbar />
            <div className="flex flex-1 flex-col">{children}</div>
            <Footer />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
