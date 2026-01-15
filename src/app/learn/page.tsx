import { notFound } from "next/navigation";

// BLOG PAGE TEMPORARILY DISABLED
// Uncomment below to re-enable

/*
import LearnPage from "@/components/learn/LearnPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Learn - Simplified Blog",
  },
  description: "Master tech careers with expert tutorials on software engineering, data science, UX design, QA, and AI automation. Free resources to help you break into tech in 2025.",
  keywords: [
    "tech career tutorials",
    "software engineering guide",
    "data science learning",
    "UX design resources",
    "career change to tech",
    "tech bootcamp resources",
    "learn programming",
    "AI automation guide",
    "quality assurance career",
    "tech career advice",
  ],
  openGraph: {
    title: "Learn Tech Skills | Free Career Resources & Tutorials",
    description: "Master tech careers with expert tutorials on software engineering, data science, UX design, QA, and AI automation. Free resources to help you break into tech in 2025.",
    url: "https://simplified.org/learn",
    siteName: "Simplified.org",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn Tech Skills | Free Career Resources & Tutorials",
    description: "Master tech careers with expert tutorials on software engineering, data science, UX design, and more.",
  },
  alternates: {
    canonical: "https://simplified.org/learn",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
*/

export default function Page() {
  // return <LearnPage />;
  notFound();
}
